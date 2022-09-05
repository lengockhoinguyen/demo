import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { LayoutsComponent } from './layouts/layouts/layouts.component';
import { BillComponent } from './pages/bill/bill.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
    {
        path:"admin",
        component:LayoutsComponent,
        canActivateChild:[AdminGuard],
        children:[
            {
                path:"",
                redirectTo:"product",
                pathMatch:"full",
            },
            {
                path:"product",
                component:ProductComponent
            },
            {
                path:"bill",
                component:BillComponent
            },
            {
                path:"user",
                component:UserComponent
            }
            
     
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }