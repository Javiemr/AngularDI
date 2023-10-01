import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private _users:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  users$:Observable<User[]> = this._users.asObservable();

  
  constructor() {}

  ngOnInit(): void {
  
    var users:User[] = [
      {id: 1, name:"Juan A.", surname:"garcía gómez", age:46, fav:true},
      {id: 2, name:"Alejandro", surname:"garcía gómez", age:45, fav:true},
      {id: 3, name:"juan", surname:"garcía Valencia", age:4, fav:false},
      {id: 4, name:"María del Mar", surname:"Valencia Valencia", age:46, fav:true},
      {id: 5, name:"Lydia", surname:"garcía Robles", age:11, fav:false}
    ];
    this._users.next(users);
  }

}
