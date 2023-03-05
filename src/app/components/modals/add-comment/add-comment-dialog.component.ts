import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AddCommentModalInputType,
  AddCommentModalOutputType,
} from './add-comment-dialog.component.types';

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
})
export class AddCommentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: AddCommentModalInputType
  ) {}

  noteForm: FormGroup = new FormGroup({
    comment: new FormControl('', Validators.required),
  });

  public close = () => {
    this.dialogRef.close();
  };

  public save = () => {
    if (this.noteForm.valid) {
      const data: AddCommentModalOutputType = {
        text: this.noteForm.value.comment,
        videoTimeMoment: this.data.videoTimeMoment,
      };
      this.dialogRef.close(data);
    }
  };
}
