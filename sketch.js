
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
var germin;
var w = 0,
    h = 0;
var raster, param, pmat, resultMat, detector;

var pg, sw
var wpg = 0
var hpg = 0

var swarm

var angle = 0

function preload() {
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

  raster = new NyARRgbRaster_Canvas2D(canvas);
  param = new FLARParam(canvas.width, canvas.height);
  pmat = mat4.identity();
  param.copyCameraMatrix(pmat, 100, 10000);
  resultMat = new NyARTransMatResult();
  detector = new FLARMultiIdMarkerDetector(param, 2);
  detector.setContinueMode(true);


  wsg =  w
  hsg = h
  sw = createGraphics(wsg,hsg, P2D)
  // sw.translate(wsg/4,hsg/4, 0)
  sw.noStroke()

  swarm = new Swarm()
  swarm.populate()
  frameRate(10)

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page

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

  /**webgl snippet at the bottom**/

  push()
  swarm.show(0,0, 0.5, 1, true)
  // image(sw)
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

  tool="";

  button.position(width*.35, height/3);
  

  input.position(width*.35, height/3*2);


  back.position(0, height/10);
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
	  left.touchStarted(left1);
    left.class('left');
	 right = createButton('right');
	  right.touchStarted(right1);
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
  this.nGerms = 10
  this.germs = []
  this.dimType = [10, 15, 24, 20]

  this.populate = function() {
    var boundW = w*0.45
    var boundH = h*0.45
    var ntypeA = this.nGerms*0.45
    for (var i = 0; i < ntypeA; i++) {
      this.germs.push({"x":random(-boundW, boundW), "y":random(-boundH, boundH), "types":"a", "speed":5})
    }
    var ntypeB = this.nGerms*0.15
    for (var i = 0; i < ntypeB; i++) {
      this.germs.push({"x":random(-boundW, boundW), "y":random(-boundH, boundH), "types":"b", "speed":5})
    }
    var ntypeC = this.nGerms*0.02
    for (var i = 0; i < ntypeC; i++) {
      this.germs.push({"x":random(-boundW, boundW), "y":random(-boundH, boundH), "types":"c", "speed":5})
    }
    var ntypeD = this.nGerms*0.38
    for (var i = 0; i < ntypeD; i++) {
      this.germs.push({"x":random(-boundW, boundW), "y":random(-boundH, boundH), "types":"d", "speed":5})
    }
 }
 this.germsMove = function(germ) {
   germ.x += random(-germ.speed, germ.speed)
   constrain(germ.x, -w/2, w/2)
   germ.y += random(-germ.speed, germ.speed)
   constrain(germ.y, -h/2, h/2)
 }

  this.show = function(ox, oy, tilt, siz, move) {
    sw.image(capture)
    for(var germ of this.germs) {
      if(move){
        this.germsMove(germ)
      }

      var dim = 5
      var col = ''
      switch (germ.types) {
        case "a":
          dim = this.dimType[0]
          col = 'black'
        break;
        /****/
        case "b":
          dim = this.dimType[1]
          col = 'blue'
        break;
        /****/
        case "c":
          dim = this.dimType[2]
          col = 'green'
        break;
        /****/
        case "d":
          dim = this.dimType[3]
          col = 'yellowGreen'
        break;
        default:
      }
      push()
      sw.scale(1, 1)
      console.log(tilt);
      dim *= siz
      sw.fill(col)
      sw.ellipse(ox + germ.x, oy+germ.y,dim, dim*tilt)
      pop()
    }
    move = false
  }
}


function myDetector() {
  canvas.changed = true;
  var thresholdAmount = 128; //select('#thresholdAmount').value() * 255 / 100;
  detected = detector.detectMarkerLite(raster, thresholdAmount);
  for (var i = 0; i < detected; i++) {
    // console.log("detected ", i);

      // read data from the marker
      // var id = detector.getIdMarkerData(i);

      // get the transformation for this marker
      detector.getTransformMatrix(i, resultMat);
      // detector.getTransformMatrix(0, resultMat);

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
        //vec4.create(0, 0, -2*q, 1) // poke up
      ];

      // convert that set of vertices from object space to screen space
      var w2 = width / 2,
          h2 = height / 2;
      verts.forEach(function (v) {
          mat4.multiplyVec4(cm, v);
          v[0] = v[0] * w2 / v[3] + w2;
          v[1] = -v[1] * h2 / v[3] + h2;
      });

      noStroke();
      fill(0, millis() % 255);
      beginShape();
      verts.forEach(function (v) {
          vertex(v[0], v[1]);
      });
      endShape();


      oX  = verts[0][0]
      oY = verts[0][1]
      // console.log(verts[0][0]-verts[1][0]);
      var siz = map(abs(verts[0][0]-verts[1][0]), 20, 100, 0.1, 2)
      var tilt = map(abs(verts[1][1]-verts[2][1]), 20, 100, 0.3,1)
      swarm.show(oX, oY, tilt, siz, true)
      image(sw)

      push()
      // fill('orange')
      // rect(oX,oY, siz,siz)
      pop()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

  //Update layout variable to adapt the size of the elements
  unit = windowWidth / 100
  space = unit * 3
}

//to paste in draw
// push()
//   translate(0,0,-100)
//   pg.image(capture)
//   texture(pg)
//   plane(w,h)
// pop()

// push()
// rotateX(PI/1.2)  //1.7
// swarm.show()
// var l = 200
// texture(sw)
// plane(l,l)
// pop()
