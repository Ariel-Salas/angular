import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:"", //TODO localhost:4200/
        loadChildren:()=> import("./modules/home/home.module").then(m=>m.HomeModule)
    }

];
