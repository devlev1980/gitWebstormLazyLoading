import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
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
  {
    path: '**', component: NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
