import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PageLoginRoutingModule } from './pageLogin.routing';



@NgModule({
  declarations: [
    LayoutsComponent,
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    PageLoginRoutingModule
  ]
})
export class PageLoginModule { }