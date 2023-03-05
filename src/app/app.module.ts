import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { SingleMediaPlayerComponent } from './components/single-media-player/single-media-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoViewerComponent } from './pages/video-viewer/video-viewer.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddCommentDialogComponent } from './components/modals/add-comment/add-comment-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from './components/ui/button/button.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    SingleMediaPlayerComponent,
    VideoViewerComponent,
    CommentsListComponent,
    MenuComponent,
    AddCommentDialogComponent,
    ButtonComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
