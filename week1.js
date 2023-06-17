
function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	//rectMode(CENTER);
	
}

function draw() {
	background("#03045e");
	// utils.js에 있는 함수들
	drawGrid(20);  				// 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	
	// S모양
	push();
	fill("#0077B6");
	stroke(255);
	translate(220,230);
	rect(0, 0, 150, 70, 80);
	pop();
	
	push();
	fill("#0077B6");
	stroke(255);
	translate(220,430);
	rect(0, 0, 150, 70, 80);
	pop();
	
	push();
	fill("#90E0EF");
	noStroke();
	translate(280,270);
	rotate(-30);
	translate(-55,0);
	rect(0, 0, 40, 190, 20);
	pop();
	
	push();
	fill("#CAF0F8");
	noStroke();
	translate(370,290);
	ellipse(0, 0, 70, 70);
	pop();
	
	push();
	fill("#CAF0F8");
	noStroke();
	translate(220,430);
	ellipse(0, 0, 70, 70);
	pop();
	
	//e모양


	push();
	fill("#00B4D8");
	stroke("#CAF0F8");
	translate(490, 415);
	arc(0, 0, 170, 170, mouseY, 320);
	pop();
	
	//a모양
	
	
	
	push();
	fill("#CAF0F8");
	noStroke();
	translate(680, 415);
	arc(0, 0, 170, 170, 0, 360);
	pop();
	
	push();
	fill("#90E0EF");
	noStroke();
  translate(740, 425);
	triangle(30, 0, 
					 0, 80, 
					 60, 80);
	pop();
	
	push();
	fill("#0077B6");
	noStroke();
  translate(680, 415);
	ellipse(0, 0, 70, mouseY);
	pop();
	
	
	// push();
	// fill(255, 238, 242);
	// translate_guide(100, 400);
	// rect_guide(0, 0, 200, 100, 100, 100, 100, 100);
	// pop();
	
}