var msg = "swipe";
var tool= '';
var capture;
var camon = false;
var binfo = false; 

function setup() {

  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
	capture.size(windowWidth, windowHeight);
	capture.hide();

  textAlign(CENTER);
  textSize(30);
  noStroke();

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);
    background(250, 10, 100);
 text(msg, width / 2, height / 2);
   button = createButton('camera');
  button.position(width/2-width/10, height/3);
  button.mousePressed(greet);
    input = createButton('info');
  input.position(width/2-width/10, height/3*2);
  input.mousePressed(info);
  back = createButton('logo');
  back.position(width/2-width/10, height/6);
  back.mousePressed(start);
}


function draw() {
  if (camon === true) {
      var myImage = capture.loadPixels();
	image(myImage, 0, 0, windowWidth, windowHeight);
	  text(tool,width/2-width/10, height-height/10 );
  }
}



function greet() {

  button.position(-1000,0);
  input.position(-1000,0);
  back.position(width/2-width/10, height/6);
  background(25);
  
  
   tab = createButton('table');
  tab.position(width/2-width/10, height/4);
  tab.mousePressed(cam1);
    bat = createButton('bathroom');
  bat.position(width/2-width/10, height/2);
  bat.mousePressed(cam1);
  mob = createButton('mobile');
  mob.position(width/2-width/10, height/4*3);
  mob.mousePressed(cam1);
  

}
function info() {

  button.position(-1000,0);
  input.position(-1000,0);
  back.position(width/2-width/10, height/6);
  background(255,0,0);
   text('description', width / 2, height / 2);
    
}




function start() {

   background(250, 10, 100);
 text(msg, width / 2, height / 2);


  button.position(width/2-width/10, height/3);
  choice

  input.position(width/2-width/10, height/3*2);


  back.position(width/2-width/10, height/6);
  camon = false;
  tab.position(-1000,0);
  bat.position(-1000,0);
  mob.position(-1000,0);
  choice.position(-1000,0);
  
}


function cam1() {
  tab.position(-1000,0);
  bat.position(-1000,0);
  mob.position(-1000,0);
  camon = true;
  
   choice = createButton('cleaning tools');
  choice.position(width-width/8, height-height/10 );
  choice.mousePressed(choices);

}







function swiped(event) {
  console.log(event);
  if ((event.direction == 4) && (camon === true)) {
    msg = "you swiped right";
    camon = false;
    background(0,255,0);
     text('description', width / 2, height / 2);
     binfo = true;
     choice.position(-1000,0);
  } else if ((event.direction == 8) && (camon === true)) {
    msg = "you swiped up";
     camon = false;
     background(25,200);
 
  
  
    
  } else if (event.direction == 16) {
    msg = "you swiped down";
  } else if ((event.direction == 2) && (binfo === true)) {
    msg = "you swiped left";
    binfo = false;
    cam1();
   
  }
}
 function choices() {
   choice.position(-1000,0);
   soap = createButton('Soap and water');
  soap.position(width/2-width/8,height/3 );
  soap.mousePressed(soap1);
  soda = createButton('Soda and vinegar');
  soda.position(width/2-width/8,height/2 );
  soda.mousePressed(soda1);
  vinegar = createButton('alkohol and rag');
  vinegar.position(width/2-width/8,height/1.5);
  vinegar.mousePressed(vinegar1);
 }
 
 function soap1() {
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
     tool = 'soap';
   cam1();
 }
  function soda1() {
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
      tool = 'Soda';
   cam1();
 }
   function vinegar1() {
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
      tool = 'alkohol';
   cam1();
 }