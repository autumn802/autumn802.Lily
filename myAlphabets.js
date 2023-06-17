/** 
여기 있는 arc_guide(), ellipse_guide(), rect_guide() 함수는 
utils.js에서 정의한 함수를 사용하는 것이다.
내가 직접 만든 알파벳 도형 함수들을 여기에 다 정리해보자.
*/


function myLily() {
push();
	let opacity1 =map(mouseX, 0, width, 0, 200);
	fill(255, 184, 196, opacity1);
	stroke("#fb6f92")
	//translate(100, 200);
	ellipse(0, 0, 50, 130);
	pop();
	
  push();
	let rot1 =map(mouseX, 0, width, 0, 60);
	fill(255, 184, 196, opacity1);
	stroke("#fb6f92")
	rotate(rot1);
	ellipse(0, 0, 50, 130);
	pop();
	
	 push();
	fill(255, 184, 196, opacity1);
	stroke("#fb6f92")
	//translate(0, 20);
	rotate(-rot1);
	ellipse(0, 0, 50, 130);
	pop();
	
	push();
	let opacity4 =map(mouseX, 0, width, 0, 200);
	fill(255, 227, 92, opacity4);
	stroke("#ffc971")
	ellipse(0, 0, 10, 30);
	pop();
	
	push();
	fill(255, 227, 92, opacity4);
	stroke("#ffc971")
	rotate(-rot1);
	ellipse(0, 0, 10, 30);
	pop();
	
	push();
	fill(255, 227, 92, opacity4);
	stroke("#ffc971")
	rotate(rot1);
	ellipse(0, 0, 10, 30);
	pop();
}

function myLeaf() {
  push()
	let rot2=map(mouseX, 0, width, 0, 300);
	fill(coolers[colorIndex]);
	noStroke();
  rotate(10);
	arc(0, 0, 150, 150, 0, rot2);
	pop();
	
}

