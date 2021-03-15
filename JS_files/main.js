// This is the Main Java script file where is the code that all the pages are using.

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

