import {Component, OnInit, ViewChild} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {AlbumByArtist} from '../models/album';
import {DomSanitizer} from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  albums: any;
  artWorks;
  artWork64;
  artist: string;
  displayedColumns = ['index', 'artwork', 'name', 'playcount', 'url'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length;
  pageSize = 13;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [13, 50, 100];

  constructor(private lastFmService: LastFmService, private sanitazion: DomSanitizer) {

  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }

  ngOnInit() {
    // this.getData(this.artist);

  }

  getData(artistName: string) {
    this.lastFmService.getAlbumsByArtist(artistName).subscribe(album => {
      this.albums = album.topalbums.album;
      this.dataSource = new MatTableDataSource(this.albums);
      this.length = this.albums.length;
      this.dataSource.paginator = this.paginator;

      // this.pageSize = this.paginator.pageSize;

    });
  }

}
