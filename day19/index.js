import { message } from "./lib.js";
console.log(message);
import { display } from "./lib.js";
var name=prompt("enter your name");
console.log(display(name));
import { Employe } from "./lib.js";
let emp1=new Employe("sagar",1010,"gaming");
emp1.dispDetails();


///for all import
//import * as Data from "./lib.js"
//console.log(Data.message);
