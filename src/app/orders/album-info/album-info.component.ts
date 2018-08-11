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

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {
  albumsInfo = {} as  AlbumInfo;
  albums: AlbumByArtist;
  spotifyTracksPerAlbum = {} as SpotifyTracksPerAlbum;
  tracks = [];
  track;
  iframeUrl = 'https://open.spotify.com/embed';
  player;
  @ViewChildren(PerfectScrollbarDirective) scrollBars: QueryList<PerfectScrollbarDirective>;

  constructor(private albumsService: AlbumsDataService,
              private albumInfoService: AlbumInfoService,
              private router: Router,
              private route: ActivatedRoute,
              private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    // this.albumsService.getAlbums().subscribe(info => {
    //    console.log(info);
    //   this.albumsInfo = info;
    //   this.albumInfoService.setAlbumInfo(this.albumsInfo);
    // this.tracks = info.album.tracks.track;
    // });

    this.route.params.subscribe(params => {
      this.spotifyService.getTracks(params.id).subscribe(tracks => {
        this.spotifyTracksPerAlbum = tracks;
        this.tracks = this.spotifyTracksPerAlbum.items;
        console.log(this.tracks);
        // this.player = `${this.iframeUrl}/?uri=spotify:album:${params.id}`;
      });

    });
  }

  onBack() {
    this.router.navigate([`/orders/albumInfo`]);
  }

}
