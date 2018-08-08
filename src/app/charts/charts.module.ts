import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import {ChartsComponent} from './charts.component';
import {LastFmService} from '../services/last-fm.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [ChartsComponent],
  providers: [LastFmService]
})
export class ChartsModule { }
