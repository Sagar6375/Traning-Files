var Currentdate=new Date();
var day=String(Currentdate.getDate()).padStart(2,'0');
var month=String(Currentdate.getMonth()+1).padStart(2,'0');
var year=String(Currentdate.getFullYear()).padStart(2,'0');
const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
var weekday=week[Currentdate.getDay()];
var ndate=day+'/'+month+'/'+year;
document.body.innerHTML="<h1>"+ndate+"</h1>"+"<h2>"+weekday+"</h2>";
var firstname=prompt("Enter Name");
document.write('<h1 style="color:red">'+ firstname+'</h1>');
var n1=prompt("Enter number1");
var n2=prompt("Enter number2");
var add=Number(n1)+Number(n2);
document.write("<br>Add="+add);
var sub=Number(n1)-Number(n2);
document.write("<br> Sub="+sub);
var div=Number(n1)/Number(n2);
document.write("<br> Div="+div);
var Mul=Number(n1)*Number(n2);
document.write("<br> Mul="+Mul);