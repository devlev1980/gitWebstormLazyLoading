import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com/v1';
  private searchUrl = this.baseUrl + '/search?q=';
  private albumsUrl = this.baseUrl = '/artists/';
  private artistUrl: string;

  public access_token = 'Bearer BQDlxblfwev_bDtma_hnRTfjOInFJ0upz1rEhvl2pcRBJB085U_OhnjWnj5XrWrTe8NlR7QhxjW3lVIMtwGJBRPtTaOj7gs1OzEhZa5tz16EGrBYJbyv35POFVHuCGsEZgY1rQlYYUr-BSA-CsgkwuLcMBnOUgzW_-E0NJL0mVEQ1C8XpE4WMRv-ywUDPSfl5l1nylXBYSyIf7xu5ZEibSRhEcFhzvD16SC28VZGp2DrCEfkn2aKGfgMP5O-fm36FZGJPHsONUO2';

  private requestHeader = new HttpHeaders().set('Content-Type', 'application/json').append('Authorization', this.access_token);


  constructor(private _http: HttpClient) {
  }

  searchArtist(str: string) {
    return this._http.get(this.searchUrl + str + '&type=artist', {headers: this.requestHeader});

  }

  searchAlbums(id: string) {
    return this._http.get(this.albumsUrl + id + '/albums', {headers: this.requestHeader});
  }

}
