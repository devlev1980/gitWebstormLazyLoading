import {Component, OnInit} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {AlbumByArtist} from '../models/album';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  albums: any;
  artWorks;
  artWork64;

  constructor(private lastFmService: LastFmService, private sanitazion: DomSanitizer) {
  }

  ngOnInit() {
    this.lastFmService.getAlbumsByArtist('muse').subscribe(album => {
      this.albums = album.topalbums.album;
      // console.log(album.topalbums.album.map(image=> image.image[0]['#text']));
      // this.artWorks = album.topalbums.album.map(image => image.image['#text']);
      // console.log(album.topalbums.album[0].image[0]['#text']);  ---- image
      // this.artWorks = album.topalbums.album[0].image;

      // this.artWork64 = this.sanitazion.bypassSecurityTrustUrl(`${this.artWorks}`);


    });


  }

}
