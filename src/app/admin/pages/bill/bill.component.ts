import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill.module';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  indexBill:number = 0;
  arrBill:Bill []=[];
  Bill:Bill = new Bill(this.arrBill.length,'',[],0)
  constructor() { }

  ngOnInit(): void {
    this.LoadBill()
  }
  // lấy dữ liệu từ localstorage
  LoadBill(){
    let tmp:any = localStorage.getItem('Bill')
    this.arrBill = JSON.parse(tmp)
    console.log(this.arrBill);
  }
  // xem chi tiet hoa don
  xemchitiethd(i:any){
    this.indexBill = i;
  }
  // Xóa 1 hóa đơn trong danh sách hóa đơn
  deleteItemInBill(i:any){
    this.arrBill.splice(i,1)
    localStorage.setItem('Bill',JSON.stringify(this.arrBill))
  }

}
