import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-single-media-player',
  templateUrl: './single-media-player.component.html',
})
export class SingleMediaPlayerComponent {
  constructor() {}

  @Input() public url: string;
  @Output() onMediaPlayerReady = new EventEmitter<VgApiService>();

  onPlayerReady(vgApiService: VgApiService) {
    setTimeout(() => {
      this.onMediaPlayerReady.emit(vgApiService);
    }, 0);
  }
}
