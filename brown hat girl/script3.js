//controller function
function controller(event){
  if(event.key=="Enter"){
      if(runWorker==0){
      run();
      runSound.play();
      updateScore();
      moveBackground();
      flameLocations.forEach(createFlames);
      cloudLocations.forEach(createClouds);
      }
  }

  if(event.key==" "){
     if(jumpWorker==0){
      if(runWorker!=0){
      clearInterval(runWorker);
      runSound.pause();
      jump();
      jumpSound.play();
      }
      
     }
  }
  if(event.key=="ArrowUp"){
    if(jumpWorker==0){
      if(runWorker!=0){
      clearInterval(runWorker);
      runSound.pause();
      jump();
      jumpSound.play();
    }
   }
 }
 if(event.key=="ArrowDown"){
  if(jumpWorker==0){
    if(runWorker!=0){
    clearInterval(runWorker);
    runSound.pause();
    slide();
    jumpSound.play();
  }
 }
}
}

//run function
var runImageNumber=1;
var runWorker=0;
var runSound = new Audio("run.mp3")
runSound.loop=true

function run(){
runWorker = setInterval( ()=>{
  runImageNumber = runImageNumber + 1 ;

   if(runImageNumber == 9){
       runImageNumber =1;
   }
   document.getElementById("girl").src="Run"+runImageNumber+".png"

},150);

}

// jump function
var jumpWorker=0;
var jumpImageNumber=1;
var jumpSound = new Audio("jump.mp3");
var jumpMarginTop = 695;

function jump(){
  jumpWorker = setInterval(()=>{
  jumpImageNumber = jumpImageNumber + 1;
  if (jumpImageNumber < 7) {
      jumpMarginTop =  jumpMarginTop - 20 ;
      document.getElementById("girl").style.marginTop = jumpMarginTop + "px";
  }
  if (jumpImageNumber > 6) {
     jumpMarginTop  =   jumpMarginTop + 20;
     document.getElementById("girl").style.marginTop =jumpMarginTop +"px" ;
  }

   if(jumpImageNumber == 11){
      jumpImageNumber = 1;
      clearInterval(jumpWorker);
      jumpWorker=0;
      run();
      runSound.play();
   }
   document.getElementById("girl").src="jump"+jumpImageNumber+".png";
   },150);
  

}

// slide function
var slideImageNumber = 1;
var slideWorker = 0;

function slide(){
 slideWorker = setInterval(()=>{
  slideImageNumber = slideImageNumber + 1;
   if(slideImageNumber == 5){
      slideImageNumber = 1;
      clearInterval(slideWorker);
      slideWorker=0;
      run();
      runSound.play();
   }
   document.getElementById("girl").src = "Slide"+slideImageNumber+".png"
   
 },150);
   
}

// score annimatiion

var scoreWorker = 0;
var score = 0;

function updateScore(){
  scoreWorker = setInterval(() => {
      if(score==1500){
        clearInterval(runWorker);
        runSound.pause();
        clearInterval(scoreWorker);
        clearInterval(backgroundWorkr);
        clearInterval(flameWorker);
        clearInterval(jumpWorker);
        jumpWorker=0;
        jumpSound.pause();
        createLosspage();
        deadSound.play();
        createLosspage(); 
    
        
        
        
        
      }
  score=score+10
      document.getElementById("score").innerHTML=score;
  }, 150);
}

// background animation

var backgroundWorkr=0;
var backgroundX=0;

function moveBackground(){
  backgroundWorkr=setInterval(() => {
      backgroundX=backgroundX-10;
      document.getElementById("bg").style.backgroundPositionX=backgroundX+"px";
  }, 50);
}
//Dead animation

var deadWorker=0;
var deadImageNumber=1;
var deadSound=new Audio("dead.mp3");

function dead(){
  deadWorker=setInterval(() => {
   deadImageNumber = deadImageNumber + 1;
   if(deadImageNumber == 11){
      deadImageNumber = 1;
      clearInterval(deadWorker); 
      createLosspage()
      alert("game over press ok to restart");
      window.location.reload();
   }
  document.getElementById("girl").src = "dead" + deadImageNumber + ".png" ;
  }, 150);
}

//create flame function
var flameLocations=[500,800,1500,2200,2700,3500,4300]
var flameWorker=0;

function createFlames(x){

 var flame =  document.createElement("img");
 flame.src ="flame.gif";
 flame.className="flame";
 flame.style.marginLeft = x+"px";
 document.getElementById("bg").appendChild(flame);

 flameWorker= setInterval(() => {
    if(x==150){
        if(jumpWorker==0){
            clearInterval(runWorker);
            runSound.pause();
            clearInterval(scoreWorker);
            clearInterval(backgroundWorkr);
            clearInterval(flameWorker);
            clearInterval(jumpWorker);
            jumpWorker=0;
            jumpSound.pause();
            dead();
            createLosspage();
            deadSound.play();
            
        }
    }
    x = x-10;
    flame.style.marginLeft = x+"px";
    
 },50);

}
//create cloud function
var cloudLocations=[1100,1800,2500,3100,3800,4100]
var cloudWorker=0;

function createClouds(x){

  var cloud =  document.createElement("img");
  cloud.src ="cloud.png";
  cloud.className="cloud";
  cloud.style.marginLeft = x+"px";
  document.getElementById("bg").appendChild(cloud);
 
  cloudWorker= setInterval(() => {
     if(x==150){
         if(slideWorker==0){
             clearInterval(runWorker);
             runSound.pause();
             clearInterval(scoreWorker);
             clearInterval(backgroundWorkr);
             clearInterval(flameWorker);
             clearInterval(slideWorker);
             slideWorker=0;
             clearInterval(jumpWorker);
             jumpWorker=0;
             jumpSound.pause();
             dead();
             createLosspage();
             deadSound.play();
             
         }
     }
     x = x-10;
     cloud.style.marginLeft = x+"px";
     
  },50);
 
 }

 // loss page function

 var losspageWorker=0;
 function createLosspage(){
      var losspage = document.createElement("div");
      losspage.className= "box1";
      document.getElementById("bg").appendChild(losspage);
 }

  


 