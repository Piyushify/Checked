//variables
let pieceName = null;
let pieceColor = null;
let piece = null;
let cell = null;
let cellRow = null;
let turn = 1;
let cordBar = document.getElementById("cord-bar");

let figs = {
  "black" : {
    "king" : "♔" ,
    "queen" : "♕" ,
    "rook" : "♖" ,
    "bishop" : "♗" ,
    "knight" : "♘" ,
    "pawn" : "♙" 
  },
  "white" : {
  "king" : "♚" ,
  "queen" : "♛" ,
  "rook" : "♜" ,
  "bishop" : "♝" ,
  "knight" : "♞" ,
  "pawn" : "♟"
  }
}

board.addEventListener("click", (event) => {
    piece = event.target.closest(".piece");
    cell = event.target.closest(".cell");
    cellRow = cell.classList[1].slice(1);
    cellColumn= cell.classList[2].slice(1);
    if (piece) {
      pieceName = piece.classList[1];
      pieceColor = piece.classList[2];
      cordBar.textContent = ` ${turn}. ${figs[pieceColor][pieceName]}${cellColumn}${cellRow} `;
      turn++;
    } else {
      cordBar.textContent = ` ${turn}. ${cellColumn}${cellRow}`;
      turn++;
    }
    
});