import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Student } from '../../models/student';
import { Page } from '../../models/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { PnotifyService } from '../../utils/pnotify.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  userTypes: [Student];
  userTypeId: number = 0;
  action: string;
  readonly: boolean;

  page: Page = { pageNumber: 0, pageSize: 5 } as Page;
  //
  sexs = [true, false];
  students: Student[] = [];
  student: Student = {} as Student;
  hidden: boolean;
  columns = [
    { name: 'Username', prop: 'name', sortTable: true },
    { name: 'Fullname', sortTable: true }
  ];
  //  customers: [Customer];

  form: FormGroup;
  constructor(
    private userService: StudentService,
    private pnotifyService: PnotifyService,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      cmnd: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
      school: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
      code: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    })
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(page = null) {
    if (page != null) {
      this.page.pageNumber = page.offset;
    }
    // tslint:disable-next-line: triple-equals
    if (this.userTypeId == 0) {
      this.userService.list(this.page).subscribe(res => {
        this.page = res.pageInfo;
        this.students = res.data;
        console.log(this.students);
      });
    }
  }
  loadData(id) {
    this.userService.get(id).subscribe(res => {
      this.student = res.data;
    });
  }
  // save
  save() {
    this.userService.save(this.student).subscribe((res => {
      if (res.errorCode === 0) {
        this.editModal.hide();
        this.loadUsers();
        this.student = {} as Student;
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
        this.userService.delete(id).subscribe(res => {
          if (res.errorCode === 0) {
            this.pnotifyService.success('Info', 'Delete susess');
            this.loadUsers();
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
    this.hidden = false;
    this.readonly = false;
    this.student = { id: 0 } as Student;
    this.editModal.show();
  }
  openEdit(id) {
    event.preventDefault();
    this.action = 'Edit';
    this.readonly = true;
    this.hidden = true;
    // load data here by id, then show dialog
    this.userService.get(id).subscribe(res => {
      this.student = res.data;
      this.editModal.show();
    });
  }
}
