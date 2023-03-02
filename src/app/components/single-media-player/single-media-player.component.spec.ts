import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

import { SingleMediaPlayerComponent } from './single-media-player.component';

describe('SingleMediaPlayerComponent', () => {
  let component: SingleMediaPlayerComponent;
  let fixture: ComponentFixture<SingleMediaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
      ],
      declarations: [SingleMediaPlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleMediaPlayerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
});
