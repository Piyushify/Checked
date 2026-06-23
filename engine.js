//variables
let pieceName = null;
let pieceColor = null;
let piece = null;
let cell = null;
let cellRow = null;
let turn = 1;
let turnColor = "white";
let cordBar = document.getElementById("cord-bar");

//the fig object
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
      pieceColor = piece.classList[1];
      pieceName = piece.classList[2];
      cordBar.textContent = ` ${turn}. ${figs[pieceColor][pieceName]}${cellColumn}${cellRow} `;
    } else {
      cordBar.textContent = ` ${turn}. ${cellColumn}${cellRow} `;
    }
    
});