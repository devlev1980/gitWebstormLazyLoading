import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersListComponent} from './orders-list.component';
import {AlbumInfoComponent} from './album-info/album-info.component';

const routes: Routes = [
  {
    path: '', component: OrdersListComponent
  },
  {
    path: 'albumInfo/:id',
    component: AlbumInfoComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
