import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoViewerComponent } from './pages/video-viewer/video-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: VideoViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
