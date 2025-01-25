import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class TrackService {


  private readonly URL=environment.api;
  //a los valores observables se les coloca $ pogrmación reactiva
  // dataTracksTrending$: Observable<TrackModel[]>= of([])
  // dataTracksRandom$: Observable<any>= of([])

  
  constructor(private http:HttpClient) { 
 
  }


  getAllTracks$():Observable <any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) =>{
        return data.sort(() => Math.random() - 0.5)
      })
    )
  }


  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data.slice(0,8);
      }),
      catchError((err) => {
        console.log('error revisar:', err); // Muestra más información sobre el error
        return of([]); // Devuelve un array vacío si ocurre un error
      })
    );
  }
  


}


