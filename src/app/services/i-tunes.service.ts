import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {ITunesArtist} from '../models/i-tunes-artist';
import {ITunesAlbum} from '../models/i-tunes-album';
import {ITunesTrackByAlbum} from '../models/i-tunes-track-by-album';

@Injectable()
export class ITunesService {
  API = {
    SEARCH: 'https://itunes.apple.com/search?',
    LOOKUP: 'https://itunes.apple.com/lookup?'
  };

  constructor(private _http: HttpClient) {
  }

  searchArtist(artistName): Observable<ITunesArtist> {
    let iTunesURL = `${this.API.SEARCH}media=music&entity=musicArtist&term=${artistName}`;
    return this._http.get<ITunesArtist>(iTunesURL);
  }

  searchAlbumByArtist(artistId: number): Observable<ITunesAlbum> {
    let iTunesURL = `${this.API.LOOKUP}entity=album&id=${artistId}`;
    return this._http.get<ITunesAlbum>(iTunesURL);
  }

  getTracksByAlbum(albumId): Observable<ITunesTrackByAlbum> {
    let ITunesURL = `${this.API.LOOKUP}entity=song&id=${albumId}`;
    return this._http.get<ITunesTrackByAlbum>(ITunesURL);
  }

}
