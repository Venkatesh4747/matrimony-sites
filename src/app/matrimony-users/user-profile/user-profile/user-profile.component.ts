import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/shared/service/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  selectedItem: any;


  constructor(
    private dataService: UserDataService
  ) { 
    this.dataService.data.subscribe(data => {
      this.selectedItem = data;
      console.log('the selected ', this.selectedItem)
    });
  }

  ngOnInit(): void {
  }
  

}
