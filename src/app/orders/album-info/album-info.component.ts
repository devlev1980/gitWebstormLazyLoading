import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {OrdersListComponent} from '../orders-list.component';
import {AlbumsDataService} from '../../services/albums-data.service';
import {AlbumByArtist} from '../../models/album';
import {AlbumInfo} from '../../models/album-info';
import {AlbumInfoService} from '../../services/album-info.service';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {SpotifyTracksPerAlbum} from '../../models/spotify-tracks-per-album';
import {SpotifyAlbumsPerArtist} from '../../models/spotify-albums-per-artist';
import {DomSanitizer} from '@angular/platform-browser';
import {LocalStorageService} from 'angular-2-local-storage';
import {ITunesService} from '../../services/i-tunes.service';
import {ITunesTrackByAlbum} from '../../models/i-tunes-track-by-album';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {
  albumsInfo = {} as  AlbumInfo;
  albums: AlbumByArtist;
  spotifyTracksPerAlbum = {} as SpotifyTracksPerAlbum;
  spotifyAlbumsPerArtist = {} as SpotifyAlbumsPerArtist;
  tracks = {} as ITunesTrackByAlbum;
  actualTracks = [];
  iframeUrl = 'https://open.spotify.com/embed';
  iFrameFullLink = 'https://open.spotify.com/embed?uri=spotify:album:${{id}}';
  player;
  artWork;
  id;
  @ViewChildren(PerfectScrollbarDirective) scrollBars: QueryList<PerfectScrollbarDirective>;

  constructor(private albumsService: AlbumsDataService,
              private albumInfoService: AlbumInfoService,
              private router: Router,
              private route: ActivatedRoute,
              private lsService: LocalStorageService,
              private spotifyService: SpotifyService,
              private iTunesService: ITunesService,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    //
    // const albumInLS = JSON.parse(this.lsService.get('artist'));


    // this.route.params.subscribe(params => {
    // this.spotifyService.getTracks(params.id).subscribe(tracks => {
    // this.id = params.id;
    // console.log('albumId'this.id);
    // this.spotifyTracksPerAlbum = tracks;
    // this.tracks = this.spotifyTracksPerAlbum.items;
    // this.iFrameFullLink = `https://open.spotify.com/embed?uri=spotify:album:${this.id}`;
    // });

    // });
    this.route.params.subscribe(params => {
      console.log(params);
      this.iTunesService.getTracksByAlbum(params.id).subscribe(tracks => {
        this.tracks.results = tracks.results;
        this.actualTracks = this.tracks.results.slice(1);
      });
    });
  }

  onBack() {
    this.router.navigate([`/orders/albumInfo`]);
  }

}
