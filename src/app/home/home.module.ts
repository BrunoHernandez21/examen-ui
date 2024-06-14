import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { CardRegisterComponent } from "./components/card-register/card-register.component";
import { CarouselComponent } from "./components/caroucel/carousel.component";

@NgModule({
  declarations:[
    HomeComponent,
    CardRegisterComponent,
    CarouselComponent,
  ],
  imports:[
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule{}
