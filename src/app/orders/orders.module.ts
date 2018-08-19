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
import {ITunesService} from '../services/i-tunes.service';
import { PlayerComponent } from './album-info/player/player.component';
import {CovalentDataTableModule} from '@covalent/core';
import {MomentModule} from 'angular2-moment';
import { MinuteSecondsPipe } from './album-info/minute-seconds.pipe';
import { SafePipe } from './album-info/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule.forRoot(),
    LocalStorageModule.withConfig({
      storageType: 'localStorage'
    }),
    BarRatingModule,
    MomentModule


  ],
  providers: [LastFmService, LocalStorageService, SpotifyService, ITunesService],
  declarations: [OrdersListComponent, AlbumInfoComponent, MoreDataComponent, PlayerComponent, MinuteSecondsPipe, SafePipe]
})
export class OrdersModule {
}
