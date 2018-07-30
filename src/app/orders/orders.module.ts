import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {OrdersListComponent} from './orders-list.component';
import {LastFmService} from '../services/last-fm.service';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [LastFmService],
  declarations: [OrdersListComponent]
})
export class OrdersModule { }
