import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
customers: Customer[];
 dataSource;
  displayedColumns = ['Name', 'Username', 'Email'];
  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.dataSource = new MatTableDataSource<Customer>(this.customers);
  }

}
