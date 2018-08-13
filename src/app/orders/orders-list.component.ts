import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router} from '@angular/router';
import {AlbumsDataService} from '../services/albums-data.service';
import {SpotifyService} from '../services/spotify.service';
import {SpotifyArtist} from '../models/spotify-artist';
import {FormControl} from '@angular/forms';
import {SpotifyAlbumsPerArtist} from '../models/spotify-albums-per-artist';
import {MatSort} from '@angular/material';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  albums = {} as any;
  spotifyArtists = {}as  SpotifyArtist;
  spotifyAlbumsPerArtist = {} as SpotifyAlbumsPerArtist;
  artist: string;
  displayedColumns = ['index', 'artwork', 'album name', 'release date', 'total tracks', 'rating'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  length;
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [10, 50, 100];
  rate: number;
  albumWithRaiting: any;

  get starRating() {
    return this.rate;
  }

  set starRating(rate) {
    this.rate = rate;
  }

  searchControl = new FormControl();

  constructor(private lastFmService: LastFmService,
              private sanitazion: DomSanitizer,
              private lsService: LocalStorageService,
              private router: Router,
              private albumsService: AlbumsDataService,
              private spotifyService: SpotifyService) {


  }


  ngOnInit() {
    const previousTable = JSON.parse(this.lsService.get('artist'));
    // previousTable.push(this.albumWithRaiting);
    console.log(previousTable);

    const previousArtistName = JSON.parse(this.lsService.get('artist-name'));
    this.dataSource = new MatTableDataSource(previousTable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getSpotifyArtists(previousArtistName);
  }

  getSpotifyArtists(artistName) {
    this.spotifyService.searchArtist(artistName).subscribe(artist => {

      this.spotifyArtists.artists = artist.artists;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


  }

  getArtistAlbums(id, album) {
    this.spotifyService.searchAlbums(id).subscribe(albums => {
      this.spotifyAlbumsPerArtist = albums;


      this.dataSource = new MatTableDataSource(this.spotifyAlbumsPerArtist.items);

      const albumId = this.dataSource.findIndex(item => item.id === album.id);

      // console.log(album);
      this.lsService.set('artist', JSON.stringify(this.spotifyAlbumsPerArtist.items));

      this.length = this.albums.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }


  onAlbumDetails(id: string) {
    this.router.navigate([`/orders/albumInfo/${id}`]);
    // console.log(album, artist);
    // this.lastFmService.getAlbumInfo(album, artist).subscribe(info => {
    //   this.albumsService.sendAlbums(info);
    // });
  }

  onRateChange(rate, album) {
    // console.log(rate, album);
    album.rating = rate;

    this.albumWithRaiting = album;
    console.log(this.albumWithRaiting);
    // let albumId = this.spotifyAlbumsPerArtist.items.findIndex(item => item.id === album.id);
    // console.log(albumId);


    // this.lsService.set('artist', JSON.stringify(this.spotifyAlbumsPerArtist.items));


  }

}
