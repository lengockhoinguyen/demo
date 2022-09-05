import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  arrproduct:Product [] = [];
  Product:Product = new Product(this.arrproduct.length,'','',0,'',0,0);
  constructor() { }

  ngOnInit(): void {
    this.loadProduct()
  }
  // in san pham
  loadProduct(){
    //Lấy dữ liệu trên localstorage
    let tmp:any = localStorage.getItem('product')
    this.arrproduct=JSON.parse(tmp)
    console.log(this.arrproduct);
  }
  // xoa san pham
  deleteItem(i:any){
    this.arrproduct.splice(i,1)
    localStorage.setItem('product',JSON.stringify(this.arrproduct))
  }
  // them san pham
  addProduct(frm:NgForm){
    
    //gán trường id của Product = độ dài mảng để in ra được id sau khi thêm sản phẩm
    if(this.Product.id = this.arrproduct.length){
      // thêm sản phẩm vào mảng arrproduct
          this.arrproduct.push(this.Product)
          // gán lại lên localstorage 1 mảng mới sau khi thêm sản phẩm vào mảng
          localStorage.setItem('product',JSON.stringify(this.arrproduct))
          alert('them thanh cong')
    }else{
        alert('them that bai')
    }
  }
}
