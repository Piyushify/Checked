//testing
console.log('JS Connected');

//constants
const root = document.documentElement;
const board = document.querySelector(".board");

//variables
let buffer = document.createElement("div");
let selectedPiece = null;

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