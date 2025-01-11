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
    cover:'https://dojiw2m9tvv09.cloudfront.net/41657/product/X_2878515-25433947208.jpg?86&time=1732121548',
    album:'Dark Side of the Moon',
    name:'Sky',
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

   this.listObservers$=[listObservers$]
  }

  //Este es el ultimo que se ejecuta antes de destruir el componente
    ngOnDestroy(): void {
      console.log('💔💔🤍🤍');
      
        
    }
}
