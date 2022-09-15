class person{
    empcode:number
    empname:string
    constructor(code:number,name:string){
        this.empcode=code;
        this.empname=name
    }

    // dispdetail():void{
    //     console.log(`code: $(this.empcode) Name: $(this.empname)`);

    // }
    dispdetail=()=>console.log(`code: ${this.empcode} Name: ${this.empname}`);
}
let emp1=new person(102,"sagar");
emp1.dispdetail();
//Access Modifire
//1 public 
//protected
//private

