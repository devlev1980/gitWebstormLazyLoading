import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AlbumInfo} from '../models/album-info';
import {SpotifyAlbumsPerArtist} from '../models/spotify-albums-per-artist';

@Injectable()
export class AlbumsDataService {
  private subject = new Subject<any>();
  constructor() { }

  sendAlbums(albums: SpotifyAlbumsPerArtist) {
    this.subject.next(albums);
  }
  getAlbums(): Observable<any> {
    return this.subject.asObservable();
  }

}
