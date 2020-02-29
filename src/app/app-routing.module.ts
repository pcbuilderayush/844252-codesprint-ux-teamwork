import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import {ContactusComponent} from './contactus/contactus.component';


const routes: Routes = [
  {path:'home1',component:HeaderComponent},
  {path:'temp',component:TempComponent},
  
  {path:'view',component:ViewAppointmentComponent},
  {path:'contact',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
