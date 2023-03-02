import { Component, Input, ViewChild } from '@angular/core';
import { IMediaElement, VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-single-media-player',
  templateUrl: './single-media-player.component.html',
  styleUrls: ['./single-media-player.component.scss'],
})
export class SingleMediaPlayerComponent {
  private vgApiService: VgApiService;

  @Input() public url: string;

  onRightClick() {
    console.log(this.vgApiService.getDefaultMedia().currentTime);
    return false;
  }

  onPlayerReady(vgApiService: VgApiService) {
    this.vgApiService = vgApiService;

    this.vgApiService.getDefaultMedia().subscriptions.pause.subscribe(() => {
      console.log(this.vgApiService.getDefaultMedia().currentTime);
    });
  }
}
