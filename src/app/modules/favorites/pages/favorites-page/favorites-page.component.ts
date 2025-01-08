import { Component, OnInit } from '@angular/core'; // Asegúrate de incluir OnInit
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import * as data from '../../../../data/tracks.json';
import { PlayListBodyComponent } from "../../../../shared/components/play-list-body/play-list-body.component";
import { PlayListHeaderComponent } from "../../../../shared/components/play-list-header/play-list-header.component";
@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [SectionGenericComponent, PlayListBodyComponent, PlayListHeaderComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent implements OnInit{
  mockTracksList=[



  ]

  constructor() { }


  ngOnInit(): void {
    console.log(data)
      
  }

}
