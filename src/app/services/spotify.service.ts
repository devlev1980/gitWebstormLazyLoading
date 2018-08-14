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

  public access_token = 'Bearer  BQDkG4ZrQb2boBODu57ccAb0aAD8-g7i7xpGdGOd5eQHAw1i00N1ussZO6XYDkv0tfn2FrS5pUkGn_oRkErtd0sAYsNVWrEJ9GNaAZgPUnNb5MsmA2b99sYqPQAMHtaLiOCzybobm1sbJXwOwSZM1lg7ZO4_bf1iuwHWdXeJc0sZ1kBxcgo_pV-eB7y3ngYmMvBMO0ChL76WI0mAbsTJ3_oLt9sB2Qq14DfLaGgreZyWnQjuuFGqg9-21V7ehPeDGyxxwIDqytoD'
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

