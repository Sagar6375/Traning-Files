var canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

//Animation

var circle={
    x:150,y:200,size:30,
    dx:5,
    dy:3,
};

//draw the circle
function drawcircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle="black";
    ctx.fill();
}

function update(){
    //  canvas=document.getElementById("canvas");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawcircle();
    circle.x+=circle.dx;
    circle.y+=circle.dy;
//Detect
if(circle.x+circle.size>canvas.width||circle.x-circle.size<0)
circle.dx*=-1;
if(circle.y+circle.size>canvas.height||circle.y-circle.size<0)
circle.dy*=-1;

   requestAnimationFrame(update);
    console.log(123);

}
update();


































// // ctx.fillStyle("green");
// canvas.width= "500";
// ctx.fillStyle="red";
// ctx.fillRect(250,150,70,70);


// ctx.lineWidth=1;
// ctx.strokeStyle="blue";
// ctx.strokeRect(350,150,70,70);

// ctx.fillStyle="orange";
// ctx.roundRect(10,100,70,70 [10]);
// ctx.fill();
// ctx.clearRect(0,0,canvas.width,canvas.height);
// //drw 
// //path

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// // ctx.lineTo(100,200);
// ctx.lineTo(50,50);
// ctx.fillStyle= "red";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.closePath();
// ctx.stroke();




// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle= "red";
// ctx.fill();

// //ctx.stroke();
// ctx.beginPath();
// ctx.arc(300,300,100,0, Math.PI*2);
// ctx.fillStyle= "black";
// ctx.fill();
// //ctx.stroke();
// ctx.clearRect(0,0,canvas.width,canvas.height);



// //radian=(math.PI)*2  ---full circle
// //radian=(math.PI)    ---half circle
// //



