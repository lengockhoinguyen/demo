export class Product{
    id:number=0;
    name:string="";
    img:string="";
    type:string="";
    price:number=0;
    qualtity:number=0;
    inCart:number=0;
    constructor(id:number,name:string,img:string,price:number,type:string,qualtity:number,inCart:number){
        this.id=id;
        this.name=name;
        this.img = img;
        this.type=type;
        this.price =price;
        this.qualtity = qualtity;
        this.inCart = inCart;
    }
}