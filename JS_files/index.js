/* Changing the text of the screen and making the effect of the face moving his eyes */

let buttons = ['leftUp','left','leftDown','rightUp','right','rightDown']

function changeText(button) {

  let ele = document.getElementById('look'+ button);
  let array = ['I am a Spanish living in London.  A year ago discover a passion for web development. I would like to show you a little bit of myself and make you enjoy knowing me with my portfolio.'
              ,'Internet is a whole world of open possibilities and resources,  I find websites as an important tool for any company or any person where you can practice the creativity of your mind can reach, as part of art where things can be beautiful and breathtaking.'
              ,'Very professional, fast learner, dedicated person, looking for efficiency as efficacy, always looking to develop my skills and my knowledge, team player, adaptable to any environment, creative person and I never give up.'
              ,"While I'm studying, I would like to start working. I would love to find work as a Junior Front-End Developer or even an apprenticeship where I can continue learning, get guidance and support from colleagues and also put all my knowledge into practice and continue to improve my skills."
              ,'The future for me is continuing studying and improving my knowledge, focusing at the moment on getting stronger in JavaScript and his libraries, I would like to start with a new languages, PHP and Phyton and also I have a strong interest in React.'
              ,'Wide knowledge of HTML5, CSS, and JavaScript, also Lodash, JQuery, JSX, React, Node.Js, Express, Mocha, SQL, Git, Wordpress.'];
  let number;

  switch (button) {
    case 'leftUp':
      number = 0;
      break;
    case 'left':
      number = 1;
      break;
    case 'leftDown':
      number = 2;
      break;
    case 'rightUp':
      number = 3;
      break;
    case 'right':
      number = 4;
      break;
    case 'rightDown':
      number = 5;
      break;       
  }
  
  function text() {
  typing(array[number],"screen",30,'|');
  }

  ele.addEventListener('click',text );
}

function changeImagen(button) {


  let ele = document.getElementById('look'+ button);
  let imagen = document.getElementById('face');


  function changeFace() {
   
    if (window.innerWidth >= 600) {
    imagen.style.backgroundImage = "url('./images/Rubengon_" + button + "B&W.png')";
    }else {
    imagen.style.backgroundImage = 'none';
    }
  };

  function changeBack () {
    if (window.innerWidth >= 600) {
    imagen.style.backgroundImage = "url('./images/RubengonB&W.png')";
    }else {
    imagen.style.backgroundImage = 'none';
    }
  };
 

  ele.addEventListener('mouseout', changeBack);
  ele.addEventListener('mouseover', changeFace);

};

function activate() {
  if (window.innerWidth >= 600) {
  document.getElementById('face').style.backgroundImage = "url('./images/RubengonB&W.png')"; 
  buttons.forEach(button => {
    changeImagen(button);
    changeText(button);
  });

  }else {
  document.getElementById('face').style.backgroundImage = 'none';
  buttons.forEach(button => {
    changeText(button);
  });
  }

};

activate();
window.addEventListener('resize', activate);
window.addEventListener('orientationchange', activate);

let screen = document.getElementById("screen").textContent;
typing(screen,"screen",30,'|');
