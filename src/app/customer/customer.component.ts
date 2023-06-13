import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


    customer = {
      customerName: '',
      address: '',
      phone: '',
      email: '',
      dateOfBirth: new Date(),
    };
  
    ngOnInit(): void {
    }
    
    constructor(private customerService: CustomerService) {}
  
    addCustomer() {
      this.customerService.addCustomer(this.customer).subscribe((response) => {
      });
    }



}
