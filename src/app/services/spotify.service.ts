import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//
// const spotifyAPItoken = 'BQCgZwlt2XKWwUVxk1lUJVgmP0Wflwh3YNC4CVGohiu13CMg6McXJv8ZO9pzHJjeHnVkPZi5AsBa31sjGvWim-vtLgcV-eUvLC_xb8OpkIK5szn7_DBnbMJtJfbNZREX4ozIDM3p1nyAN-LGn0NYmOcbyaog7g';

const token = 'BQDOQK-CE12WXhEHO8ZOD8y0_noqbhZj57RHtOMTVwrAHKiZPOl_OSC2XNJRXZI73SEiaTmgljhsZoTlV0Da3Fi5bq0sYYQUgt5RA7neFhM6FTNrg3QV4FXEEOPKdgZUbGegQcj_PD4yrApm_a6ORghdAPDrvjr0ab_iIGHB7xQwhaBf8twy32cQIsvVACYduGPwzVVXd5sgcUJLUn7EoSsBVBCiuN1BDo1Dt8ZaQcF96eTbWm-EoOszW2Mz6ZZfISuGeUIfhIuO';

@Injectable()
export class SpotifyService {
  //
  constructor(private _http: HttpClient) { }
  //
  getSpotifyArtistID(artist: string) {
    return this._http.get( `https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=10&offset=5"-H"Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer${token}`);

  }

  // getAccessToken(){
  //   const scopes = ['user-read-private', 'user-read-email'];
  //  return ' https://accounts.spotify.com/authorize?client_id=' + '423f6d52859745dba67864c626566d9b' +
  //     '&scope=' + encodeURIComponent(scopes.join(' ')) +
  //     '&response_type=token';
  // }

}
