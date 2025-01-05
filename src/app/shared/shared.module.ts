import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';




@NgModule({
  
  imports: [
    CommonModule,
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericComponent
  

  ],

  exports:[
  ]
})
export class SharedModule { }
