// GERMOSCOPE
// The mobile phone is your lens to the microworld
var tool= '';
var capture;
var camon = false;
var binfo = false; 
var bg;
var load;
var aboutus;
var alctxt;
var ammotxt;
var sodatxt;
var bac =[];
var index = 0;
var lala;
var logo;
var soaptxt;

var imgA, imgB, imgC, imgD;

var germin;
var w = 0,
    h = 0;
var raster, param, pmat, resultMat, detector;

var pg, sw, swimage
var wpg = 0
var hpg = 0

var oX,oY
var swarm

var angle = 0

function preload() {
imgA = loadImage("assets/spritea.png");
  imgB = loadImage("assets/spritef.png");
  imgC = loadImage("assets/spriteb.png");
  imgD = loadImage("assets/spritep.png");
	
	logo = loadImage('assets/top.png');
  	bg = loadImage('assets/bg.png');
	aboutus = loadImage('assets/aboutus.png');
	alctxt =loadImage("assets/alcico.png");
	ammotxt =loadImage("assets/ammoico.png");
	sodatxt =loadImage("assets/sodaico.png");
	soaptxt =loadImage("assets/soapico.png");
	germin =loadImage("assets/germinfo.png");
    bac[0] = loadImage("assets/bac0.png");
    bac[1] = loadImage("assets/bac1.png");
    bac[2] = loadImage("assets/bac2.png");
    bac[3] = loadImage("assets/bac3.png");
	bac[4] = loadImage("assets/bac4.png");
}
function setup() {

    pixelDensity(1); // this makes the internal p5 canvas smaller
  w = windowWidth
  h = windowHeight
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  // Augmented reality stuff
  raster = new NyARRgbRaster_Canvas2D(canvas);
  param = new FLARParam(canvas.width, canvas.height);
  pmat = mat4.identity();
  param.copyCameraMatrix(pmat, 100, 10000);
  resultMat = new NyARTransMatResult();
  detector = new FLARMultiIdMarkerDetector(param, 2);
  detector.setContinueMode(true);


  //New layer to draw and move the germs on top of the video capture
  sw = createGraphics(w, h, P2D)
  sw.noStroke()

  //Object which contains and manage the germs and the cleaning
  swarm = new Swarm()
  //Instatiate each germ according to his type
  swarm.populate()
  frameRate(20);
  
  var options = {
    preventDefault: true
  };



   image(bg,0,0,windowWidth, windowHeight);
	image(logo,width*.35, height/50, width*.3, height/5);
   button = createButton('camera');
  button.position(width*.35, height/2.2);
  button.mousePressed(cam1);
  button.class('scan');
    input = createButton('info');
  input.position(width*.35, height* .72);
  input.mousePressed(info);
  input.class('about');
  back = createButton('logo');
  back.position(0, height/3.50);
  back.mousePressed(start);
  back.class('logo');
	
}


function draw() {
  if (camon === true) {
      image(capture,0,0,windowWidth,windowHeight)

  myDetector()



  push()
  swarm.show(0,0, 0.5, 1, true)
  pop()

  angle += 0.01;
  
  
  	  var image1;
			switch(tool)
		{
		  case "": 
		    tool= "";
		    break;
		
			case "ammo":image1=ammotxt;
			image(image1,mouseX, mouseY,width/8,height/6);
				break;

			case "soda":image1=sodatxt;
			image(image1,mouseX, mouseY,width/8,height/6);
			break;
			case "soap":image1=soaptxt;
			image(image1,mouseX, mouseY,width/8,height/12);
			break;
				case "alkohol":
			 image1=alctxt;
			 	image(image1,mouseX, mouseY,width/12,height/5);
					break;
			default: tool= "";
			
		}
		

		}
  
}




function info() {
image(bg,0,0,windowWidth, windowHeight);
  button.position(-10000,0);
  input.position(-10000,0);
 back.position(0, height/15);
  	
  image(aboutus, width*0.1,height/4, width*.8, height*.7);
    
}




function start() {

image(bg,0,0,windowWidth, windowHeight);
image(logo,width*.35, height/50, width*.3, height/5);
  tool="";

  button.position(width*.35, height/2.2);

  input.position(width*.35, height* .72)


   back.position(0, height/3.50);
  camon = false;
  


    germb.position(-10000,0);
  choice.position(-10000,0);
       ammo.position(-width/3*2,height/3 );
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
}


function cam1() {
	 left = createButton('left');
	  left.touchEnded(left1);
    left.class('left');
	 right = createButton('right');
	  right.touchEnded(right1);
    right.class('right');
	backttocam = createButton('backtocam');
  backttocam.position(-10000,0);
	 backttocam.mousePressed(backtocam1);
	backttocam.class('backtocam');
	left.position(-10000,0);
	right.position(-10000,0);
button.position(-width, height/80);
input.position(-width*3, height/80);
back.position(0, height/80);
  camon = true;
	
    germb = createButton('germ info');
      germb.position(0, height-height*.15 );
  germb.mousePressed(germinfo);
    germb.class('germbutton');
   choice = createButton('cleaning tools');
  choice.position(width-width*.3, height-height*.15 );
  choice.mousePressed(choices);
    choice.class('tools');
     
}

function germinfo() {
	counterimg = 1;
  back.position(-5000,0);
 
    tool="";
  
  camon = false;
  choice.position(-width-width/6, height-height/5 );
  germb.position(-10000, height-height/5 );
  image(bg,0,0,windowWidth, windowHeight);
  image(germin,0,height/8,windowWidth,height/8);
   
  image(bac[index], width/8,height/3, width*6/8, height* .60 );
  
 
  
     
      left.position(width/50, height*.6);

  
  right.position(width-width/8, height*.6);

	
      backttocam.position(width/50,height/80);
 
	
}
function backtocam1() {
 	backttocam.position(-10000,0);
	left.position(-10000,0);
	right.position(-10000,0);
	
	
	cam1();
}
function right1() {
   index = index + 1;
  if (index>4) {
	  index = 0;
  }
	germinfo();
}
function left1() {
    index = index - 1;
	if (index<0) {
	  index = 4;
  }
	germinfo();
}




 function choices() {
   choice.position(-10000,0);
	  germb.position(-10000, height-height/5 );
   soap = createButton('Soap and water');
  soap.position(width/3-width/10,height/3 );
  soap.mousePressed(soap1);
    soap.class('soap');
    ammo = createButton('ammonia');
  ammo.position(width/3*2-width/10,height/3 );
  ammo.mousePressed(ammo1);
    ammo.class('ammo');
  soda = createButton('Soda and vinegar');
  soda.position(width/3-width/10,height/1.5 );
  soda.mousePressed(soda1);
    soda.class('vinegar');
  vinegar = createButton('alkohol and rag');
  vinegar.position(width/3*2-width/10,height/1.5);
  vinegar.mousePressed(vinegar1);
    vinegar.class('alc');
 }
 
  function ammo1() {
      ammo.position(-width/3*2,height/3 );
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
     tool = 'ammo';
   cam1();
 }
 
 function soap1() {
         ammo.position(-width/3*2,height/3 );
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
     tool = 'soap';
   cam1();
 }
  function soda1() {
          ammo.position(-width/3*2,height/3 );
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
      tool = 'soda';
   cam1();
 }
   function vinegar1() {
           ammo.position(-width/3*2,height/3 );
     soap.position(-width/2-width/8,height/3 );
     soda.position(-width/2-width/8,height/5 );
     vinegar.position(-width/2-width/8,height/1.5);
      tool = 'alkohol';
   cam1();
 }

function Swarm() {
  this.nGerms = 100 //Total number of germs
  this.germs = [] //Iterable collection of germs objects
  this.dimUnit = windowHeight/30 //responsive germ dimension
  //Different dimension for different types
  this.dimType = [this.dimUnit*0.8, this.dimUnit*1.5, this.dimUnit*2, this.dimUnit*1.2]
  //Germs respawn when killed becuase they replicate, and we can re-use the same objects
  this.respTime = 100
  //Random spawning inside the screen
  this.boundW = windowWidth*0.45
  this.boundH = windowHeight*0.45

  this.populate = function() {
    //Based on real data we calculate the distribution
    //of the four main families, instatiate the objects and add them to germs[]
    //Each Germ has a random position, a type, a random speed, a live/dead boolean statem and a lifetime counter

    //Actino
    //45% average presence in indoor spaces
    var ntypeA = this.nGerms*0.45
    for (var i = 0; i < ntypeA; i++) {
      this.germs.push({"x":random(-this.boundW, this.boundW), "y":random(-this.boundH, this.boundH), "types":"a", "speed":2, "dead":false, "respawn":this.respTime})
    }
    //Firmic
    //15% average presence in indoor spaces
    var ntypeB = this.nGerms*0.15
    for (var i = 0; i < ntypeB; i++) {
      this.germs.push({"x":random(-this.boundW, this.boundW), "y":random(-this.boundH, this.boundH), "types":"b", "speed":3, "dead":false, "respawn":this.respTime})
    }
    //Bacter
    //2% average presence in indoor spaces
    var ntypeC = this.nGerms*0.05
    for (var i = 0; i < ntypeC; i++) {
      this.germs.push({"x":random(-this.boundW, this.boundW), "y":random(-this.boundH, this.boundH), "types":"c", "speed":1, "dead":false, "respawn":this.respTime})
    }
    //Proteo
    //38% average presence in indoor spaces
    var ntypeD = this.nGerms*0.38
      this.germs.push({"x":random(-this.boundW, this.boundW), "y":random(-this.boundH, this.boundH), "types":"d", "speed":2, "dead":false, "respawn":this.respTime})
      for (var i = 0; i < ntypeD; i++) {
    }
  }

  this.germsMove = function(germ, k) {
    //Moving germs by adding their speed
    //K is for shifting them while cleaning with soap (k=50)
    //OR regular motion one step at a time (k=1)
    if (!germ.dead) {
      germ.x += random(-germ.speed, germ.speed)*k
      constrain(germ.x, -w/2, w/2)
      germ.y += random(-germ.speed, germ.speed)*k
      constrain(germ.y, -h/2, h/2)
    }
  }

  this.germKilled = function(germ,dim) {
    //Check if it has been killed by cleaning in the current frame
    // if already dead and it is time to return
    if(germ.respawn==0){
      germ.dead = false
      germ.respawn = this.respTime
    }
    //Check if mouse is hover the germ
    var killing = dist(mouseX, mouseY, oX+germ.x, oY+germ.y)
    if (killing<dim) {
      if (tool=="soap") {
        //Soap doesn't kill anybody just help wiping them around
        this.germsMove(germ, 50)
      }
      if (tool=="ammo") {
        //Ammonia kills just certain types of germs, the Proteo, one of the most common
        console.log(germ.types);
        if(germ.types=="d"){
          germ.dead = true
        }
      }
      if(tool == "soda") {
        if(germ.types=="d"){
          //Vinegar&Soda kills the Proteo, likewise Ammonia,
          //but it is less effective, after testing we choose a 1:2 probability
          console.log(germ.types);
          if (random(0,1)>0.5) {
            germ.dead = true
          }
        }
      }
      if(tool == "alkohol") {
        //Alcohol is supereffective
          germ.dead = true
      }
    }
    // germ.dead = true
  }

  this.show = function(oX, oy, tilt, siz, move) {
    //Print the capture as a background on the offscreen buffer
    sw.image(capture)
    // for every germ in the collection
    for(var germ of this.germs) {
      //Move them if it is alive
      if(move&&(!germ.dead)){
        this.germsMove(germ, 1)
      }

      // Choose picture and dimension according to type
      var picture
      switch (germ.types) {
        case "a":
        dim = this.dimType[0]
        picture = imgA
        break;
        /****/
        case "b":
        dim = this.dimType[1]
        picture = imgB
        break;
        /****/
        case "c":
        dim = this.dimType[2]
        picture = imgC
        break;
        /****/
        case "d":
        dim = this.dimType[3]
        picture = imgD
        break;
        default:
      }

      // Check if it has been just been killed
      this.germKilled(germ, dim)

      if (!germ.dead) {
        sw.push()
          //Translate on the marker position
          sw.translate(oX + germ.x, oy+germ.y)
          //Add a random orientation
          var rotF = PI/12
          sw.rotate(random(-rotF, rotF))
          //Add the tilting effects with factor from myDetector
          sw.scale(siz, siz*tilt)
          sw.tint(255, 255)
          sw.image(picture, 0, 0, dim, dim)
        sw.pop()
      } else {
        //transparent and still if it is dead,
        //detergent don't remove germs but melt their membranes
        sw.push()
          sw.translate(oX + germ.x, oy+germ.y)
          sw.scale(siz, siz*tilt)
          sw.tint(255,50)
          sw.image(picture, 0, 0, dim, dim)
        sw.pop()
        germ.respawn--
      }
    }
    move = false
  }
}


function myDetector() {
  canvas.changed = true;
  var thresholdAmount = 128;
  detected = detector.detectMarkerLite(raster, thresholdAmount);
  for (var i = 0; i < detected; i++) {
    // get the transformation for this marker
    detector.getTransformMatrix(i, resultMat);

    // convert the transformation to account for our camera
    var mat = resultMat;
    var cm = mat4.create();
    cm[0] = mat.m00, cm[1] = -mat.m10, cm[2] = mat.m20, cm[3] = 0;
    cm[4] = mat.m01, cm[5] = -mat.m11, cm[6] = mat.m21, cm[7] = 0;
    cm[8] = -mat.m02, cm[9] = mat.m12, cm[10] = -mat.m22, cm[11] = 0;
    cm[12] = mat.m03, cm[13] = -mat.m13, cm[14] = mat.m23, cm[15] = 1;
    mat4.multiply(pmat, cm, cm);

    // define a set of 3d vertices
    var q = 1;
    var verts = [
      vec4.create(-q, -q, 0, 1),
      vec4.create(q, -q, 0, 1),
      vec4.create(q, q, 0, 1),
      vec4.create(-q, q, 0, 1),
    ];

    // convert that set of vertices from object space to screen space
    var w2 = width / 2,
    h2 = height / 2;
    verts.forEach(function (v) {
      mat4.multiplyVec4(cm, v);
      v[0] = v[0] * w2 / v[3] + w2;
      v[1] = -v[1] * h2 / v[3] + h2;
    });

    // Marker position for ebugging
    noStroke();
    fill(0, millis() % 255);
    beginShape();
    verts.forEach(function (v) {
      vertex(v[0], v[1]);
    });
    endShape();

    //First vertex X and Y for positioning
    oX  = verts[0][0]
    oY = verts[0][1]

    //A scale factor proportional to the area for the tilting
    var siz = map(abs(verts[0][0]-verts[1][0]), 20, 100, 0.1, 2)
    var tilt = map(abs(verts[1][1]-verts[2][1]), 20, 100, 0.3,1)

    //Show the germs when the marker is detected, and enable cleaning
    swarm.show(oX, oY, tilt, siz, true)
    //Show the offscreen buffer with germs and interaction
    image(sw, 0,0,w,h*2.15);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

  //Update layout variable to adapt the size of the elements
  unit = windowWidth / 100
  w = windowWidth
  h = windowHeight
  space = unit * 3
}
