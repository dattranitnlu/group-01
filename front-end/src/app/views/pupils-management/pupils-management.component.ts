import { Component, OnInit } from '@angular/core';
import { PupilsManagement } from '../../models/pupils-management';
import { Subject } from 'rxjs';
import { PupilsManagementService } from '../../services/pupils-management.service';
import { Router } from '@angular/router';
import { PnotifyService } from '../../utils/pnotify.service';

@Component({
  selector: 'app-pupils-management',
  templateUrl: './pupils-management.component.html'
})
export class PupilsManagementComponent implements OnInit {

  pupils: [PupilsManagement];
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<PupilsManagement> = new Subject();

  constructor(
    private pupilsManagementService: PupilsManagementService,
    private router: Router,
    private pnotifyService: PnotifyService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7
    };

    this.pupilsManagementService.list().subscribe(res => {
      this.pupils = res.data;
      this.dtTrigger.next();
      console.log(res);
    });
  }

  delete(event, id) {
    this.pnotifyService.showConfirm('Confirm', 'Are you sure?', yes => {
      if(yes) {
        this.pupilsManagementService.delete(id).subscribe(res => {
          if(res != null) {
            this.reloadData();
            this.pnotifyService.success('Delete', 'Deleted successfully');
          }
        })
      } else {
        this.pnotifyService.error('Delete', 'Delete failed');
      }
      this.router.navigate(['pupils-management']);
    })
  }

  reloadData() {
    this.pupilsManagementService.list().subscribe(res => {
      this.pupils = res.data;
    })
  }

}
