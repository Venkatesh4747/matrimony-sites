import { Component, OnInit } from '@angular/core';
import { animate, keyframes, transition, trigger } from '@angular/animations';
import { swiperight, swipeleft } from 'src/app/shared/keyframes';
// import {user} from 'src/app/shared/user';
import { NbToastrService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/shared/service/user-data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-slide-users',
  templateUrl: './slide-users.component.html',
  styleUrls: ['./slide-users.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swipeleft)))
    ])
  ]
})
export class SlideUsersComponent implements OnInit {

  index = 0;
  userList = [
    {
      userImage: 'assets/images/user1.png',
      name: 'Nazria',
      age: '27 Yrs',
      height: '5.2 ft',
      language: 'Tamil',
      caste: 'BC',
      address: {
        state: 'Tamil Nadu',
        city: 'Chennai',
        country: 'India'
      },
      degree: 'MBBS, Doctor',
    },
    {
      userImage: 'assets/images/user2.png',
      name: 'Priyanka',
      age: '25 Yrs',
      height: '5.2 ft',
      language: 'Tamil',
      caste: 'OBC',
      address: {
        state: 'Pondicherry',
        city: 'Pondicherry',
        country: 'India'
      },
      degree: 'MBBS, Doctor',
    },
    {
      userImage: 'assets/images/user3.png',
      name: 'Vijay',
      age: '27 Yrs',
      height: '5.2 ft',
      language: 'Tamil',
      caste: 'OBC',
      address: {
        state: 'Pondicherry',
        city: 'Pondicherry',
        country: 'India'
      },
      degree: 'Viscom',
    },
    {
      userImage: 'assets/images/user4.jpg',
      name: 'Simbu',
      age: '32 Yrs',
      height: '5.5 ft',
      language: 'Tamil',
      caste: 'MC',
      address: {
        state: 'Tamil Nadu',
        city: 'Chennai',
        country: 'India'
      },
      degree: 'MBA',
    },
    {
      userImage: 'assets/images/siva.jpeg',
      name: 'Siva',
      age: '27 Yrs',
      height: '5.2 ft',
      language: 'Tamil',
      caste: 'OB',
      address: {
        state: 'Tamil Nadu',
        city: 'Villupuram',
        country: 'India'
      },
      degree: 'Engineer',
    },
    {
      userImage: 'assets/images/user9.png',
      name: 'Keerthy',
      age: '26 Yrs',
      height: '5.7 ft',
      language: 'Tamil',
      caste: 'MBC',
      address: {
        state: 'Tamil Nadu',
        city: 'Trichy',
        country: 'India'
      },
      degree: 'MCA',
    },
  ]
  // @Input() parentSubject: Subject<any> | any;




  animationState: string | any;
  eventText: string | any;
  constructor(
    private toasterService: NbToastrService, private httpClient: HttpClient, private dataService: UserDataService
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void{
    this.httpClient.get<any>('assets/data/userlist.json')
    .pipe(
      debounceTime(2000))
    .subscribe((data: any) => {
      setTimeout(() => {
      }, 800);
      this.userList = data.userList;
    });
  }

  startAnimation(value: any) {
    console.log('value', value)
    // this.dataService.checkSpinner(true);
    if (!this.animationState) {
      const duration = 800;
      this.index++;
      if (this.userList.length === this.index) {
        this.index = 0;
      }
      if (value === 'swipeleft') {
        this.toasterService.danger('', 'Not Interested', { duration });
      } else if (value === 'swiperight') {
        this.toasterService.success(' ', 'Interested', { duration });
      } else if (value === 'shortlist') {
        this.toasterService.primary(' ', 'Shortlisted', { duration });
      }
      this.animationState = value;
      // this.dataService.checkSpinner(false);
    }
  }
  resetAnimationState(state: any) {
    this.animationState = '';
  }


  // ngOnDestroy() {
  //   this.parentSubject.unsubscribe();
  // }
  onSwipeRight(event: any) {
    console.log('event right', event);
    this.startAnimation('swiperight')
  }

  onSwipeLeft(event: any) {
    console.log('event left', event);
    this.startAnimation('swipeleft')
  }
}


