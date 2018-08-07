import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AlbumInfo} from '../models/album-info';

@Injectable()
export class AlbumsDataService {
  private subject = new Subject<any>();
  constructor() { }

  sendAlbums(album: AlbumInfo) {
    this.subject.next(album);
  }
  getAlbums(): Observable<AlbumInfo> {
    return this.subject.asObservable();
  }

}
