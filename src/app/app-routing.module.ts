import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  {
    path: 'login', loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'signup', loadChildren: 'app/signup/signup.module#SignupModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
