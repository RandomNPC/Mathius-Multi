var canvasMain = document.getElementById('main');
var ctxMain = canvasMain.getContext('2d');

var gameWidth = canvasMain.width;
var gameHeight = canvasMain.height;

var selectSound = new Audio('snds/Blip_Select.wav');
var explosionSound = new Audio('snds/Explosion6.wav');
var hurtSound = new Audio('snds/Hit_Hurt.wav');
var pupSound = new Audio('snds/Powerup8.wav');
var shootSound = new Audio('snds/Laser_Shoot2.wav');


var goback = new Button(32,188,111,213); //mystery buttons note: remember to change coordinates when we import images
//var mystery = new Button(280,529,96,198);
var btnPlay = new Button(100,700,200,250); //Start
var highScoresBtn =  new Button(100,700,260,310);//High Score
var controlsBtn = new Button(100,700,320,370); //control
var creditsBtn = new Button(100,700,380,430);//credits

// Switch statements 
var MAIN_MENU = 1; 
var START_GAME = 2; //START GAME
var CONTROLS = 3;
var HIGHSCORE = 4;
var CREDITS = 5;
var GAME_OVER = 6;
var ENTER_HIGHSCORE = 7;

var highScoreName = "";

//
var state = MAIN_MENU;

//Mouse coordinates
var mouseX = 0;
var mouseY = 0;

// Image sources
var menu = new Image();
menu.src = '';
/*
var choose = new Image();
choose.src = 'images/mystery.png';
var startImg = new Image ();
startImg.src = '';
var creditsImg = new Image();
creditsImg.src = 'images/credits.jpg';
var controlsImg = new Image();
controlsImg.src = '';
var gameOverImg = new Image();
gameOverImg.src = '';
var enterNameImg = new Image();
enterNameImg.src = '';
*/

menu.addEventListener('load',init,false); //when image finishes loading, goto init function.

//main
function init(){
	drawMenu();
	document.addEventListener('click',mouseClicked,false);//bind click to function mouseclick
}

//menu
function drawMenu(){
	ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight); //draw the entire image menu
	ctxMain.drawImage(choose,0,0,gameWidth,GameHeight,0,0,gameWidth,gameHeight);
}

//Button
function Button(xL,xR,yT,yB){
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBottom = yB;
}
Button.prototype.checkClicked = function() { //checks to see if you have clicked within the area
    if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBottom) {selectSound.play; return true;}
};

//event
function mouseClicked(e) { //event listener binded from line 19
    mouseX = e.pageX - canvasMain.offsetLeft;
    mouseY = e.pageY - canvasMain.offsetTop;
    
	switch(state){
		case MAIN_MENU:
			if (btnPlay.checkClicked()){
				console.log("Play Button");
				ctxMain.drawImage(choose,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = START_GAME;
			}
			if(highScoresBtn.checkClicked()){
				console.log("HighScore Clicked");
				//Draw goes here
				state = HIGHSCORE;
			}
			if(controlsBtn.checkClicked()){
				console.log("controls clicked");
				//draw goes here
				state = CONTROLS;
			}
			if (creditsBtn.checkClicked()){
				console.log("Credits clicked");
				ctxMain.drawImage(creditsImg,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				console.log("it Drew!");
				state = CREDITS;
				console.log("it changed state");
			}
			break;
		case CONTROLS: // 3
			if(goback.CheckClicked()){
				ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MAIN_MENU;
			}
			break;
		case START_GAME: // Going back to the main menu (2) 
			//if highscore draw ENTER HIGHSCORE and change state to enter high score.
			// else draw GAME_OVER screen or change state to game over.
			if(goback.checkClicked()){
				ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MAIN_MENU;
			}
			break;
		case HIGHSCORE: // 4
			if (goback.checkClicked()){
				ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MAIN_MENU;
			}
			break;
		case CREDITS: // 5
			if(goback.checkClicked()){
				ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MAIN_MENU;
			}			
			break;
		case GAME_OVER: // 6 Losing
			if(goback.checkClicked()){
				ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
				state = MAIN_MENU;
			}
			break;
		case ENTER_HIGHSCORE: //Game over but input high score
			window.prompt("Enter Your Name",highScoreName);
			ctxMain.drawImage(menu,0,0,gameWidth,gameHeight,0,0,gameWidth,gameHeight);
			state = MAIN_MENU;
			break;
		//case 
		default:
			break;
	}
}