import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  User:User = new User(0,'','','','','',false)
  UserLogin:any
  arrUser:User []=[];
  constructor() { }

  ngOnInit(): void {
    this.loadUser()
  }
  loadUser(){
    //Lấy dữ liệu trên localstorage
    let tmp:any = localStorage.getItem('Users')
    this.arrUser=JSON.parse(tmp) 
    let tmpUser:any = localStorage.getItem('UserReal')
    this.UserLogin=JSON.parse(tmpUser)
    console.log(this.arrUser);
    console.log(this.UserLogin.id);
    
  }
  // xoa san pham
  deleteItem(i:any){
    if(this.UserLogin.id==this.arrUser[i].id){
      alert('không thể xóa admin đang đăng nhập !')
    }else{
      this.arrUser.splice(i,1)
      localStorage.setItem('Users',JSON.stringify(this.arrUser))
    }
  }
  // them san pham
  addUser(frm:NgForm){
    //gán trường id của Product = độ dài mảng để in ra được id sau khi thêm sản phẩm
    if(this.User.id = this.arrUser.length){
      // thêm sản phẩm vào mảng arrUser
          this.arrUser.push(this.User)
          // gán lại lên localstorage 1 mảng mới sau khi thêm sản phẩm vào mảng
          localStorage.setItem('Users',JSON.stringify(this.arrUser))
          alert('them thanh cong')
    }else{
        alert('them that bai')
    }
  }
}
