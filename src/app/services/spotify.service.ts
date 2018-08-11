import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {SpotifyArtist} from '../models/spotify-artist';

@Injectable()
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1';
  private searchUrl = this.baseUrl + '/search?q=';
  private albumsUrl = this.baseUrl + '/artists/';
  private albumPerArtistUrl = this.baseUrl + '/albums/';
  private artistUrl: string;

  public access_token = 'Bearer BQDQg1RZapGaswXePHgVBfw9UzL7SdJDiRM2h30KfxOTWBH1dpjI5tBBSiTKNaDBSPRw14czvfjqRrTYzeeexjf8KiCTFt4xkiOsBoduqihmiEl_AWT679Ld9YL4L6c49Jb_COvbbF2N5DhJq9b8aRjsQ3KFTYsaDK-sNVmNXXhS5O5Q4Qoms4XvWTITfjnWEXBohUljE-6Z6QCW-DI9JWozeMB4t64tRdpwNB7b6cwpJ_XRLtGDTyH_RRJzEcbOqvC-61a4KGwK'
  private requestHeader = new HttpHeaders().set('Content-Type', 'application/json').append('Authorization', this.access_token);


  constructor(private _http: HttpClient) {
  }

  searchArtist(str: string): Observable<SpotifyArtist> {
    return this._http.get<SpotifyArtist>(this.searchUrl + str + '&type=artist', {headers: this.requestHeader});

  }

  searchAlbums(id: string) {
    return this._http.get(this.albumsUrl + id + '/albums', {headers: this.requestHeader});
  }

  searchAlbum(id: string) {
    return this._http.get(this.albumsUrl + id, {headers: this.requestHeader});
  }

}

