import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AlbumsDataService} from '../../services/albums-data.service';
import {AlbumByArtist} from '../../models/album';
import {AlbumInfo} from '../../models/album-info';
import {AlbumInfoService} from '../../services/album-info.service';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {SpotifyTracksPerAlbum} from '../../models/spotify-tracks-per-album';
import {SpotifyAlbumsPerArtist} from '../../models/spotify-albums-per-artist';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {LocalStorageService} from 'angular-2-local-storage';
import {ITunesService} from '../../services/i-tunes.service';
import {ITunesTrackByAlbum} from '../../models/i-tunes-track-by-album';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Time} from '@angular/common';
import {PageEvent} from '../../../../node_modules/@angular/material/typings/esm5/paginator';


@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {
  tracks = {} as ITunesTrackByAlbum;
  actualTracks = [];
  id;
  rate: number;
  time: Time;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['no', 'artwork', 'trackName', 'duration', 'previewUrl', 'rating'];
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [10];
  myFavoriteSongs = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  iframeUrl;

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

    this.route.params.subscribe(params => {
      console.log(params);
      this.iTunesService.getTracksByAlbum(params.id).subscribe(tracks => {
        this.tracks.results = tracks.results;

        this.actualTracks = this.tracks.results.slice(1);

        this.dataSource = new MatTableDataSource(this.actualTracks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.rate = this.lsService.get('myFavoriteSongs');

      });
    });
  }

  onBack() {
    this.router.navigate([`/orders/albumInfo`]);
  }

  onPlay(url) {
    let autioTrack = new Audio(url);
    autioTrack.play();
  }

  onPuse(url) {

  }

  onRateChange(album) {
    console.log(album);
    this.myFavoriteSongs.push(album);
    this.lsService.set('favoriteSongs', JSON.stringify(this.myFavoriteSongs));
  }


}
