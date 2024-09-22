import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebrtcService } from '../../services/webrtc.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-stream',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './video-stream.component.html',
  styleUrl: './video-stream.component.scss'
})
export class VideoStreamComponent implements OnInit {
  @ViewChild('localVideo') localVideo: ElementRef;
  @ViewChild('remoteVideo') remoteVideo: ElementRef;

  constructor(private webrtcService: WebrtcService) {}

  async ngOnInit() {
    await this.webrtcService.startLocalStream();
    this.localVideo.nativeElement.srcObject = this.webrtcService.getLocalStream();
  }

  async startCall() {
    await this.webrtcService.createOffer();
  }

  // Add methods to handle remote offer, answer, and candidates
}
