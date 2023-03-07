import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-single-media-player',
  templateUrl: './single-media-player.component.html',
})
export class SingleMediaPlayerComponent {
  constructor(private commentsService: CommentsService) {}

  @Input() public url: string;

  onPlayerReady(vgApiService: VgApiService) {
    this.commentsService.vgApiService = vgApiService;
  }
}
