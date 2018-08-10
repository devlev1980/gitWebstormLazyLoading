import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LastFmService} from '../services/last-fm.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource, ThemePalette} from '@angular/material';
import {PageEvent} from '@angular/material/typings/esm5/paginator';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router} from '@angular/router';
import {AlbumsDataService} from '../services/albums-data.service';
import {SpotifyService} from '../services/spotify.service';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  albums = {} as any;
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
  color: '#fff';

  constructor(private lastFmService: LastFmService, private sanitazion: DomSanitizer, private lsService: LocalStorageService, private router: Router, private albumsService: AlbumsDataService,private spotifyService: SpotifyService) {


  }


  ngOnInit() {
    const artistName = JSON.parse(this.lsService.get('artist'));
    this.getData(artistName);
    this.lastFmService.getArtists().subscribe(data => {
      console.log(data);
    });
  }

  getData(artistName: string, ) {

    this.lastFmService.getAlbumsByArtist(artistName).subscribe(album => {
      this.albums = album.topalbums.album;
      console.log(this.albums);
      this.dataSource = new MatTableDataSource(this.albums);
      this.lsService.set('artist', JSON.stringify(artistName));
      this.length = this.albums.length;
      this.dataSource.paginator = this.paginator;

      this.spotifyService.searchArtist(artistName).subscribe(artist=>{
        console.log(artist.artists.items[0]);
      });
      // this.spotifyService.searchAlbums()


    });
  }


  onAlbumDetails(album: string, artist: string, mbid: string) {
    this.router.navigate([`/orders/albumInfo/${mbid}`], {queryParams: {artist: artist}});
    console.log(album, artist);
    this.lastFmService.getAlbumInfo(album, artist).subscribe(info => {
      this.albumsService.sendAlbums(info);
    });
  }

}
