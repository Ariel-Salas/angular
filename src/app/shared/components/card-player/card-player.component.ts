import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{
  @Input() mode:'small' | 'big'='small'
  @Input() track!:TrackModel;

  constructor(){}
  ngOnInit():void {

  }


}
