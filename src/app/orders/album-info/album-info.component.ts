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
  tracks = [];
  track;
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
              private spotifyService: SpotifyService,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.albumsService.getAlbums().subscribe(albums => {
      this.spotifyAlbumsPerArtist = albums;

    });

    this.route.params.subscribe(params => {
      this.spotifyService.getTracks(params.id).subscribe(tracks => {
        this.id = params.id;
        this.spotifyTracksPerAlbum = tracks;
        this.tracks = this.spotifyTracksPerAlbum.items;
        this.iFrameFullLink = `https://open.spotify.com/embed?uri=spotify:album:${this.id}`;
      });

    });
  }

  onBack() {
    this.router.navigate([`/orders/albumInfo`]);
  }

}
