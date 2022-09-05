import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill.module';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // products:Product [] = [
  //   new Product(0,"Nón Andes 3S103D","assets/img/sanpham1.jpg",100000,10),
  //   new Product(1,"Nón Andes 3S103D","assets/img/sanpham2.jpg",100000,10),
  //   new Product(2,"Nón Andes 3S103D","assets/img/sanpham3.jpg",100000,10),
  //   new Product(3,"Nón Andes 3S103D","assets/img/sanpham4.jpg",100000,10),
  //   new Product(4,"Nón Andes 3S103D","assets/img/sanpham5.jpg",100000,10),
  //   new Product(5,"Nón Andes 3S103D","assets/img/sanpham6.jpg",100000,10),
  //   new Product(6,"Nón Andes 3S103D","assets/img/sanpham7.jpg",100000,10),
  //   new Product(7,"Nón Andes 3S103D","assets/img/sanpham8.jpg",100000,10),
  //   new Product(8,"Nón Andes 3S103D","assets/img/sanpham9.jpg",100000,10),
  //   new Product(9,"Nón Andes 3S103D","assets/img/sanpham10.jpg",100000,10),

  // ]
  total:number =0;
  Search:string='';
  products :Product [] = [];
  cart: any [] =[];
  UserBill:User = new User(0,'','','','','',false)
  Bill:Bill [] =[];
  // khai báo 1 mảng tạm 
  tmpPro:string = '[{"id":0,"name":"Nón Andes 3S103D FullFace","img":"assets/img/sanpham1.jpg","type":"Full Face","price":150000,"qualtity":10,"inCart":1},{"id":1,"name":"Mũ KYT NFJ Espargaro Misano","img":"assets/img/sanpham2.jpg","type":"Full Face","price":300000,"qualtity":10,"inCart":1},{"id":2,"name":"Mũ 3/4 Bulldog Heli Đen bóng","img":"assets/img/sanpham3.jpg","type":"Full Face","price":450000,"qualtity":10,"inCart":1},{"id":3,"name":"Mũ KYT Venom Thitipongg","img":"assets/img/sanpham4.jpg","type":"Full Face","price":550000,"qualtity":10,"inCart":1},{"id":4,"name":"Mũ Fullface KYT Falcon Leopard ","img":"assets/img/sanpham5.jpg","type":"Full Face","price":890000,"qualtity":10,"inCart":1},{"id":5,"name":"Fullface HJC CS-15 Toni Elias 24","img":"assets/img/sanpham6.jpg","type":"Full Face","price":340000,"qualtity":10,"inCart":1},{"id":6,"name":"Nón 3/4 Avex XTREME Daruma","img":"assets/img/sanpham7.jpg","type":"3/4","price":420000,"qualtity":10,"inCart":1},{"id":7,"name":"Nón 3/5 KYT Tiger JetBegon","img":"assets/img/sanpham8.jpg","type":"3/4","price":730000,"qualtity":10,"inCart":1},{"id":8,"name":"KYT Venom Axel Basani","img":"assets/img/sanpham9.jpg","type":"Full Face","price":680000,"qualtity":10,"inCart":1},{"id":9,"name":"KYT Alex Fulgon","img":"assets/img/sanpham10.jpg","type":"Full Face","price":100000,"qualtity":10,"inCart":1}]';
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loadProduct();
    this.loadCartLocal();
    this.totalCart();
    this.loadUserinBill();
    this.loadBill()
  }
  loadProduct(){
    // hàm sẽ kiểm tra nếu lấy được sản phẩm trên localstorage 
    if(localStorage.getItem('product')){
      // gán sản phẩm vừa lấy được vào biến localstoragePro
      let localStoragePro:string|null = localStorage.getItem('product');
      //kiểm tra nếu biến localstoragePro có kiểu string
      if(typeof(localStoragePro)==='string'){
        this.products = JSON.parse(localStoragePro)
      }
    } else{
      localStorage.setItem('product',this.tmpPro)
      let localStoragePro:string|null = localStorage.getItem('product')
      if(typeof(localStoragePro)==='string'){
        this.products = JSON.parse(localStoragePro)
      }
    }
  }
  loadCartLocal(){
    if(localStorage.getItem('cart')){
      // gán sản phẩm vừa lấy được vào biến localstoragePro
      let localStoragePro:string|null = localStorage.getItem('cart');
      //kiểm tra nếu biến localstoragePro có kiểu string
      if(typeof(localStoragePro)==='string'){
        this.cart = JSON.parse(localStoragePro)
      }
    } else{
      localStorage.setItem('cart',JSON.stringify(this.cart))
      let localStoragePro:string|null = localStorage.getItem('cart')
      if(typeof(localStoragePro)==='string'){
        this.cart = JSON.parse(localStoragePro)
      }
    }
  }
 
  Buy(item:any){
    //Đặt biến cờ mặc định chưa có sản phẩm
    let flag = false;
    // Chạy vòng for để in sản phẩm vào giỏ hàng
    for(let i=0;i<this.cart.length;i++)
    {
      //Nếu đã có sản phẩm trong giỏ hàng và thêm 1 sản phẩm tương tự 
      //kiểm tra nếu sản phẩm truyền vào = sản phẩm đã có trong giỏ hàng thì chỉ tăng thêm số lượng
      if(item.name==this.cart[i].name){
        this.cart[i].inCart++;
        flag=true
      }
    }

    //Nếu chưa có sản phẩm trong giỏ hàng sẽ thêm sản phẩm vào giỏ hàng
    if(flag==false){
      this.cart.push(item)
    }
    alert('them thanh cong')
    //Khi thêm sản phẩm thành công ,tất cả sản phẩm trong giỏ hàng sẽ được truyền dữ liệu vào mảng cart trên localstorage
    localStorage.setItem('cart',JSON.stringify(this.cart))
    //Gọi lại hàm tính tổng tiền để tổng tiền được cập nhật lại sau mỗi lần thêm sản phẩm
    this.totalCart()
  }
  //Tính tổng tiền
  totalCart(){
    this.total=0;
    for(let i=0;i<this.cart.length;i++){
      this.total += this.cart[i].price*this.cart[i].inCart;
    }
  }

  //Thêm số lượng sản phẩm trong giỏ hàng
  btnRise(i:any){
    this.cart[i].inCart++;
    this.totalCart()
  }

  //Giảm số lượng sản phẩm trong giỏ hàng
  btnDown(i:any){
    if(this.cart[i].inCart>0){
      this.cart[i].inCart--;
      this.totalCart()
    }

  }
  //Xóa sản phẩm trong giỏ hàng
  deleteItem(i:any){
    this.cart.splice(i,1);
    localStorage.setItem('cart',JSON.stringify(this.cart))
    this.totalCart()
    alert('xoa san pham thanh cong  ')
  }
  // ham lay du lieu User
  loadUserinBill(){
    let tmpUser = localStorage.getItem('UserReal')
    if(tmpUser != null){
      this.UserBill= JSON.parse(tmpUser)
    }
    console.log(this.UserBill);
  }
  loadBill(){
    let tmpBill = localStorage.getItem('Bill')
      if(tmpBill != null){
        this.Bill = JSON.parse(tmpBill)
      }
    
  }
  //Thanh toán
  checkOut(){
    //Kiểm tra người dùng đã đăng nhập chưa
    if(localStorage.getItem('UserReal') == null){
        alert('ban chua dang nhap')
        this.router.navigate(['/auth/login'])
      }else{
        //khởi tạo biến pushBill có kiểu dữ liệu của module Bill
        let pushBill:Bill = new Bill(this.Bill.length,this.UserBill,this.cart,this.total);
        // gán biến pushbill vừa tạo vào mãng rỗng Bill
        this.Bill.push(pushBill);
        // xóa sản phẩm trong giỏ hàng sau khi thanh toán
        this.cart = [];
        // tính lại tổng tiền khi đã thanh toán
        this.totalCart();
        // Cập nhật lại dữ liệu trên localstorage
        localStorage.setItem('Bill',JSON.stringify(this.Bill))
        localStorage.setItem('cart',JSON.stringify(this.cart))
        alert('thanh toan thanh cong')
      }
  }
}
