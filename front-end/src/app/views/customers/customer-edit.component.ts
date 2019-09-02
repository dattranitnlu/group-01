import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  id: string;
  customer: Customer = {} as Customer;
  constructor(private route: ActivatedRoute, private customerSerice: CustomerService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.customerSerice.get(this.id).subscribe(res => {
      this.customer = res;
      console.log(res);
    });
   }

  ngOnInit() {
  }

}
