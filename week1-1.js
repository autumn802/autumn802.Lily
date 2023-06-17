function setup() {
  //createCanvas(400, 400);
	createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  //rectMode(CENTER);
}

function draw() {
  background(0);
  drawGrid(20);         // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	noStroke();
	// myRectA();
	// myRectE();
	
	//push();
	//translate(50, 200);
	// myArcB();
	//myCircleB();
	//pop();

		
	push();
	translate(50, 100);
  myLetterS()
	pop();
	
	push();
	translate(80, 100);
  myLetterE()
	pop();
	
	push();
	translate(110, 100);
  myLetterA()
	pop();
	
	
	
	
}

