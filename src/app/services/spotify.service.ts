import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {SpotifyArtist} from '../models/spotify-artist';
import {SpotifyAlbumsPerArtist} from '../models/spotify-albums-per-artist';
import {SpotifyTracksPerAlbum} from '../models/spotify-tracks-per-album';

@Injectable()
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1';
  private searchUrl = this.baseUrl + '/search?q=';
  private albumsUrl = this.baseUrl + '/artists/';
  private tracksUrl = this.baseUrl + '/albums/';
  private artistUrl: string;

  public access_token = 'Bearer  BQC2Mq1HIOzSO3G0HBkVqj-MmJr9Lngw8Y47nQncZ8AvNgexyCXCs8j9Pb8W0orgMfV_jXXVzLGWGiq-4kW1oofzbk3al80LF70XNjVO6lZVXk4tMAbs9vQvZzDE5tARhL9SxGLtXHtR-ZVST50ovBVPhn9LChnMkoNArEB4ExkC-jVpno6djUBW4GeyfbbHFNC1KkTkaqsHTL-VyJ--5OcoI6VEPDGHGnvsUzMBPjWR5MbVVjGXf8PlVuogiO5iPZWnEmSe7bEe'
  private requestHeader = new HttpHeaders().set('Content-Type', 'application/json').append('Authorization', this.access_token);


  constructor(private _http: HttpClient) {
  }

  searchArtist(str: string): Observable<SpotifyArtist> {
    return this._http.get<SpotifyArtist>(this.searchUrl + str + '&type=artist', {headers: this.requestHeader});

  }

  searchAlbums(id: string): Observable<SpotifyAlbumsPerArtist> {
    return this._http.get<SpotifyAlbumsPerArtist>(this.albumsUrl + id + '/albums', {headers: this.requestHeader});
  }

  getTracks(id: string): Observable<SpotifyTracksPerAlbum> {
    return this._http.get<SpotifyTracksPerAlbum>(this.tracksUrl + id + '/tracks', {headers: this.requestHeader});
  }

}

