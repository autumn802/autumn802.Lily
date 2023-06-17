// 전역 변수: 색상 hex문자열 리스트 Array

let coolers = ["#76c893", "#2d6a4f", "#40916c", "#52b788", "#95d5b2"]
let colorIndex = 0;



// 그 외 전역 변수들

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  // rectMode(CENTER);
}

// p5js에서 제공하는 마우스 관련 함수들
function mouseDragged() {
	
}
function mouseClicked() {
	colorIndex = colorIndex + 1;
	colorIndex = colorIndex % 5;
	
	//console.log(colorIndex);
}


function draw() {
  background("#5fa8d3");
  drawGrid(20);         // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	
  translate(windowWidth/4,0);
	push()
	translate(200, 300);
  rotate(180);
	myLeaf();
	pop();
	
	push()
  translate(380, 350);
	myLeaf();
	pop();
	
	push()
	translate(700, 500);
  rotate(80);
	myLeaf();
	pop();
	
	push()
	translate(300, 600);
	rotate(-20);
	myLeaf();
	pop();
	
	push()	
	translate(540, 200);
	rotate(100);
	myLeaf();
	pop();

	
	push();
	translate(650, 700);
	myLeaf();
	pop();
	
	
	// 꽃
	
	
	push();
	translate(300, 200);
	myLily();
  pop();

	push();
	translate(450, 440);
	myLily();
  pop();
	
	push();
	translate(700, 400);
	myLily();
  pop();
	
	push();
	translate(400, 650);
	myLily();
  pop();
	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}