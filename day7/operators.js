//Arithmatic operators
//+,_,*,/,%,++,--
var a=10,b=2;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;

//Relation Operators
//<,>,<=,>=,==,===,!=,!==
(a=10),(b=20),(c=30);

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
a="20";
//it compare the value
console.log(a==b);//true
//it compare the value as well datatype
console.log(a===b);//false

console.log(a!=b);//false
//only compare data type
console.log(a!==b);//true

//logical operator
var result =a<b&& a!=b;
console.log(result);//false

var ans="Hello"&&a==b;
console.log(ans);//true
var ans="Hello"&&a==b;
console.log(ans);//false


//Assignment operators
//=,+==,-=,/+,+=,%=

//ternary operator
result=(a!=b)?"hrami londa vinod ":"Aditi gvar";
console.log(result);