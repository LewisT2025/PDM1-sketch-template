const GRID_SIZE = 20;
let headX;
let headY;
let foodX;
let foodY;
let numberOfCells;
let randomCellFloor;
let randomCell
let xDir
let yDir

function setup(){
createCanvas(600, 600);
numberOfCells = width / GRID_SIZE;
randomCell = random(numberOfCells);
randomCellFloor = floor(randomCell);
frameRate(3)
headX = GRID_SIZE
headY = GRID_SIZE
foodX = randomCellFloor * GRID_SIZE + GRID_SIZE/2;
foodY = randomCellFloor * GRID_SIZE + GRID_SIZE/2;
}

function draw(){
    background(150, 200, 255);
    fill(0, 255, 0)
    square(headX, headY, 20);
    fill(255, 0, 0)
    circle(foodX, foodY, 20);
    headX = headX + GRID_SIZE;
    
    if (headX >= 600) {
        headX = 580;
    }
    if (headX <= 0){
        headX = 20;
    }
    if (headY >= 600){
        headY = 580
    }
    if (headY <= 600){
        headY = 20
    }
}

function keyPressed() {
    if( keyCode === UP_ARROW){
        headY += GRID_SIZE * 1
}
    if(keyCode === DOWN_ARROW){
        headY += GRID_SIZE * -1
    }
    if(keyCode === RIGHT_ARROW){
        headX += GRID_SIZE * 1
}
    if(keyCode === LEFT_ARROW){
        headX += GRID_SIZE * -1
    }
}