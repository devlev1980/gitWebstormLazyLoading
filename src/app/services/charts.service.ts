import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ChartsService {

  constructor(private _http: HttpClient) { }

  getCharts(){
    return this._http.get(`${environment.serviceBaseUrl}`)
  }

}
