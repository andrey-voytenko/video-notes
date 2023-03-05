import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { Comment } from '../../services/comments/comments.service.types';
import { AddCommentDialogComponent } from '../modals/add-comment/add-comment-dialog.component';
import { AddCommentModalOutputType } from '../modals/add-comment/add-comment-dialog.component.types';
@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
})
export class CommentsListComponent {
  public comments: Comment[] = [];

  @Input() vgApiService: VgApiService;

  constructor(
    private dialog: MatDialog,
    private commentsServise: CommentsService
  ) {
    commentsServise.commnets$.subscribe((comments) => {
      this.comments = comments;
    });
  }

  public addNote = () => {
    const currentTime = this.vgApiService?.getDefaultMedia().currentTime;
    const dialog = this.dialog.open(AddCommentDialogComponent, {
      width: '450px',
      data: {
        videoTimeMoment: currentTime,
        videoTimeMomentDisplay: new Date(currentTime * 1000)
          .toISOString()
          .slice(11, 19),
      },
    });

    dialog.afterClosed().subscribe((data: AddCommentModalOutputType) => {
      if (data) {
        this.commentsServise.addComment(data.text, data.videoTimeMoment);
      }
    });
  };

  public moveToTime = (time: number) => {
    this.vgApiService.currentTime = time;
  };
}
