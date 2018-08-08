import {Component, Input, OnInit} from '@angular/core';
import {AlbumInfo} from '../../models/album-info';

@Component({
  selector: 'app-wiki-info',
  templateUrl: './wiki-info.component.html',
  styleUrls: ['./wiki-info.component.scss']
})
export class WikiInfoComponent implements OnInit {
  @Input() albumsInfo: AlbumInfo;

  constructor() {

  }

  ngOnInit() {
    console.log(this.albumsInfo);
  }

}
