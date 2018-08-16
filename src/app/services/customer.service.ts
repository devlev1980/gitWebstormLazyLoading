import {Injectable} from '@angular/core';
import {ApiProviderService} from './api-provider.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../models/customer';

@Injectable()
export class CustomerService {
  customers: Customer[];

  constructor(private _http: ApiProviderService) {
  }

  getCustomers(): Observable<any> {
    return this._http.get('users').pipe(map(response => {
      if (response.ok) {
        this.customers = response.body;
        return this.customers;
      }
      return [];
    }));
  }
}
