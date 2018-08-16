import { Injectable } from '@angular/core';
import {HttpHeaders} from '../../../node_modules/@angular/common/http';

@Injectable()
export class LyricsChordsService {
  private baseUrl = 'http://api.guitarparty.com/v2/songbooks/';

  private APIKey = 'c221b92faa9af75fcc82fb1e0fb34cb946439078'
  private requestHeader = new HttpHeaders().set('Content-Type', 'application/json').append('Guitarparty-Api-Key', this.APIKey);
  constructor() { }

}
