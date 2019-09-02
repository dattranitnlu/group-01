import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerTypeService } from '../../services/customer-type.service';
import { CustomerType } from '../../models/customer-type';

@Component({
  selector: 'app-customer-type-edit',
  templateUrl: './customer-type-edit.component.html',
  styleUrls: ['./customer-type-edit.component.scss']
})
export class CustomerTypeEditComponent implements OnInit {
  id: string;
  customerType: CustomerType = {} as CustomerType;
  constructor(private route: ActivatedRoute, private customerTypeService: CustomerTypeService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.customerTypeService.get(this.id).subscribe(res => {
      this.customerType = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.customerTypeService.get(this.id).subscribe(res => {
      this.customerType = res;
    });
  }

}
