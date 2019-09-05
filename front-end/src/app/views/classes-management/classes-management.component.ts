import { Component, OnInit, Input } from '@angular/core';
import { ClassesManagement } from '../../models/classes-management';
import { Subject } from 'rxjs';
import { ClassesManagementService } from '../../services/classes-management.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { PnotifyService } from '../../utils/pnotify.service';
import { UsersManagement } from '../../models/users-management';
import { UsersManagementService } from '../../services/users-management.service';

@Component({
  selector: 'app-classes-management',
  templateUrl: './classes-management.component.html'
})
export class ClassesManagementComponent implements OnInit {

  users: [UsersManagement] = {} as [UsersManagement];
  classes: [ClassesManagement];

  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<ClassesManagement> = new Subject();

  constructor(
    private classesManagementService: ClassesManagementService,
    private usersManagementService: UsersManagementService,
    private router: Router,
    private pnotifyService: PnotifyService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7
    };

    this.classesManagementService.list().subscribe(res => {
      this.classes = res.data;
      this.dtTrigger.next();
      console.log(res);
    });

    this.usersManagementService.list().subscribe(res => {
      this.users = res.data;
      console.log(res);
    });
  }

  delete(event, id) {
    this.pnotifyService.showConfirm('Confirm', 'Are you sure?', yes => {
      if(yes) {
        this.classesManagementService.delete(id).subscribe(res => {
          if(res != null) {
            this.reloadData();
            this.router.navigate(['classes-management']);
            this.pnotifyService.success('Delete', 'Deleted successfully');
          }
        })
      } else {
        this.pnotifyService.error('Delete', 'Delete failed');
      }
    })
  }

  reloadData() {
    this.classesManagementService.list().subscribe(res => {
      this.classes = res.data;
    })
  }

}
