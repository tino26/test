// Creating variables
var myX = 0, myY = 0;
var vragX = 900, vragY = 300;
var isGameOver=false;
var lives=3;

function update() {
    if(isGameOver==false){
        vragX-=3;
        if(vragX<=0){
            vragX=900;
            vragY=Math.random()*550;
        }

        if(isKeyPressed[38]){
            myY-=3;
        }
        if(isKeyPressed[40]){
            myY+=3;
        }
    }
    
    if(areColliding(myX, myY, 30, 30, vragX, vragY, 50, 50)){
        lives--;
        vragX=900;
        vragY=Math.random()*550;
    }
    if(lives==0){
        isGameOver=true;
    }
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle="blue";
    context.fillRect(myX, myY, 30, 30);
    context.fillStyle="red";
    context.fillRect(vragX, vragY, 50, 50);
    if(isGameOver==true){
        context.fillStyle="black";
        context.fillRect(0, 0, 800, 600);
        context.fillStyle="white";
        context.font="50px Arial";
        context.fillText("GAME OVER", 220, 300);
    }
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
