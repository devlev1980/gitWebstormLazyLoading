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
import {ItunesService} from '../services/itunes.service';
import {ItunesArtist} from '../models/itunes-artist';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  albums = {} as any;
  spotifyArtists = {}as  ItunesArtist;
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
              private itunesService: ItunesService) {


  }


  ngOnInit() {
    // const artistName = JSON.parse(this.lsService.get('artist'));
    // this.dataSource = new MatTableDataSource(artistName);
    // this.dataSource.paginator = this.paginator;
    // this.getSpotifyArtists(artistName);
    // console.log(this.myFavoriteAlbum);
  }

  getSpotifyArtists(artistName: string) {
    // this.spotifyService.searchArtist(artistName).subscribe(artist => {
    //   // this.lsService.set('artist', JSON.stringify(artist));
    //   this.spotifyArtists.artists = artist.artists;
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    //   // console.log(this.dataSource);
    //
    //
    // });
    this.itunesService.searchArtist(artistName).subscribe(artist => {
      console.log(artist.results);
      this.spotifyArtists.results = artist.results;
      this.dataSource.paginator = this.paginator;
      //   this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });


  }

  getArtistAlbums(id, album) {
    this.spotifyService.searchAlbums(id).subscribe(albums => {
      this.spotifyAlbumsPerArtist = albums;


      this.dataSource = new MatTableDataSource(this.spotifyAlbumsPerArtist.items);

      this.lsService.set('artist', JSON.stringify(this.spotifyAlbumsPerArtist.items));

      this.length = this.albums.length;
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


    // console.log(album);
    const albumInLS = JSON.parse(this.lsService.get('artist'));

    let albumId = albumInLS.findIndex(item => item.id === album.id);
    if (albumId >= 0) {
      albumInLS.splice(albumId, 1);
      albumInLS.unshift(album);
      this.lsService.set('artist', JSON.stringify(albumInLS));
    }

    // console.log(albumInLS);


  }

  onFavoriteAlbum() {
    this.myFavoriteAlbum = JSON.parse(this.lsService.get('favoriteAlbums'));

    console.log(this.myFavoriteAlbum);
    this.dataSource = new MatTableDataSource(this.myFavoriteAlbum);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}

