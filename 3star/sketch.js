

let board;
let currentPlayer = "X";

function setup() {
    createCanvas(600,600);
    board = gridOfStrings(3, 3, "");

}
function draw (){
background(255);
let w = width / 3 ;
let h = height / 3 ;

for ( let i = 0; i < 3; i++ )
    for (let g = 0; g < 3; g++)
let x = g * w;
let y = i * h;

stroke(10);
fill(0,255);
rect(x, y, w, h);


let playerAtSpot = board[i][j];
 textSize(64);
 textAlign(CENTER, CENTER);
fill(0);
text(playerAtSpot, x + w / 2, y + h / 2);



}
function mousePressed() {
    let w = width / 3;
    let h = height / 3;
    
    let col = floor(mouseX / w);
    let row = floor(mouseY / h);
    if (col >= 0 && col < 3 && row >= 0 && row < 3) {
        if (board[row][col] === "") {
            board[row][col] = currentPlayer;
           
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    }
}