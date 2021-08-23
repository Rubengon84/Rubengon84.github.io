// This is the Main Java script file where is the code that all the pages are using.

const colorButton = document.getElementById("colorButton");

const changeColor = () => {  //Function to toggle colour to B&W and vice versa.
  const toggle = document.getElementById("toggle");
  const toggleLetters = document.getElementById("colorLetters");
  const cssPath = document.getElementById("styleSheet");
  let path = cssPath.getAttribute("href");

  if (path === "./styleColor.css") {
    cssPath.setAttribute("href", "./styleB&W.css");
    toggle.style.transform = "translateY(1rem)";
    toggleLetters.style.fontSize = "0.4rem";
    toggleLetters.innerHTML = "COLOUR";
  }else{
    cssPath.setAttribute("href", "./styleColor.css");
    toggle.style.transform = 'translateY( 0rem)';
    toggleLetters.style.fontSize = "0.6rem";
    toggleLetters.innerHTML = "B&W";
  }
}

colorButton.addEventListener('click', changeColor);

function typing(text,varId,time,cha) {

      /*Function for making a typing effect where you can set the text, time, 
               the variable Id and event the typing character. */

let varText = '';
let fakeText = '';

document.getElementById(varId).innerHTML = cha;

for(let i = 0; i<text.length; i++) {
  change(i);
}

function change(j) {
 
  setTimeout(() => {
  varText = varText + text[j];
  fakeText = varText + cha;
  
  document.getElementById(varId).innerHTML = varText;
  if( j < text.length - 1){
  document.getElementById(varId).innerHTML = fakeText;
 }
},time *j);
}
};


function titleIntroduction() {  // Set the Title and make the typing effect of every page. 
  let title = document.getElementById("title").textContent;
typing(title,"title",350,'|');
};

titleIntroduction();

