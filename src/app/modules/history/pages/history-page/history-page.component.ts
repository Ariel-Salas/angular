import { Component, OnInit } from '@angular/core';
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import* as data from '../../../../data/tracks.json'

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  mockTracksList=[



  ]

  constructor() { }

  ngOnInit(): void {
    console.log(data)
      
  }
}
