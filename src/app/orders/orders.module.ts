import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {OrdersListComponent} from './orders-list.component';
import {LastFmService} from '../services/last-fm.service';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [LastFmService],
  declarations: [OrdersListComponent]
})
export class OrdersModule { }
