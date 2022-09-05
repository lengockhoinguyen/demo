import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Users:User = new User(0,'','','','','',false)
  arrUsers:User [] =[];
  constructor(private authService:AuthService,private router:Router) { }

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
    let check = false;
    this.arrUsers.forEach((item) => {
      // console.log(item,this.Users);
      if(item.username == this.Users.username && item.password == this.Users.password)
      {  
        this.Users=item;
        check = true;
      }
    });
    if(check){
      localStorage.setItem('UserReal',JSON.stringify(this.Users))
      alert('dang nhap thanh cong');
      this.router.navigate(['/clients/product'])
    }else{
      alert('Sai mật khẩu hoặc tài khoản');
    }
  }
}
