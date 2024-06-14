import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserInfoModule } from './user-info/user-info.module';

const routes: Routes = [
  {path: 'user', loadChildren: () => UserInfoModule},
  {path: 'home', loadChildren: () => HomeModule},
  {path:'**', redirectTo :"/home",pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
