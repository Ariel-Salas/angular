import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //recordar. esto es de programación reactiva

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover:TrackModel={
    cover:'https://www.mjvibe.com/wp-content/uploads/2016/02/cover4.png',
    album:'Michael Jackson',
    name:'Rock With You 🕺💃',
    url: 'https://localhost/track.mp3',
    _id: '1'
  }


listObservers$:Array<Subscription>=[]



  constructor(private multimediaService: MultimediaService){}
  ngOnInit():void {
    const observer1$: Subscription= this.multimediaService.callback.subscribe(
    (response:TrackModel) => {
      console.log('recibiedo canción', response);
      
    }
   )

   this.listObservers$=[observer1$]
  }

  //Este es el ultimo que se ejecuta antes de destruir el componente
    ngOnDestroy(): void {
      this.listObservers$.forEach(u=> u.unsubscribe)
      console.log('💔💔🤍🤍');
      
        
    }
}
