import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { UserInfoFavClicked } from '../fav';
import { User } from '../user'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HomePage } from '../home.page';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent  implements OnInit {
 
  @Output() onFavClicked:EventEmitter<UserInfoFavClicked> = new EventEmitter<UserInfoFavClicked>();
  
  onFavClick(event:any){
    this.onFavClicked.emit({
      fav:!(this.User?.fav??false) //devolvemos el estado contrario al que tenemos
    });
    event.stopPropagation();
 }
 
  
  constructor(
    private router:Router,
   private toast:ToastController
  ) { }

  ngOnInit() {}

}
