import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { debounceTime } from 'rxjs';
import { UserDataService } from 'src/app/shared/service/user-data.service';
// import { UserDataService } from 'src/app/shared/service/user-data.service';


@Component({
  selector: 'app-pending-profile',
  templateUrl: './pending-profile.component.html',
  styleUrls: ['./pending-profile.component.scss']
})
export class PendingProfileComponent implements OnInit {
  userList: any;
  // userList: any;

  constructor(
    private router: Router, private dataService: UserDataService,
    private http: HttpClient
  ) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [''],
    // items:1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
      1140: {
        items: 5
      },
    },
    nav: true
  }


  ngOnInit(): void {
    this.getUserList();
  }

  clickUser(item: any) {
    console.log('item', item);
    this.dataService.addData(item);
    this.router.navigate(['/user-profile']);
  }

  getUserList(): void{
    this.http.get<any>('assets/data/userlist.json')
    .pipe(
      debounceTime(2000))
    .subscribe((data: any) => {
      setTimeout(() => {
      }, 800);
      this.userList = data.userList;
    });
  }
  

  // getData() {
  //   this.userService.getUserList().subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }

}
