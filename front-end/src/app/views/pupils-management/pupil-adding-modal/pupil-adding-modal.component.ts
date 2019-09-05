import { Component, OnInit } from '@angular/core';
import { PupilsManagement } from '../../../models/pupils-management';
import { Router } from '@angular/router';
import { PupilsManagementService } from '../../../services/pupils-management.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PnotifyService } from '../../../utils/pnotify.service';
import { PupilsManagementComponent } from '../pupils-management.component';

@Component({
  selector: 'app-pupil-adding-modal',
  templateUrl: './pupil-adding-modal.component.html'
})
export class PupilAddingModalComponent implements OnInit {

  closeResult: string;
  aPupil: PupilsManagement = {} as PupilsManagement;

  constructor(
    private router: Router,
    private pupilsManagementService: PupilsManagementService,
    private modalService: NgbModal,
    private pnotifyService: PnotifyService,
    private pupilsManagementComponent : PupilsManagementComponent
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

  addPupil() {
    this.pupilsManagementService.post(this.aPupil).subscribe(res => {
      if (res.errorCode === 0) {
        this.pupilsManagementComponent.reloadData();
        this.router.navigate(['pupils-management']);
        console.log(res);
        this.pnotifyService.success('Added successfuly', '');
      } else {
        this.pnotifyService.error('Adding Failed', '');
      }
    }, err => {
      this.pnotifyService.error('Some entered fields is wrong!', 'Please check field inputs once again');
      console.log(err);
    });
  }

}
