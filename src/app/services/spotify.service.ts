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

  public access_token = 'Bearer  BQDTALvEZ8x8UmR9H7nwJSdYhfdhtchD3OiywwWh7Aa1V-YsPshT9KaBCCZArc1api5DYtCT_0YdgtVIfhWQzu2UnjXKDkgpbLL--AtU0XDfmj7O6OLK0dfHJiCMy6htEph-nm9MP3XslGyX33TzvmvVpfYyCknXmbXmMGpO6w55IpH2Lzm-18IrGjr2nKRfDaNG9qYfJv785zQv8oNS0RBafIxSqXT9WVhfevXSZKC5K3iQ1D4gNDhomMgrTfJEChTbuRbfRC1e'
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

