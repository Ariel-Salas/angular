import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observable, Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';



@Component({
  selector: 'app-tracks-page',
  standalone:true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy{

  tracksTrending: Array<TrackModel>=[]
  tracksRandom: Array<TrackModel>=[]
  listObservers$:Array<Subscription>=[]

  constructor(private trackService:TrackService) { }

 ngOnInit(): void {
  this.loadDataAll()
  this.loadDataRandom()

    // this.trackService.getAllTracks$()
    //   .subscribe((response: TrackModel[]) => {
    //     this.tracksTrending=response
    //   })



    //   this.trackService.getAllRandom$()
    //   .subscribe((response: TrackModel[]) => {
    //     this.tracksRandom=response
    //   })
  }

async loadDataAll():Promise<any>{
  this.tracksTrending= await this.trackService.getAllTracks$().toPromise()

}



loadDataRandom():void{
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom=response
    })
}



  ngOnDestroy(): void {

  }

}
