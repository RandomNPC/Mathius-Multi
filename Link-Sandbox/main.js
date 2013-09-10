var canvasMain = document.getElementById('main');
var ctxMain = canvasMain.getContext('2d');

var gameWidth = canvasMain.width;
var gameHeight = canvasMain.height;

var btnPlay = new Button(148,591,159,302); //define button to play

var goback = new Button(32,188,111,213); //mystery buttons
var mystery = new Button(280,529,96,198);

var MAIN_MENU = 1;
var MYSTERY = 2;
var state = MAIN_MENU;

var mouseX = 0;
var mouseY = 0;

var menu = new Image();
menu.src = 'images/menu.png';
var choose = new Image();
choose.src = 'images/mystery.png';

menu.addEventListener('load',init,false); //when image finishes loading, goto init function.

//main
function init(){
	drawMenu();
	document.addEventListener('click',mouseClicked,false);//bind click to function mouseclick
}

//menu
function drawMenu(){
	ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight); //draw the entire image menu
}

//Button
function Button(xL,xR,yT,yB){
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBottom = yB;
}

Button.prototype.checkClicked = function() { //checks to see if you have clicked within the area
    if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBottom) return true;
};

//event
function mouseClicked(e) { //event listener binded from line 19
    mouseX = e.pageX - canvasMain.offsetLeft;
    mouseY = e.pageY - canvasMain.offsetTop;
    
	switch(state){
		case MAIN_MENU:
			if (btnPlay.checkClicked()){
				ctxMain.drawImage(choose,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MYSTERY;
			}
			break;
		case MYSTERY:
			if(goback.checkClicked()){
				ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MAIN_MENU;
			}
			if(mystery.checkClicked()){
				alert('boo');
			}
			break;
		default:
			break;
	}
}