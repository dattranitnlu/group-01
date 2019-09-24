import { Component, OnInit, ViewChild } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PnotifyService } from '../../utils/pnotify.service';
import { UserType } from '../../models/user-type';
import { Page } from '../../models/page';
import { ModalDirective } from 'ngx-bootstrap';

import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html'
})
export class UserTypeComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  userTypeId: number = 0;
  action: string;
  page: Page = { pageNumber: 0, pageSize: 5 } as Page;
  //
  userTypes: UserType[] = [];
  userType: UserType = {} as UserType;
  columns = [
    { name: 'ID', prop: 'id', sortTable: true },
    { name: 'Userrole',prop: 'userrole', sortTable: true },
    {name: 'Options'}
  ];
  //  customers: [Customer];

  form: FormGroup;
  constructor(
    private userTypeService: UserTypeService,
    private pnotifyService: PnotifyService,
    private fb: FormBuilder
    ) {
    this.form = this.fb.group({
      userrole: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.loadUserTypes();
  }
  loadUserTypes(page = null) {
    if (page != null) {
      this.page.pageNumber = page.offset;
    }
    // tslint:disable-next-line: triple-equals
    if (this.userTypeId == 0) {
      this.userTypeService.list(this.page).subscribe(res => {
        this.page = res.pageInfo;
        this.userTypes = res.data;
      });
    }
  }
  loadData(id) {
    this.userTypeService.get(id).subscribe(res => {
      this.userType = res.data;
    });
  }
  // save
  save() {
    this.userTypeService.save(this.userType).subscribe((res => {
      if (res.errorCode === 0) {
        this.editModal.hide();
        this.loadUserTypes();
        this.userType = {} as UserType;
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
    event.preventDefault();
    this.pnotifyService.showConfirm('Warnning', 'Are you sure?', yes => {
      if (yes) {
        this.userTypeService.delete(id).subscribe(res => {
          if (res.errorCode === 0) {
            this.pnotifyService.success('Info', 'Delete susess');
            this.loadUserTypes();
          } else {
            if (res.errorCode === 200) {
              this.pnotifyService.error('Info', 'Delete failed. Data is associated with other objects.');
            } else {
              this.pnotifyService.error('Info', 'Delete failed');
            }
          }
        });
      }
    });
  }

  // modals
  hideModal() {
    this.editModal.hide();
  }

  // show modal
  openAdd() {
    this.action = 'Add';
    this.userType = { id: 0 } as UserType;
    this.editModal.show();
  }
  openEdit(id) {
    event.preventDefault();
    this.action = 'Edit';
    // load data here by id, then show dialog
    this.userTypeService.get(id).subscribe(res => {
      this.userType = res.data;
      this.editModal.show();
    });
  }
}
