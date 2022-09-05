
export class Bill{
    id:number =0;
    totalBill:number =0;
    inforUsers:any='';
    cart:any []=[];

    constructor(id:number,inforUsers:any,cart:any [],totalBill:number){
        this.id = id;
        this.cart = cart;
        this.totalBill = totalBill;
        this.inforUsers = inforUsers;
    }
}