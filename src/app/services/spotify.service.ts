import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {SpotifyArtist} from '../models/spotify-artist';
import {SpotifyAlbumsPerArtist} from '../models/spotify-albums-per-artist';

@Injectable()
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1';
  private searchUrl = this.baseUrl + '/search?q=';
  private albumsUrl = this.baseUrl + '/artists/';
  private tracksUrl = this.baseUrl + '/albums/';
  private artistUrl: string;

  public access_token = 'Bearer BQD_-fIWMeeEfivWGZroDIqX6_0FrTlE7hHCs6hPrlPW-nTIWEPDjcZZD17YN8SeWkVBnyV-6qM2K-LQ7nUEPsbQZfYHSr9YjG9eQhD0GfyrkiXaklVcCYlKpWP04bOZXqN6LnKziLViBqMMjgDMiUhe-kDyPwTtv45JnMymJ84H0Rziih2W1GrqowOjstopmHORLyMZnUnGxob7z2AF-wDqvLA4F2mF0j0JFe8g-Co7xX3OnXPVsxZd6q68M_JFNOtNKyK3MNkJ';
  private requestHeader = new HttpHeaders().set('Content-Type', 'application/json').append('Authorization', this.access_token);


  constructor(private _http: HttpClient) {
  }

  searchArtist(str: string): Observable<SpotifyArtist> {
    return this._http.get<SpotifyArtist>(this.searchUrl + str + '&type=artist', {headers: this.requestHeader});

  }

  searchAlbums(id: string): Observable<SpotifyAlbumsPerArtist> {
    return this._http.get<SpotifyAlbumsPerArtist>(this.albumsUrl + id + '/albums', {headers: this.requestHeader});
  }

  getTracks(id: string) {
    return this._http.get(this.tracksUrl + id + '/tracks', {headers: this.requestHeader});
  }

}

