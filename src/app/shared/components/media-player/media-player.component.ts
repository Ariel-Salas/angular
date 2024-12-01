import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover:TrackModel={
    cover:'https://dojiw2m9tvv09.cloudfront.net/41657/product/X_2878515-25433947208.jpg?86&time=1732121548',
    album:'Dark Side of the Moon',
    name:'Sky',
    url: 'https://localhost/track.mp3',
    _id: '1'
  }

  constructor(){}
  ngOnInit():void {

  }

}
