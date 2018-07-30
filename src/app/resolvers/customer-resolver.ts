import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Customer} from '../models/customer';
import {CustomerService} from '../services/customer.service';

@Injectable()
export class CustomerResolver implements Resolve<Customer[]> {

  constructor(private customerService: CustomerService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.customerService.getCustomers();
  }
}
