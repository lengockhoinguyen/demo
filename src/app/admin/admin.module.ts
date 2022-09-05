import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent} from './layouts/layouts/layouts.component'
import { UserComponent } from './pages/user/user.component';
import { BillComponent } from './pages/bill/bill.component';
import { ProductComponent } from './pages/product/product.component';
import { AdminRoutingModule } from './admin.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutsComponent,
    UserComponent,
    BillComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }