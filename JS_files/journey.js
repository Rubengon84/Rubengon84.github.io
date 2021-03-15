/* Making a notebook effect in small and large screens with differents layouts */

function backP2() {

  let actualPage = document.getElementById('page1');
  actualPage.style.transform = "rotateY(-0deg)";
  actualPage.style.zIndex = "3";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 1)";

}

function backP3() {

  if (window.innerWidth < 600) {

  let actualPage = document.getElementById('page2');
  actualPage.style.transform = "rotateY(-0deg)";
  actualPage.style.zIndex = "2";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 1)";

}else if (window.innerWidth >= 600) {

  let actualPage = document.getElementById('page2');
  let nextPage = document.getElementById('page1');
  let otherPage = document.getElementById('page3');

  actualPage.style.transition = "transform 2s backgroundColor 2s";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 1)";
  actualPage.style.transform = "initial";
  otherPage.style.transition = "z-index 2s";
  otherPage.style.zIndex = "1";
  nextPage.style.transition = "opacity 2s, z-index 2s"
  nextPage.style.opacity = "1";

}

}

function backP4() {

  let actualPage = document.getElementById('page3');


  actualPage.style.transform = "rotateY(-0deg)";
  actualPage.style.zIndex = "1";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 1)";

}


function nextP1() {

  let actualPage = document.getElementById('page1');

  actualPage.style.transform = "rotateY(270deg)";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

}

function nextP2() {

  if (window.innerWidth < 600) {
  let actualPage = document.getElementById('page2');



  actualPage.style.transform = "rotateY(270deg)";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

  }else if (window.innerWidth >= 600) {

    let actualPage = document.getElementById('page2');
    let nextPage = document.getElementById('page1');
    let otherPage = document.getElementById('page3');

    actualPage.style.transition = "transform 2s, backgroundColor 1s, z-index 2s";
    actualPage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    actualPage.style.transform = "rotateY(180deg) translateX(29px) ";
    otherPage.style.transition = "z-index 2s";
    otherPage.style.zIndex = "4";

    nextPage.style.transition = "opacity 2s, z-index 2s"
    nextPage.style.opacity = "-1";
  }

}

function nextP3() {

  let actualPage = document.getElementById('page3');


  actualPage.style.transform = "rotateY(270deg)";
  actualPage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  document.getElementById('next4').style.display = 'none';
}



function book() {
if (window.innerWidth < 600) {

  document.getElementById('page1').style.transition = "transform 2s";
  document.getElementById('page2').style.transition = "transform 2s";
  document.getElementById('page3').style.transition = "transform 2s";
  document.getElementById('page3').style.zIndex = "1";


  document.getElementById('next1').addEventListener('click', nextP1);
  document.getElementById('next2').addEventListener('click', nextP2);
  document.getElementById('next3').addEventListener('click', nextP3);


  document.getElementById('back2').addEventListener('click', backP2);
  document.getElementById('back3').addEventListener('click', backP3);
  document.getElementById('back4').addEventListener('click', backP4);



  }else if (window.innerWidth >= 600) {



    document.getElementById('page1').style.transition = "transform 0s";
    document.getElementById('page2').style.transition = "transform 0s";
    document.getElementById('page3').style.transition = "transform 0s";

    document.getElementById('page3').style.transform = "initial"; 
    document.getElementById('page2').style.transform = "initial";
    document.getElementById('page1').style.transform = "initial";
    document.getElementById('page2').style.zIndex = "2";
    document.getElementById('page1').style.zIndex = "3";
    document.getElementById('page1').style.opacity = "1";

    document.getElementById('page1').style.backgroundColor = "rgba(0, 0, 0, 1)"; 
    document.getElementById('page2').style.backgroundColor = "rgba(0, 0, 0, 1)"; 
    document.getElementById('page3').style.backgroundColor = "rgba(0, 0, 0, 1)";

    document.getElementById('next2').addEventListener('click', nextP2);
    document.getElementById('back3').addEventListener('click', backP3);
  };

};


book();
window.addEventListener('resize', book);
window.addEventListener('orientationchange', book);
