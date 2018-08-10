import {Component, OnInit} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {Charts} from '../models/chart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']

})
export class ChartsComponent implements OnInit {

  constructor(private lastFMService: LastFmService) {
  }

  charts = {} as Charts;

  ngOnInit() {
    this.lastFMService.getCharts().subscribe(charts => {
      this.charts = charts;
    });

  }

}
