import { Component, OnInit, Input } from '@angular/core';
import { UsersManagementService } from '../../../services/users-management.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsersManagement } from '../../../models/users-management';
import { PnotifyService } from '../../../utils/pnotify.service';
import { UsersManagementComponent } from '../users-management.component';

@Component({
  selector: 'app-user-editing-modal',
  templateUrl: './user-editing-modal.component.html'
})
export class UserEditingModalComponent implements OnInit {

  @Input() row: UsersManagement;
  closeResult: string;

  constructor(
    private usersManagementService: UsersManagementService,
    private modalService: NgbModal,
    private router: Router,
    private pnotifyService: PnotifyService,
    private usersManagementComponent: UsersManagementComponent
  ) { }

  ngOnInit() { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.row.birthday);
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

  updateUser() {
    this.usersManagementService.put(this.row.id, this.row).subscribe(res => {
      // console.log(res);
      // this.router.navigate(['users-management']);
      // this.router.su
      if (res.errorCode === 0) {
        this.usersManagementComponent.reloadData();
        this.router.navigate(['users-management']);
        console.log(res.errorCode);
        this.pnotifyService.success('Edit successfuly', '');
      } else {
        this.pnotifyService.error('Edit Failed', '');
      }
    }, err => {
      this.pnotifyService.error('Some entered fields is wrong!', 'Please check field inputs once again');
      console.log(err.errorCode);
    })
  }

}
