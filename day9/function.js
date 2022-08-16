// function parts
//1. function defination 
//2. function calling
//3. function arguments n(optional)
//4. Return valueI(optional)

//function version
//1. function without argument and without return


function myFunction(){
    console.log("this is function");
    console.log("dbfhfjh");


}
myFunction();

// 2. function with argument and without return

function myFunction2(a,b){
    console.log("Result="+(a+b));

}
myFunction2(5,10);
//3. // 2. function with argument and with return
function myFunction3(a,b){
    return a+b ;

}
var result=myFunction3(10,20);
console.log("result="+result);

function myFunction4(message){
    if (message) return message;
    else return;
}
console.log(myFunction4("message"));
console.log(myFunction4());

//................................................................................................................
//................................................................................................................
//................................................................................................................
 function myFunction5(a,b){
    return a+b;
 }
 console.log("sum="+ myFunction5(5)); //not a   number

 // multipal argument
 //use argument function

 function sum(){
    console.log(arguments.length);
 }
 sum(1,2,3,3,4);
 sum(1,2,3);

 //rules
 // javascript function not check the spacify data type for parameters
 //javascript function do not perform type chacking on the passed argument
 //javascript function do not check the number of argument recive

 //...............................................................................................
 //...............................................................................................


 //we cal also  create function using constructor

 var myFunction6 = new Function("a","b","return a+b");
 console.log (myFunction6(5,7));


//  /in java script the purpose of function constructor  is to create a new function object .
//  it executes the code globally. however if we call the constructor directly ,a function create dynamicaly
 

// function Expression : It mean storing function defination inside  a variable  is called function Expression .It is also Know as Anonymous function;


var a= function(){
    console.log("This is function Expression");
    return "hello function";
};
console.log(a());

//..............................................................................................X
//..............................................................................................X

//self-Invoking function=called itself

(function(){
    console.log("this is called itself");
})();//calling,, it not contain any return statement

//function Hoisting
// sayHello(5,6);

// function sayHello(a,b){
//     console.log("result="+a + b);
// }
 //add(5,10); // erroer
 //hosting of function expression is not allow
//   var add=function(a+b){
//     return a+b;  
//   };

//............................................................................
//............................................................................
//java script scope: visiblity of code
// there are three type of scope
//1. block scope
//2. function scope
//3. Global Scope
//............................................................................
//............................................................................
//1. block scope

function Scope(){
    {
    var a=10;
    console.log(a);
    }
    console.log(a);

}
Scope();
//console.log(a);
//...........................................................................
//...........................................................................
function scope2(){
    var b=10;
    console.log(b)
}
//console.log(b);//not use
//............................
//lexical scope: scope with are testing in a function;function in function
function scope3(){
    var c=20;
    function scope4(){
        console.log(c);//use it
    }
}




