import { Component, OnInit, Input } from '@angular/core';
import { PupilsManagement } from '../../../models/pupils-management';
import { PupilsManagementService } from '../../../services/pupils-management.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PnotifyService } from '../../../utils/pnotify.service';
import { PupilsManagementComponent } from '../pupils-management.component';

@Component({
  selector: 'app-pupil-editing-modal',
  templateUrl: './pupil-editing-modal.component.html'
})
export class PupilEditingModalComponent implements OnInit {

  @Input() row: PupilsManagement;
  closeResult: string;
  
  constructor(
    private pupilsManagementService: PupilsManagementService,
    private modalService: NgbModal,
    private router: Router,
    private pnotifyService: PnotifyService,
    private pupilsManagementComponent: PupilsManagementComponent
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

  updatePupil() {
    this.pupilsManagementService.put(this.row.id, this.row).subscribe(res => {

      if (res.errorCode === 0) {
        this.pupilsManagementComponent.reloadData();
        this.router.navigate(['pupils-management']);
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
