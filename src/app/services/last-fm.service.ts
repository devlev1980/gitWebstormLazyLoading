import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AlbumByArtist} from '../models/album';
import {AlbumInfo} from '../models/album-info';
import {Charts} from '../models/chart';

const lastFMAPI = {
  APIkey: '4aad7ea518d8711a894af30b7ce5cd47',
  RegisteredTo: 'devlev1980',
  SharedSecret: '87b0edd4de037f6074c31af8ac5a2889'
};
const musicGraphAPI = {
  APIkey: 'c9fcf4cf1faff6941e29bca12443f806'
};

@Injectable()
export class LastFmService {
  lastFMAPIURL = 'http://ws.audioscrobbler.com/2.0';

  constructor(private _http: HttpClient) {
  }

  getAlbumsByArtist(artist: string): Observable<AlbumByArtist> {
    const lastFmURL = `${this.lastFMAPIURL}/?method=artist.gettopalbums&artist=${artist}&
    api_key=${lastFMAPI.APIkey}&format=json`;

    return this._http.get<any>(lastFmURL);
  }

  getAlbumInfo(album: string, artist: string): Observable<AlbumInfo> {
    const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&
    api_key=4aad7ea518d8711a894af30b7ce5cd47&artist=${artist}&album=${album}&format=json`;

    return this._http.get<AlbumInfo>(url);

  }

  getArtists() {
    const url = `${this.lastFMAPIURL}/?method=library.getartists&
    api_key=${lastFMAPI.APIkey}&user=${lastFMAPI.RegisteredTo}&format=json`;
    return this._http.get(url);
  }

  getCharts(): Observable<Charts> {
    const url = `${this.lastFMAPIURL}/?method=chart.gettopartists&api_key=${lastFMAPI.APIkey}&format=json`;
    return this._http.get<Charts>(url);
  }

}

