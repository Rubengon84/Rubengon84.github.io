


const objProjects = [
  Aequor ={
    h2: "P.Aequor organism",
    p: 'CodeCademy project JavaScript practice where there is a Factory function for creating objects that simulate the DNA of P.Aequor organism, with some methods to works with the DNA bases.',
    aGit: 'https://github.com/Rubengon84/Mysterious-Organism-Object.git' ,
    aNetlify: ''
  },

  CreditCards = {
    h2: 'Checking Credit-Cards',
    p: 'Function for checking Credit-Cards using JavaScript language, Where a by giving number you can check the validation for the credit card with the Luhn Algorithm.',
    aGit: 'https://github.com/Rubengon84/Credict-Card-Id-Check.git' ,
    aNetlify: ''
    },

  ExpressServer = {
    h2: 'Server with Express library',
    p: 'CodeCademy project JavaScript practice of creating a server fully funcionated (GET, POST, UPDATE & DELETE functions) using Express library in JavaScript.',
    aGit: 'https://github.com/Rubengon84/Express-Server.git' ,
    aNetlify: ''
    },

  Portfolio = {
    h2: 'Portfolio Project',
    p: 'First big website project of creating my on portfolio,I have been focussed in responsive design, interactivity and creativity.',
    aGit: 'https://github.com/Rubengon84/Rubengon84.github.io.git' ,
    aNetlify: 'https://rubengon84.github.io'
    },    

  ShiftCipher = {
    h2: 'Class ShiftCipher practice',
    p: 'Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter.',
    aGit: 'https://github.com/Rubengon84/class_ShiftCipher.git' ,
    aNetlify: ''
    },
    
  SocialClub = {
    h2: 'SocialClubFront-End',
    p: 'One of my first practices creating a simple layout for a Social Club web page.',
    aGit: 'https://github.com/Rubengon84/SocialClubFront-End' ,
    aNetlify: 'https://simple-social-club-practice.netlify.app/'
    },

  FindYourhat = {
    h2: 'Find your hat',
    p: 'Interactive terminal game with JavaScript classes',
    aGit: 'https://github.com/Rubengon84/Find-your-hat' ,
    aNetlify: ''
    },

  BusinessWebPage = {
    h2: 'Business Flexbox',
    p: 'One of my first flexbox practices, focusing on responsive and appealing design and site.',
    aGit: 'https://github.com/Rubengon84/flexboxBusinessPractice-' ,
    aNetlify: 'https://business-flexbox-practice.netlify.app/'
    },

  GameGuessing = {
    h2: 'Game Guessing',
    p: 'Game guessing where a user choose a number and check if he is the winner. Languages used HTML5, CSS3, JavSript.',
    aGit: 'https://github.com/Rubengon84/GameGuessing' ,
    aNetlify: 'https://rubengon-game-guessing.netlify.app/'
    },

  Musicon = {
    h2: 'Musicon Website practice',
    p: 'Practice of a Website shop, focussing on apealing layout and responsive site using JavaScript objects as data.',
    aGit: 'https://github.com/Rubengon84/MusiconShop' ,
    aNetlify: 'https://rubengon-musicon-shop.netlify.app/'
    },

  Teacozy = {
    h2: 'Teacozy Website practice',
    p: 'Practice of copying a webpage from the scratch. (No responsive design) HTML5, CSS3.',
    aGit: 'https://github.com/Rubengon84/Teacozy' ,
    aNetlify: 'https://rubengon-teacozy.netlify.app/'
    },
  
];

const container = document.getElementById("projectsLargeContainer");

function createProject(obj) {

let divContainer = document.createElement("div");
divContainer.className = "projectsContainer";
let h2 = document.createElement("h2");
let p = document.createElement("p");
let aGit = document.createElement("a");
aGit.target = "_blank";
let aNetlify = document.createElement("a");
aNetlify.target = "_blank";

h2.textContent = obj.h2;
p.textContent = obj.p;
aGit.textContent = "Raw code Version in Github";
aNetlify.textContent = "Live Version of the Project";
aGit.setAttribute("href",obj.aGit);
aNetlify.setAttribute("href",obj.aNetlify);

divContainer.appendChild(h2);
divContainer.appendChild(p);
divContainer.appendChild(aGit);
obj.aNetlify? 
divContainer.appendChild(aNetlify) : "";

container.appendChild(divContainer);
}

objProjects.forEach( obj => createProject(obj));
