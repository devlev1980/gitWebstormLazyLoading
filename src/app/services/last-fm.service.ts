import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {AlbumByArtist} from '../models/album';

const lastFMAPI = {
  APIkey: '28714f77143c62ead0c2016182f8ea01',
  RegisteredTo: 'devlev1980'
};

@Injectable()
export class LastFmService {


  constructor(private _http: HttpClient) {
  }

  getAlbumsByArtist(artist: string): Observable<AlbumByArtist> {
    const lastFmURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${lastFMAPI.APIkey}&format=json`;

    return this._http.get<any>(lastFmURL);
  }

}

