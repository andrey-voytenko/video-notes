import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment } from './comments.service.types';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor() {}

  private _comments$: BehaviorSubject<Comment[]> = new BehaviorSubject<
    Comment[]
  >([]);

  public commnets$ = this._comments$.asObservable();

  getComments(): Comment[] {
    return this._comments$.getValue();
  }

  addComment(text: string, timeInSec: number) {
    const comments = this.getComments();

    const comment: Comment = {
      createdAt: new Date(),
      displayTime: this.getDisplayTime(timeInSec),
      comment: text,
      videoTimeMoment: timeInSec,
    };
    comments.push(comment);

    this._comments$.next(comments);
  }

  private getDisplayTime(timeInSec: number) {
    return new Date(timeInSec * 1000).toISOString().slice(11, 19);
  }
}
