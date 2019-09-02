import { Component, OnInit} from '@angular/core';
import { UsersManagementService } from '../../services/users-management.service';
import { UsersManagement } from '../../models/users-management';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { PnotifyService } from '../../utils/pnotify.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html'
})
export class UsersManagementComponent implements OnInit {

  users: [UsersManagement];
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<UsersManagement> = new Subject();

  constructor(
    private usersManagementService: UsersManagementService,
    private router: Router,
    private pnotifyService: PnotifyService
    ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7
    };

    this.usersManagementService.list().subscribe(res => {
      this.users = res.data;
      this.dtTrigger.next();
      console.log(res);
    });

  }

  delete(event, id) {
    this.pnotifyService.showConfirm('Confirm', 'Are you sure?', yes => {
      if(yes) {
        this.usersManagementService.delete(id).subscribe(res => {
          if(res != null) {
            this.reloadData();
            this.pnotifyService.success('Delete', 'Deleted successfully');
          }
        })
      } else {
        this.pnotifyService.error('Delete', 'Delete failed');
      }
      this.router.navigate(['users-management']);
    })
  }

  reloadData() {
    this.usersManagementService.list().subscribe(res => {
      this.users = res.data;
    })
  }

}
