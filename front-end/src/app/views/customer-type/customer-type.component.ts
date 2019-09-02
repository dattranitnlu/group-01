import { Component, OnInit } from '@angular/core';
import { CustomerTypeService } from '../../services/customer-type.service';
import { CustomerType } from '../../models/customer-type';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {
  customerTypes: CustomerType;

  constructor(private customerTypeService: CustomerTypeService) { }

  ngOnInit() {
    this.customerTypeService.list().subscribe(res => {
      this.customerTypes = res;
    });
  }

}
