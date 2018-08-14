import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersListComponent} from './orders-list.component';
import {LastFmService} from '../services/last-fm.service';
import {SharedModule} from '../shared.module';
import {LocalStorageModule, LocalStorageService} from 'angular-2-local-storage';
import {AlbumInfoComponent} from './album-info/album-info.component';
import {MoreDataComponent} from './album-info/more-data/more-data.component';
import {SpotifyService} from '../services/spotify.service';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule.forRoot(),
    LocalStorageModule.withConfig({
      storageType: 'localStorage'
    }),
    BarRatingModule
  ],
  providers: [LastFmService, LocalStorageService, SpotifyService],
  declarations: [OrdersListComponent, AlbumInfoComponent, MoreDataComponent]
})
export class OrdersModule {
}
