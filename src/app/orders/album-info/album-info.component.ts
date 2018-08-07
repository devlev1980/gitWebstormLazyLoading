import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OrdersListComponent} from '../orders-list.component';
import {AlbumsDataService} from '../../services/albums-data.service';
import {AlbumByArtist} from '../../models/album';
import {AlbumInfo} from '../../models/album-info';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {
  albumsInfo = {} as  AlbumInfo;
  tracks = [];

  constructor(private albumsService: AlbumsDataService) {
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(info => {
      console.log(info);
      this.albumsInfo = info;
      this.tracks = info.album.tracks.track;
    });
  }

}
