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
import {AlbumByArtist} from '../models/album';
import {ITunesService} from '../services/i-tunes.service';
import {ITunesArtist} from '../models/i-tunes-artist';
import {ITunesAlbum} from '../models/i-tunes-album';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  albums = {} as any;
  spotifyArtists = {}as  SpotifyArtist;
  iTunesArtists = {}as ITunesArtist;
  iTunesAlbumByArtist = {} as ITunesAlbum;
  spotifyAlbumsPerArtist = {} as SpotifyAlbumsPerArtist;

  artist: string;
  displayedColumns = ['index', 'artwork', 'album name', 'release date', 'total tracks', 'rating'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  length;
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [10];
  rate: number;
  albumWithRaiting: AlbumByArtist;
  myFavoriteAlbum = [];
  wasClicked = false;

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
              private spotifyService: SpotifyService,
              private itunesService: ITunesService) {


  }


  ngOnInit() {
    const artistName = JSON.parse(this.lsService.get('artist'));
    this.setDataSource(artistName);
    this.getSpotifyArtists(artistName);
  }

  getSpotifyArtists(artistName: string) {

    this.itunesService.searchArtist(artistName).subscribe(artists => {
      this.iTunesArtists.results = artists.results;

      this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    });


  }

  getArtistAlbums(artistId) {

    this.itunesService.searchAlbumByArtist(artistId).subscribe(albums => {
      console.log(albums);
      this.iTunesAlbumByArtist.results = albums.results;
      this.dataSource = new MatTableDataSource(this.iTunesAlbumByArtist.results.slice(1));
      this.lsService.set('artist', JSON.stringify(this.iTunesAlbumByArtist.results.slice(1)));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


  }


  onAlbumDetails(id: string) {

    this.router.navigate([`/orders/albumInfo/${id}`]);


  }

  onRateChange(album) {
    this.myFavoriteAlbum.push(album);
    this.lsService.set('favoriteAlbums', JSON.stringify(this.myFavoriteAlbum));
    const albumInLS = JSON.parse(this.lsService.get('artist'));
    let albumId = albumInLS.findIndex(item => item.id === album.id);
    if (albumId >= 0) {
      albumInLS.splice(albumId, 1);
      albumInLS.unshift(album);
      this.lsService.set('artist', JSON.stringify(albumInLS));
    }

  }
  onFavoriteAlbum() {
    this.myFavoriteAlbum = JSON.parse(this.lsService.get('favoriteAlbums'));
    this.setDataSource(this.myFavoriteAlbum);
  }
  setDataSource(data){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

