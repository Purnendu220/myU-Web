import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { homeRouting } from './home.routing';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    homeRouting
  ],
  providers: [],
})
export class HomeModule { }
