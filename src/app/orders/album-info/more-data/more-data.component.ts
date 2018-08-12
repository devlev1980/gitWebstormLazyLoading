import {Component, Input, OnInit} from '@angular/core';
import {AlbumInfo} from '../../../models/album-info';
import {AlbumsDataService} from '../../../services/albums-data.service';
import {AlbumInfoComponent} from '../album-info.component';
import {AlbumInfoService} from '../../../services/album-info.service';

@Component({
  selector: 'app-more-data',
  templateUrl: './more-data.component.html',
  styleUrls: ['./more-data.component.scss']
})
export class MoreDataComponent implements OnInit {
 moreData: AlbumInfo ={};


  constructor(private albumInfoService: AlbumInfoService) { }

  ngOnInit() {
    this.moreData = this.albumInfoService.getAlbumInfo();
    // console.log(this.moreData.album.wiki)
  }

}
