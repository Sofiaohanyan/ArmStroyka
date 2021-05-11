import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { WorksPageComponent } from './works-page/works-page.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorksComponent } from './works/works.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {AppRoutingModule} from './app-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KovkaPageComponent } from './kovka-page/kovka-page.component';
import { GranitPageComponent } from './granit-page/granit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    WorksComponent,
    ContactPageComponent,
    WorksPageComponent,
    AboutPageComponent,
    KovkaPageComponent,
    GranitPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
