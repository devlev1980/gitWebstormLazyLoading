import {Component, OnInit, ViewChild} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {Charts} from '../models/chart';
import {BillboardService} from '../services/billboard.service';
import {AngularBillboardService} from 'angular-billboard';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']

})
export class ChartsComponent implements OnInit {

  constructor(private lastFMService: LastFmService, private angularBillboardService: AngularBillboardService) {
  }

  charts = {} as Charts;
  allCharts;
  displayedColumns = ['index', 'artist', 'playcounts', 'listeners', 'total tracks'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  length;
  pageSize = 13;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [50];

  ngOnInit() {
    this.lastFMService.getCharts().subscribe(charts => {
      this.allCharts = charts.artists.artist;
      this.dataSource = new MatTableDataSource(this.allCharts);
      this.dataSource.paginator = this.paginator
    });



  }


}
