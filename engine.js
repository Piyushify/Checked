//variables
let pieceName = null;
let pieceColor = null;
let piece = null;
let cell = null;
let cellRow = null;
let cordBar = document.getElementById("cord-bar");

let figs = {
  "white" : {
    "king" : "♔" ,
    "queen" : "♕" ,
    "rook" : "♖" ,
    "bishop" : "♗" ,
    "knight" : "♘" ,
    "pawn" : "♙" 
  },
  "black" : {
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
      console.log(pieceName,pieceColor)
      console.log(`${cellColumn}${cellRow}`); 
    } else {
      console.log(cell.classList);
    }
    
});

cordBar.textContent = "1" + ". " + figs["white"]["knight"] + "c" + "3";