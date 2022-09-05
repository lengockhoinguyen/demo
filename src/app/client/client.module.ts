import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ClientRoutingModule } from './client.routing';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    LayoutComponent,
    ProductComponent,
    FilterPipe,
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }