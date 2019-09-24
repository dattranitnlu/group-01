import { Component, OnInit } from '@angular/core';
import { CustomerTypeService } from '../../services/customer-type.service';
import { CustomerType } from '../../models/customer-type';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { PnotifyService } from '../../utils/pnotify.service';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html'
})
export class CustomerTypeComponent implements OnInit {
  closeResult: string;
  //
  id: string;
  customerTypes: [CustomerType];
  customerType: CustomerType;
  constructor(private customerTypeService: CustomerTypeService,
     private modalService: NgbModal, private routerService: Router,
      private route: ActivatedRoute, private pnotifyService: PnotifyService ) { }
    // route: lay tham so , routeService chuyen huong
  ngOnInit() {
    //
    this.customerType = {id: 0} as CustomerType;
    this.loadDatas();
  }
  // load list
  loadDatas() {
    this.customerTypeService.list().subscribe(res => {
      this.customerTypes = res.data;
    });
  }
  // load a data
  loadData(id) {
    this.customerTypeService.get(id).subscribe( res => {
      this.customerType = res.data;
    });
  }
  // // add
  // add() {
  //   this.customerTypeService.add(this.customerType).subscribe(( res => {
  //     this.modalService.dismissAll();
  //     this.loadDatas();
  //     this.customerType = {} as CustomerType;
  //   }));
  // }
  // // edit
  // update() {
  //   this.customerTypeService.update(this.customerType).subscribe(( res => {
  //     if (res.errorCode === 0) {
  //       this.modalService.dismissAll();
  //       this.loadDatas();
  //       this.customerType = {} as CustomerType;
  //       this.pnotifyService.success('Info', 'Update susess');
  //     } else {
  //       this.pnotifyService.error('Info', 'Update failed');
  //     }
  //   }), err => {
  //     this.pnotifyService.error('Info', 'Update failed');
  //   });
  // }
  // save
  save() {
    this.customerTypeService.save(this.customerType).subscribe(( res => {
      if (res.errorCode === 0) {
        this.modalService.dismissAll();
        this.loadDatas();
        this.customerType = {} as CustomerType;
        this.pnotifyService.success('Info', 'Update susess');
      } else {
        this.pnotifyService.error('Info', 'Update failed');
      }
    }), err => {
      this.pnotifyService.error('Info', 'Update failed');
    });
  }

  // delete
  delete(id) {
    this.pnotifyService.showConfirm('Warnning', 'Are you sure?', yes => {
      if (yes) {
        this.customerTypeService.delete(id).subscribe();
        const arow = this.customerTypes.find(x => x.id === id);
        if (arow) {
          this.customerTypes.splice(this.customerTypes.findIndex(x => x.id === id));
        }
        // this.customerTypes.forEach((element, index) => {
        // if ( element.id === id ) {
        //   this.customerTypes.splice(index, 1);
        // }
        // });
      }
    });
  }
  // su dung voi the a co gan link, button khong can
  // deletes(event, id) {
  //   event.preventDefault();
  //   this.customerTypeService.delete(id).subscribe();
  //   this.customerTypes.forEach((element, index) => {
  //     if ( element.id === id ) {
  //       this.customerTypes.splice(index, 1);
  //     }
  //   });
  // }

  // show modal add
  openAdd(contentAdd) {
    this.modalService.open(contentAdd, {ariaLabelledBy: 'modal-basic-title'});
  }
  // show modal edit
  openEdit(contentEdit, id) {
    this.loadData(id);
    this.modalService.open(contentEdit, {ariaLabelledBy: 'modal-basic-title'});
  }

}
