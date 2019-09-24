import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Page } from '../../models/page';
import { Class } from '../../models/class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClassService } from '../../services/class.service';
import { PnotifyService } from '../../utils/pnotify.service';
import { User } from '../../models/user copy';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;
  users: [IUser]
  userid: number = 0;
  action: string;
  page: Page = { pageNumber: 0, pageSize: 5 } as Page;
  //
  classes: Class[] = [];
  class: Class = {} as Class;
  columns = [
    { name: 'ID', prop: 'id', sortTable: true },
    { name: 'classname', prop: 'userrole', sortTable: true },
    { name: 'userid', sortTable: true }
  ];
  //  customers: [Customer];

  form: FormGroup;
  constructor(
    private classService: ClassService,
    private userService: UserService,
    private pnotifyService: PnotifyService,
    private fb: FormBuilder
  ) {
    this.userService.list(this.page).subscribe(res => {
      this.users = res.data;
      console.log(this.users);
    });

    this.form = this.fb.group({
      classname: ['', Validators.required],
      userid: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.loadClasses();
  }
  loadClasses(page = null) {
    if (page != null) {
      this.page.pageNumber = page.offset;
    }
    // tslint:disable-next-line: triple-equals
    if (this.userid == 0) {
      this.classService.list(this.page).subscribe(res => {
        this.page = res.pageInfo;
        this.classes = res.data;
      });
    } else {
      this.classService.getByType(this.userid, this.page).subscribe(res => {
        this.page = res.pageInfo;
        this.classes = res.data;
      });
    }
  }
  loadData(id) {
    this.classService.get(id).subscribe(res => {
      this.class = res.data;
    });
  }
  // save
  save() {
    this.classService.save(this.class).subscribe((res => {
      if (res.errorCode === 0) {
        this.editModal.hide();
        this.loadClasses();
        this.class = {} as Class;
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
        this.classService.delete(id).subscribe(res => {
          if (res.errorCode === 0) {
            this.pnotifyService.success('Info', 'Delete susess');
            this.loadClasses();
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
    this.class = { id: 0 } as Class;
    this.editModal.show();
  }
  openEdit(id) {
    event.preventDefault();
    this.action = 'Edit';
    // load data here by id, then show dialog
    this.classService.get(id).subscribe(res => {
      this.class = res.data;
      this.editModal.show();
    });
  }
}
