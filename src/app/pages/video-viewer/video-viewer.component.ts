import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
})
export class VideoViewerComponent {
  public vgApiService: VgApiService;

  constructor() {}

  public onMediaPlayerReady = (vgApiService: VgApiService) => {
    this.vgApiService = vgApiService;
  };
}
