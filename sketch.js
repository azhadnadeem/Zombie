var shooterimg,shooter1img,bg
var sprite,shooter3
var zombie,zombieimg
var zombieGroup
var bullet
var bulletgroup
var life=3
var heart1img,heart2img,heart3img
var heart1,heart2,heart3
var gamestate="play"
var shootSound;
var touchSound;
var bulletSound;
var score=0;
var restartImg;
var gameoverImg;


function preload(){
shooterimg=loadImage("shooter_1.png")
shooter1img=loadImage("shooter_3.png")
zombieimg=loadImage("zombie.png")
bg=loadImage("bg.jpeg")
heart1img=loadImage("heart_1.png")
heart2img=loadImage("heart_2.png")
heart3img=loadImage("heart_3.png")
shootSound=loadSound("lose.mp3")
touchSound=loadSound("explosion.mp3")
bulletSound=loadSound("win.mp3")
restartImg=loadImage("restart5.png")
gameoverImg=loadImage("GAMOVVV.png")

}
    
function setup(){
createCanvas(windowWidth,windowHeight)
sprite=createSprite(displayWidth/2,displayHeight/2,50,50)
sprite.addImage(bg)
shooter3=createSprite(300,displayHeight/2,50,50)
shooter3.addImage(shooterimg)
shooter3.scale=0.30
zombieGroup=new Group()
shooter3.debug=false

shooter3.setCollider("rectangle",0,0,200,500)
bulletGroup=new Group()

heart1=createSprite(displayWidth-150,30,50,50)
heart1.addImage(heart1img)
heart1.scale=0.3
heart1.visible=false

heart2=createSprite(displayWidth-150,30,50,50)
heart2.addImage(heart2img)
heart2.scale=0.3
heart2.visible=false

heart3=createSprite(displayWidth-150,30,50,50)
heart3.addImage(heart3img)
heart3.scale=0.3
heart3.visible=false

restart=createSprite(600,40)
restart.addImage(restartImg)
restart.scale=0.3

gameover=createSprite(600,200)
gameover.addImage(gameoverImg)
gameover.scale=1

}

function draw(){

    if(mousePressedOver(restart)){
       // restart.scale=0.1
       //restart.visible=false
       //gameover.visible=false
        reset()
   // }else{
       // restart.scale=0.3
    }
    
  drawSprites()

    if(gamestate=="play"){

     gameover.visible=false
     restart.visible=false
        

     textSize(50)
    fill("red") 
  text("score:-"+score,800,50)     

    
                               
 
 
if(life==3){
    heart1.visible=false
    heart2.visible=false
    heart3.visible=true
}

if(life==2){
   
     heart1.visible=false
     heart2.visible=true
     heart3.visible=false
     }

if(life==1){
    heart1.visible=true
    heart2.visible=false
    heart3.visible=false   
}



if(keyDown('UP'))
{
    shooter3.y-=2
}
if(keyDown('Down')){
    shooter3.y+=2
}
if(keyDown('Left')){
    shooter3.x-=2
}
if(keyDown('Right')){
    shooter3.x+=2
}
if(keyWentDown('space')){
    shooter3.addImage(shooter1img)
    }
if(keyWentUp('space')){
    shooter3.addImage(shooterimg)
   }

if(life>0){
enimy()
}

if(zombieGroup.isTouching(shooter3)){
    for(i=0;i<zombieGroup.length;i++){
if(zombieGroup[i].isTouching(shooter3)){
    zombieGroup[i].destroy()
    touchSound.play()
    life=life-1} }}
    
if(keyWentDown('space')){
    bullet=createSprite(shooter3.x+45,shooter3.y-25,7,5)
    bullet.velocityX=20
    bulletGroup.add(bullet)
    shootSound.play()
    }
    
if(zombieGroup.isTouching(bulletGroup)){
    for(i=0;i<zombieGroup.length;i++){
        if(zombieGroup[i].isTouching(bulletGroup)){
            zombieGroup[i].destroy()
            bulletGroup.destroyEach()
            bulletSound.play()
            score++ } }}

           
        }

        if(life==0){
            heart1.visible=false
           zombie.destroy()
           shooter3.destroy()
          gamestate="end"
        gameover.visible=true
        restart.visible=true

          }
  
 else  if(gamestate=="end"){
    
         shooter3.destroy()
         zombieGroup.setVelocityXEach(0)
         bulletGroup.setVelocityXEach(0)
         heart1.visible=false
         gameover.visible=true
       
        // textSize(100)
         //fill("red")
         //text("-:GAME OVER:-",windowWidth/2-330,windowHeight/2)}
          
             }}
             function reset(){
                gameover.visible=false
                restart.visible=false
                //gameSate=play();
                //gameStatet==="play"
                gameState="play"
            }
        
function enimy(){
    if(frameCount%50==0){
        zombie=createSprite(random(1000,1100),random(100,500),80,50)
        zombie.addImage(zombieimg)
        zombie.velocityX=-6
        zombie.scale=0.15
        zombie.lifetime=400
        zombieGroup.add(zombie)
        zombie.debug=false
        zombie.setCollider("rectangle",0,0,200,800)

        
 }
}




  
  


