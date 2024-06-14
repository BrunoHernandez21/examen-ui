import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { CardRegisterComponent } from "./components/card-register/card-register.component";
import { CarouselComponent } from "./components/caroucel/carousel.component";
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[
    HomeComponent,
    CardRegisterComponent,
    CarouselComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
})
export class HomeModule{}
