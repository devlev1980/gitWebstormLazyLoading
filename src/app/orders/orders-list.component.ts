import {Component, OnInit, ViewChild} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {AlbumByArtist} from '../models/album';
import {DomSanitizer} from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  albums: any;
  artWorks;
  artWork64;
  displayedColumns = ['artwork', 'name', 'playcount', 'url'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 100;
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private lastFmService: LastFmService, private sanitazion: DomSanitizer) {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.lastFmService.getAlbumsByArtist('muse').subscribe(album => {
      this.albums = album.topalbums.album;
      this.paginator.length = this.albums.length;
      this.dataSource = new MatTableDataSource(this.albums);
      this.pageSize = this.paginator.pageSize;
      // this.pageSize = Math.max(5, Math.floor(height / 49 /*height of row*/ /` pageStep) * pageStep);

      // console.log(album.topalbums.album.map(image=> image.image[0]['#text']));
      // this.artWorks = album.topalbums.album.map(image => image.image['#text']);
      // console.log(album.topalbums.album[0].image[0]['#text']);  ---- image
      // this.artWorks = album.topalbums.album[0].image;

      // this.artWork64 = this.sanitazion.bypassSecurityTrustUrl(`${this.artWorks}`);


    });


  }

}
