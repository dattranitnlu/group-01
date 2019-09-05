import { Component, OnInit } from '@angular/core';
import { ClassesManagement } from '../../../models/classes-management';
import { Router } from '@angular/router';
import { ClassesManagementService } from '../../../services/classes-management.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PnotifyService } from '../../../utils/pnotify.service';
import { ClassesManagementComponent } from '../classes-management.component';
import { UsersManagement } from '../../../models/users-management';
import { UsersManagementComponent } from '../../users-management/users-management.component';
import { UsersManagementService } from '../../../services/users-management.service';

@Component({
  selector: 'app-class-adding-modal',
  templateUrl: './class-adding-modal.component.html'
})
export class ClassAddingModalComponent implements OnInit {
  closeResult: string;
  aClass: ClassesManagement = {} as ClassesManagement;
  lecturers: [UsersManagement];

  constructor(
    private router: Router,
    private classesManagementService: ClassesManagementService,
    private modalService: NgbModal,
    private pnotifyService: PnotifyService,
    private classesManagementComponent : ClassesManagementComponent,
    private usersManagementService: UsersManagementService
  ) { }

  ngOnInit() {
    this.usersManagementService.list().subscribe(res => {
      this.lecturers = res.data;
      console.log(res);
    });
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

  addClass() {
    this.classesManagementService.post(this.aClass).subscribe(res => {
      if (res.errorCode === 0) {
        this.classesManagementComponent.reloadData();
        console.log(res.errorCode);
        this.router.navigate(['classes-management']);
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
