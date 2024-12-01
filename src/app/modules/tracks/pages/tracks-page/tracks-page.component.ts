import { Component, OnInit } from '@angular/core';
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import* as data from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{

  mockTracksList=[



  ]

  constructor() { }

  ngOnInit(): void {
    console.log(data)
      
  }

}
