import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {WorksPageComponent} from './works-page/works-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {KovkaPageComponent} from './kovka-page/kovka-page.component';
import {GranitPageComponent} from './granit-page/granit-page.component';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'works', component: WorksPageComponent},
  {path: 'gazon', component: KovkaPageComponent},
  {path: 'granit', component: GranitPageComponent},
  {path: 'contact', component: ContactPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
