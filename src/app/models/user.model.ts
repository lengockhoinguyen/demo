export class User{
    id:number=0;
    fullname:string="";
    username:string="";
    password:string="";
    address:string="";
    email:String="";
    checkAdmin:boolean=false;
    constructor(id:number,fullname:string,username:string,password:string,address:string,email:String,checkAdmin:boolean){
        this.id=id;
        this.fullname=fullname;
        this.username=username;
        this.password=password;
        this.address=address;
        this.email=email;
        this.checkAdmin=checkAdmin;
    }
}