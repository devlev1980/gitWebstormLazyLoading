import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import {ChartsComponent} from './charts.component';
import {LastFmService} from '../services/last-fm.service';
import {AngularBillboardModule} from 'angular-billboard';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule.forRoot(),
    AngularBillboardModule
  ],
  declarations: [ChartsComponent],
  providers: [LastFmService]
})
export class ChartsModule { }
