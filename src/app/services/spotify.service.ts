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

  public access_token = 'Bearer  BQD-Bs0DKxp6_IcvRS5AQAaH3QfH0FFkI6vQR6-a5ro_wf0huuaAdi4In4N-CRx30ETuTLFRDXyoW6W4FA0CQBjMvPgTjxmaFleeBwZCCcQdLgqa_c7DHnJ9XdofZFjOC6XiFwZSBwyy2buNVV_E-9UYMWpqgD_ogLcwThnqgMhddeeU6X1IPHxT8hne9Q9hohHvzjrpJkXZSYjLGjBgMrgcoz0jba5wPMR2KkPaiN7t_o6sOHiTmAUuC0KJ3WOQDNx3iVqAXqzb'
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

