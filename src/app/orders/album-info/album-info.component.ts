import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OrdersListComponent} from '../orders-list.component';
import {AlbumsDataService} from '../../services/albums-data.service';
import {AlbumByArtist} from '../../models/album';
import {AlbumInfo} from '../../models/album-info';
import {AlbumInfoService} from '../../services/album-info.service';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.scss']
})
export class AlbumInfoComponent implements OnInit {
  albumsInfo = {} as  AlbumInfo;
  tracks = [];

  constructor(private albumsService: AlbumsDataService,private albumInfoService: AlbumInfoService) {
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(info => {
      // console.log(info);
      this.albumsInfo = info;
      this.albumInfoService.setAlbumInfo(this.albumsInfo);
      this.tracks = info.album.tracks.track;
    });
  }

}
