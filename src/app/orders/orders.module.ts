import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersListComponent} from './orders-list.component';
import {LastFmService} from '../services/last-fm.service';
import {SharedModule} from '../shared.module';
import {LocalStorageModule, LocalStorageService} from 'angular-2-local-storage';
import { AlbumInfoComponent } from './album-info/album-info.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule.forRoot(),
    LocalStorageModule.withConfig({
      storageType: 'localStorage'
    })
  ],
  providers: [LastFmService, LocalStorageService],
  declarations: [OrdersListComponent, AlbumInfoComponent]
})
export class OrdersModule {
}
