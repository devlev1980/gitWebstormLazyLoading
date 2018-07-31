import {Component, OnInit} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {AlbumByArtist} from '../models/album';
import {MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  albums: any;
  dataSource;
  albumArtwork;
  displayedColumns = ['name', 'playcount', 'image'];

  constructor(private lastFmService: LastFmService, public _DomSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.lastFmService.getAlbumsByArtist('muse').subscribe(data => {
      console.log(data.topalbums.album);
      this.albums = data.topalbums.album;
      // console.log(this.albums[0].image[0]['#text']);
      this.albumArtwork = this.albums[0].image.take(image => {
        console.log(image);
      });
      // console.log(this.albumArtwork);


      // const albumArtwork64 = base64Img.base64(this.albumArtwork);


      this.dataSource = new MatTableDataSource(this.albums);
    });


    // return this.albums;
  }

}
