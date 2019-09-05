import { Component, OnInit, Input } from '@angular/core';
import { ClassesManagement } from '../../../models/classes-management';
import { ClassesManagementService } from '../../../services/classes-management.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PnotifyService } from '../../../utils/pnotify.service';
import { ClassesManagementComponent } from '../classes-management.component';
import { UsersManagement } from '../../../models/users-management';
import { UsersManagementService } from '../../../services/users-management.service';

@Component({
  selector: 'app-class-editing-modal',
  templateUrl: './class-editing-modal.component.html'
})
export class ClassEditingModalComponent implements OnInit {

  @Input() row: ClassesManagement;
  lecturers: [UsersManagement];
  closeResult: string;

  constructor(
    private classesManagementService: ClassesManagementService,
    private modalService: NgbModal,
    private router: Router,
    private pnotifyService: PnotifyService,
    private classesManagementComponent: ClassesManagementComponent,
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

  updateClass() {
    this.classesManagementService.put(this.row.id, this.row).subscribe(res => {
      if (res.errorCode === 0) {
        this.classesManagementComponent.reloadData();
        this.router.navigate(['classes-management']);
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
