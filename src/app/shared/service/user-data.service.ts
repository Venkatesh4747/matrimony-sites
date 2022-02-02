import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, pipe, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userList: any;

  constructor(private http: HttpClient) { }

  getUserList(): void{
    this.http.get<any>('shared/data/userlist.json')
    .pipe(
      debounceTime(2000))
    .subscribe((data: any)=>{
      this.userList = data.userList;
      });
  }

  private assessmentData = new BehaviorSubject({});
  data = this.assessmentData.asObservable();

  addData(data: any) {
    this.assessmentData.next(data);
  }

}


