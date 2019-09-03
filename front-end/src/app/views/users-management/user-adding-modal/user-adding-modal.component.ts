import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsersManagement } from '../../../models/users-management';
import { UsersManagementService } from '../../../services/users-management.service';
import { PnotifyService } from '../../../utils/pnotify.service';
import { UsersManagementComponent } from '../users-management.component';

@Component({
  selector: 'app-user-adding-modal',
  templateUrl: './user-adding-modal.component.html'
})
export class UserAddingModalComponent implements OnInit {
  closeResult: string;
  aUser: UsersManagement = {} as UsersManagement;

  constructor(
    private router: Router,
    private usersManagementService: UsersManagementService,
    private modalService: NgbModal,
    private pnotifyService: PnotifyService,
    private usersManagementComponent : UsersManagementComponent
  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addUser() {
    this.usersManagementService.post(this.aUser).subscribe(res => {
      if (res.errorCode === 0) {
        this.usersManagementComponent.reloadData();
        this.router.navigate(['users-management']);
        console.log(res.errorCode);
        this.pnotifyService.success('Added successfuly', '');
      } else {
        this.pnotifyService.error('Adding Failed', '');
      }
    }, err => {
      this.pnotifyService.error('Some entered fields is wrong!', 'Please check field inputs once again');
      console.log(err.errorCode);
    });
  }

}
