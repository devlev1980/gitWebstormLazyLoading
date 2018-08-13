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

  public access_token = 'Bearer  BQBixKFyuyvMaZUsjtXOdPxktZ65GzUomHK7OGkRuez4220vSgg-kr3QPntYMiEC3XYovFt1hUTYE232Jeavelx5gmEDuY869wchFzH-uOZu0NIJ4esbG68Oq1iDGZW8zEkuaCkkFrYfq2EAXAOBbDF_x_smnDXwFalesqwFpCqWN4a1nRkUoRSTcXRsecUsm8c87isT9qNh32aRb5DcMWe2MUYyyAMsIjPITwBkGnuFqSzev6vjcp_79eiKV_Xfs8-RBmCJF93X'
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

