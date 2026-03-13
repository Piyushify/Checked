//testing
console.log('JS Connected');

//variables
const root = document.documentElement;
const board = document.querySelector(".board");
let buffer = document.createElement("div");
let selectedPiece = null;

//create function
//creates the cells
function create() {
  
  //loops from 0 to 63 for 64 cells
  //cause index begins at 0
  for (let i = 0; i < 64; i++) 
  {
    //creates a div
    const cell = document.createElement("div");
    
    //adds classes
    cell.classList.add("cell");
    
    //appends the div into the board
    board.appendChild(cell);
  }
}

//function call for create()
create();

//once the DOM is fully loaded it injects the pieces
window.addEventListener("DOMContentLoaded", () => {
  
  //calls the inject function and sends their path, class and position as parameters.
  
  //rook
  inject("pieces/rook.svg","rook",[0, 7, 56, 63]);
  
  //knight
  inject("pieces/knight.svg","knight",[1, 6, 57, 62]);
  
  //bishop
  inject("pieces/bishop.svg","bishop",[2, 5, 58, 61]);
  
  //king
  inject("pieces/king.svg","king",[4, 60]);
  
  //queen
  inject("pieces/queen.svg","queen",[3, 59]);
  
  //pawn
  inject("pieces/pawn.svg","pawn",[8,9,10,11,12,13,14,15,48,49,50,51,52,53,54,55]);
});

//inject function
//injects the SVGs to their position
function inject(location,name,position) {
  
  //fetches the file at the location
  fetch(location)
  
  //converts the files content to text
  .then(res => res.text())
  
  //puts the text to the position
  .then(data => {
    
    //selects all the cells
    const cells = document.querySelectorAll(".cell");
      
    //for every position
    position.forEach(i => {
          
      //inserts the data to the ith cell
      cells[i].innerHTML = data;
        
      //get the injected element
      const piece = cells[i].firstElementChild;
        
      //assigns classes
      piece.classList.add("piece",name);
        
      //assigns class white
      if (i < 16) piece.classList.add("white");
        
      //asigns class black
      if (i >= 48) piece.classList.add("black");
    });
  })
}

//select all cells
const cells = document.querySelectorAll(".cell");

//for every cell 
cells.forEach(cell => {
  
  //event listner for any cell click
  cell.addEventListener("click", () => {
    
    //for every cell
    cells.forEach(c => {
      
      //remove if highlight class exist
      c.classList.remove("highlight");
    });
    
    //if selected piece is still null
    if (!selectedPiece) {
      
      //select the piece
      selectedPiece = cell.querySelector(".piece");
      
      //if selected piece has a value now
      if (selectedPiece) {
      
        //add class highlight to the cell of the selected piece
        cell.classList.add("highlight");
      }
    }
    //once above steps are done
    else {
      
      //puts to the next clicked cell
      cell.append(selectedPiece);
      
      //resets the selected cell
      selectedPiece = null;
    }
  });
});

//function king
function king() {
  
  //fetches the file at the location
  fetch("pieces/king.svg")
  
  //converts the files content to text
  .then(res => res.text())
  
  //puts the text to the position
  .then(data => {
    
    //select kingit
    const kingit = document.getElementById("kingit");
    
    //puts the data to kingit
    kingit.innerHTML = data;
  })
}

//calls the function king()
king();

//switch theme function
function switchTheme() {
  
  //if root has the class light
  if (root.classList.contains("light")) {
    
    //replace the class light with dark
    root.classList.replace("light", "dark");
    
  }
  
  //if root does not have the class light that means it has the class dark
  else {
    
    //replace the class dark with light
    root.classList.replace("dark", "light");
  }
}