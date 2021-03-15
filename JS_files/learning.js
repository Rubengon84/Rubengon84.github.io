/* Opening and hiding the frame with the image of the certificate */


function open() {
  let frame = document.getElementById('certificates');
  let button =document.getElementById('certiButton');

    button.innerHTML ='CLOSE';
    if (window.innerWidth < 900) {
      frame.style.right = "0";
      }else if (window.innerWidth > 900) {
      frame.style.right = "-15%";  
      }
}

function close() {
  let frame = document.getElementById('certificates');
  let button =document.getElementById('certiButton');

    button.innerHTML = 'OPEN';
    document.getElementById('certificate').src = "./certificates/frame.png";
    if (window.innerWidth < 900) {
    frame.style.right = "-84%";
    }else if (window.innerWidth > 900) {
    frame.style.right = "-87%";  
    }
}

function comeOut() {

  let button =document.getElementById('certiButton');

  if ( button.textContent === 'OPEN') {
    open();
     
  }else if (button.textContent === 'CLOSE') {
    close();
  }
}


let changeCertificate = function (event) {
  let id = event.target.id;
  let image = document.getElementById('certificate');

  image.src = "./certificates/certificate_" + id + ".png";
}

function position() {
  let frame = document.getElementById('certificates');

  if(window.innerWidth < 900) {
    frame.style.right = "-84%";
  }else if (window.innerWidth > 900) {
    frame.style.right = "-87%";   
    }
}

let certificatesLinks = document.getElementsByClassName('certificateLink');

for(let i = 0; i<certificatesLinks.length; i++) {
   certificatesLinks[i].addEventListener('click',changeCertificate);
   certificatesLinks[i].addEventListener('click',open);
};



document.getElementById('certiButton').addEventListener('click', comeOut);
window.addEventListener('resize', position);