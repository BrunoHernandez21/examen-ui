import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { UserInfoRoutingModule } from "./user-info-routing.module";

@NgModule({

  declarations:[
    UserInfoComponent,
  ],
  imports:[
    CommonModule,
    UserInfoRoutingModule,
  ],
})
export class UserInfoModule{}
