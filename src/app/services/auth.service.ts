import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  // kiem tra da dang nhap hay chua
  checkLogin(){
    let tmp = localStorage.getItem('UserReal')
    if(tmp != null){
      let getUser = JSON.parse(tmp)
      if(getUser.checkAdmin){
        return true;
      }
      return false;
    }else{
      return false;
    }
  }
}
