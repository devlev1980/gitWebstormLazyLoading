import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AlbumByArtist} from '../models/album';


@Injectable()
export class LastFmService {
  APIkey = '28714f77143c62ead0c2016182f8ea01';
  RegisteredTo: 'devlev1980';

  constructor(private _http: HttpClient) {
  }

  //
  getAlbumsByArtist(artist: string): Observable<AlbumByArtist> {
    const lastFmURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${this.APIkey}&format=json`;
    return this._http.get<AlbumByArtist>(lastFmURL);
  }

}

