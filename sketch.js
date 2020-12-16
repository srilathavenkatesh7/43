var hr;
var me;
var sd;

function setup() {
  createCanvas(800,800);
  angleMode (DEGREES) ;
}

function draw() {
  background(0);
  translate (400,400);
  rotate(-90);
   hr=hour();
  me=minute();
  sd=second();
  hangle=map (hr%12,0,12,0,360);
  secangle=map (sd,0,60,0,360);
  minangle=map(me,0,60,0,360);
  push ();
rotate (secangle);
stroke ("red");
strokeWeight (7);
line (0,0,100,0);
pop ();
push ();
rotate(minangle);
stroke ("yellow");
strokeWeight (7);
line (0,0,75,0);
pop ();
push ();
rotate (hangle);
stroke ("green");
strokeWeight (7);
line (0,0,50,0);
pop ();
strokeWeight (12);
stroke (255,0,255);
point (0,0);
stroke ("red");
noFill();
arc (0,0,300,300,0,secangle);
stroke ("yellow");
arc (0,0,280,280,0,minangle);
stroke ("green");
arc (0,0,260,260,0,hangle);
  drawSprites();
}