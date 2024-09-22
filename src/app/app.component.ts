import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoStreamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webrtc-app';
}
