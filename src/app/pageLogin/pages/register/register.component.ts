import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Users:User = new User(0,'','','','','',false)
  arrUsers:User [] =[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loadArrProduct()
  }
  loadArrProduct(){
    let tmpLocal = localStorage.getItem('Users')
    if(tmpLocal != null){
      this.arrUsers = JSON.parse(tmpLocal)
    }
  }
  onSubmit(frm:NgForm){
    this.Users.id = this.arrUsers.length;
    this.arrUsers.push(this.Users);
    localStorage.setItem('Users', JSON.stringify(this.arrUsers))
    alert('dang ki thanh cong')
    this.router.navigate(['/auth/login'])
  }
}
