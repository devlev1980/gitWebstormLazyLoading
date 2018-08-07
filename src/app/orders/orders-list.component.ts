import {Component, OnInit, ViewChild} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {AlbumByArtist} from '../models/album';
import {DomSanitizer} from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router} from '@angular/router';

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
  displayedColumns = ['index', 'artist', 'artwork', 'name', 'playcount', 'url'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length;
  pageSize = 13;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [13, 50, 100];

  constructor(private lastFmService: LastFmService, private sanitazion: DomSanitizer, private lsService: LocalStorageService,private router: Router) {

  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }

  ngOnInit() {
    const artistName = JSON.parse(this.lsService.get('artist'));
    this.getData(artistName);
  }

  getData(artistName: string) {

    this.lastFmService.getAlbumsByArtist(artistName).subscribe(album => {
      console.log(album.topalbums['@attr'].artist);
      this.albums = album.topalbums.album;
      this.dataSource = new MatTableDataSource(this.albums);
      this.lsService.set('artist', JSON.stringify(artistName));
      this.length = this.albums.length;
      this.dataSource.paginator = this.paginator;
    });
  }
  onAlbumDetails(album: string, atrist: string){
    this.router.navigate(['/orders/albumInfo']);
  }

}
