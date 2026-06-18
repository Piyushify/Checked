//variables
let selectedPiece = null;
let turn = "white";

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