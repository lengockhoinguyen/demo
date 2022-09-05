import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  adminUser:User = new User(113,'admin','admin','admin','','',true)
  arrUsers:User [] =[];
  constructor() { }

  ngOnInit(): void {
    this.loadArrUsers()
  }
  loadArrUsers(){
    if(localStorage.getItem('Users')){
      let localStoragePro:string|null = localStorage.getItem('Users');
      if(typeof(localStoragePro)==='string'){
        this.arrUsers = JSON.parse(localStoragePro)
      }
    } else{
      this.arrUsers.push(this.adminUser)
      localStorage.setItem('Users',JSON.stringify(this.arrUsers))
      let localStoragePro:string|null = localStorage.getItem('Users')
      if(typeof(localStoragePro)==='string'){
        this.arrUsers = JSON.parse(localStoragePro)
      }
    }
  }
}
