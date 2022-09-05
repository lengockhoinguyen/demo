import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  UserLogin:any;
  tmpCart:any[]=[]
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getLocalStorageCart();
    this.getUsersReal();
  }
  getLocalStorageCart(){
    if(localStorage.getItem('cart')){
      let tmp:string|null = localStorage.getItem('cart')
      if(typeof(tmp)==='string'){
        this.tmpCart = JSON.parse(tmp)
      }
    }
  }
  //Tạo hàm lấy dữ liệu trên localstorage
  getUsersReal(){
    //Kiểm tra nếu lấy được dữ liệu
    if(localStorage.getItem('UserReal')){
      //Gán dữ liệu vừa lấy được vào biến tmpUser
      let tmpUser:string|null = localStorage.getItem('UserReal')
      if(typeof(tmpUser)==='string'){
        this.UserLogin = JSON.parse(tmpUser)
      }
    }
    console.log(this.UserLogin);
    
  }
  logOut(){
    localStorage.removeItem('UserReal')
    localStorage.removeItem('cart')
    this.router.navigate(['/auth/login'])
  }
}
