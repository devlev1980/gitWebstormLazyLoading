import {Injectable} from '@angular/core';
import {AlbumInfo} from '../models/album-info';

@Injectable()
export class AlbumInfoService {
  public albumInfo: AlbumInfo;

  constructor() {
  }

  public setAlbumInfo(object: any) {
    this.albumInfo = object;
  }
  public getAlbumInfo(){
    return this.albumInfo;
  }

}
