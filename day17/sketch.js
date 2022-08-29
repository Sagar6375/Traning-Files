// global scope
var bg,bgImage,mario_runing,mario,ground;
var brickImage,bricksGroup;
var coinImage,coinGroup,jumpSound;
var coinSound,points=0,points1=0;
var obs,obs1;



//load asset
function preload(){
    bgImage=loadImage("images/bgnew.jpg");
    mario_runing=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png");
    brickImage=loadImage("images/brick.png");
    coinImage=loadAnimation("images/con1.png","images/con2.png","images/con3.png","images/con4.png","images/con5.png","images/con6.png",);
    coinSound=loadSound("sounds/coinSound.mp3");
    jumpSound=loadSound("sounds/jump.mp3");
    obs=loadImage("images/dead.png");
}  
//create basic scaleton with their require credentials
///////////////////////////////////////////////////////////////////////////////////////////////////

function setup(){
    createCanvas(1000,600);
    bg=createSprite(600,300,150,150);
    mario=createSprite(200,520,50,50);
    bg.addImage(bgImage);
    mario.addAnimation("rumming",mario_runing);
    bg.scale=0.5;
    mario.scale=0.2;
   
    ground =createSprite(200,580,400,10);
    bricksGroup=new Group();
    coinGroup=new Group();
   // obs1=createSprite(200,200,100,100);

    
}



////////////////////////////////////////////////////////////////////////////////////

//use to redrw the object on the canvas

function draw (){
//make background and repetes
    bg.velocityX=-6;
    if(bg.x<100)
    bg.x=bg.width/4;

    //mario fly
    if (keyDown('space')){
        mario.velocityY= -10;
        jumpSound.play();
    }
    
    mario.velocityY=mario.velocityY+0.5;

   //ground
   mario.collide(ground);
   //groun hidden
   ground.visible=false;
   //call generateBricks;
   generateBricks();
   //coin fumction call
   generateCoin();

  //brick stop
   for (var i=0;i<bricksGroup.length;i++){
    var temp=bricksGroup.get(i);
    if(mario.isTouching(temp))
    mario.collide(temp);
    
   }
   if(mario.x<200){
     mario.x=200;
   }
   if(mario.y<50)
      mario.y=50;

   ///coin touch
   for (var i=0;i<coinGroup.length;i++){
    var temp=coinGroup.get(i);
    if(mario.isTouching(temp)){
        //coinGroup.get(i).style.display=none;
        points++;
        coinSound.play();
        temp.destroy();
        temp=null;

        //obs1=createSprite(200,200,100,100);
        


    }
    // else{
    //     points=0;
    // }
    points1++;
    
    
   }
   // background("black");
    drawSprites();

    //coin count
    textSize(20);
    fill("black");
    text("coin point="+points,10,80);
    text("Match point="+points1,10,50);


    
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function generateBricks(){
    if(frameCount%80==0){
        //console.log(frameCount);
    

    var brick=createSprite(1200,100,30,5);
    brick.scale=0.5;
    brick.y=random(50,450);
    brick.addImage(brickImage);
    brick.velocityX=-5;
    bricksGroup.add(brick);
    }
}

    function  generateCoin(){
        if(frameCount%50==0){
           // console.log(frameCount);
        
    
        var coin=createSprite(1100,100,30,5);
        coin.y=random(50,450);
        coin.addAnimation("coinanimation",coinImage);
        coin.scale=.1;
        coin.velocityX=-10;
        //setTimeout(coin.velocityX+=-10,2000);
        console.log(coin.velocityX);
        coinGroup.add(coin);
        }
    
    

}