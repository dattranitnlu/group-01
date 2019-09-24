import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { UserType } from '../../models/user-type';
import { Page } from '../../models/page';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserTypeService } from '../../services/user-type.service';
import { PnotifyService } from '../../utils/pnotify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  userTypes: [UserType];
  userTypeId: number = 0;
  action: string;
  page: Page = { pageNumber: 0, pageSize: 5 } as Page;
  //
  sexs = [true, false];
  users: User[] = [];
  user: User = {} as User;
  hidden: boolean;
  columns = [
    { name: 'Username', prop: 'name', sortTable: true },
    { name: 'Fullname', sortTable: true },
    { name: 'Userrole', prop: 'userrole', sortTable: true }
  ];
  //  customers: [Customer];

  form: FormGroup;
  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private pnotifyService: PnotifyService,
    private fb: FormBuilder
  ) {
    this.userTypeService.list(this.page).subscribe(res => {
      this.userTypes = res.data;
    });

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      fullName: ['', Validators.required],
      identitycard: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15)]],
      birthday: new FormControl(new Date()),
      sex: ['', Validators.required],
      status: ['', Validators.required],
      address: ['', Validators.required],
      usertypeid: ['', Validators.required]
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
        this.users = res.data;
        console.log(this.users);
      });
    } else {
      console.log(this.userTypeId);
      this.userService.getByType(this.userTypeId, this.page).subscribe(res => {
        this.page = res.pageInfo;
        this.users = res.data;
      });
    }
  }
  loadData(id) {
    this.userService.get(id).subscribe(res => {
      this.user = res.data;
    });
  }
  // save
  save() {
    this.userService.save(this.user).subscribe((res => {
      if (res.errorCode === 0) {
        this.editModal.hide();
        this.loadUsers();
        this.user = {} as User;
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
    this.user = { id: 0 } as User;
    this.editModal.show();
  }
  openEdit(id) {
    event.preventDefault();
    this.action = 'Edit';
    this.hidden = true;
    // load data here by id, then show dialog
    this.userService.get(id).subscribe(res => {
      this.user = res.data;
      this.editModal.show();
    });
  }
}
