const objProjects = [
  (Apptivity = {
    h2: "Apptivity",
    p: `4 weeks final project in School of code. Team of 4 members, react SPA planned from
the scratch, focusing on a real work project, user-personas, user-story, UI & UX design, 
developing using Agile methodology with scrum and kanban, making weekly sprints 
with a CI/CD development process. Front-End React-app, using UI libraries and React 
modules and testing using Jest & Cypres. Back-end Rest API Express server hosted in 
Heroku with PostgreSQL database, testing using Super Test.
`,
    aGit: "",
    aNetlify: "https://apptivity-app.netlify.app/",
  }),
  (SocMastermind = {
    h2: "SoC Mastermind",
    p: `Collaborated week project in School of code. Team of 4-member, SPA react app, 
planned from the scratch, developing using Agile methodology, scrum and kanban, 
making daily sprints. Front-End React-app deployed on Netlify, Back-end Rest API 
Express server hosted in Heroku with PostgreSQL data-base.`,
    aGit: "https://github.com/SchoolOfCode/national-project-week-repo-2-the-room-23",
    aNetlify: "https://dreamy-mcnulty-895324.netlify.app/",
  }),
  (PhotoShowroom = {
    h2: "Ivan photo-showroom",
    p: `My nephew's photo showroom project during the Christmas week break in School of 
code. Front-end responsive interactive photo showroom webpage linked with Back-end REST API, both deployed on Heroku.`,
    aGit: "https://ivan-gallery.herokuapp.com/",
    aNetlify: "https://ivan-gallery.herokuapp.com/",
  }),
  (RugWebsite = {
    h2: "Rug Website",
    p: `First project designed for a client, goals: SEO, fast loading for a good ranking on 
search engines, responsive of any device’s size, interactive and attractive to users. Techs 
used, HTML, CSS, JavaScript, Python (for sending the form to the client) not any
modules used, all the features are designed and coded from the scratch.`,
    aGit: "https://github.com/Rubengon84/Rug-Website",
    aNetlify: "https://rug-website-project.netlify.app/",
  }),
  (RedditReactSPA = {
    h2: "Reddit React",
    p: `My first React & React-Redux App ,totally functional, getting the data from reddit Rest 
API, and displayed in a react responsive SPA. Techs used, HTML, CSS, JavaScript-React, 
React-Redux, React-router-dom.
`,
    aGit: "https://github.com/Rubengon84/RedditApp",
    aNetlify: "https://reddit-jimmy.netlify.app/",
  }),
  (Portfolio = {
    h2: "Portfolio Project",
    p: `First website project, focusing on, responsive design to any device’s size using CSS-Grid and Flex box, interactive to the user with different layouts and features. Code 
techs used HTML, CSS and JavaScript, not any modules or libraries used, all the 
features are designed and coded from the scratch.`,
    aGit: "https://github.com/Rubengon84/Rubengon84.github.io.git",
    aNetlify: "https://rubengon84.github.io",
  }),
  (PogeonsApp = {
    h2: "Pigeons-React-App",
    p: "SPA react-app using useReducer and Auth0 for athentification, with a clear and responsive desing.",
    aGit: "",
    aNetlify: "https://wikipigeons.netlify.app/",
  }),
  (WeatherApp = {
    h2: "Weather-App",
    p: "Collaborated development day for creating a react-app using user-reducer, showing the weather after a city introduced, animated background depending on the weather",
    aGit: "",
    aNetlify: "https://rubengon-weather-app.netlify.app/",
  }),
  (ReactBlog = {
    h2: "SoC-React-blog",
    p: "The first practice of SoC with react, making a blog page, focusing on making it functional and responsive design.",
    aGit: "https://github.com/SchoolOfCode/w7_recap_react-Rubengon84",
    aNetlify: "https://ruben-react-blog.netlify.app/",
  }),
  (CatsRestApi = {
    h2: "SoC-Cats-RestAPI",
    p: "Express server practice deployed on Heroku and using Postgres SQL database, with a front-end colorful layout conected with the back-end and totally functional",
    aGit: "https://github.com/SchoolOfCode/w5_recap_sql-and-node-Rubengon84",
    aNetlify: "https://cats-api-table.herokuapp.com/",
  }),
  (Koala = {
    h2: "SoC-Koala-animated",
    p: "The first practice of School of code, playing with HTML and CSS, making a koala image. Introducing my own touch and making an animation of his eyes.",
    aGit: "",
    aNetlify: "https://koala-looking.netlify.app/",
  }),
  (SocialClub = {
    h2: "SocialClubFront-End",
    p: "One of my first practices creating a simple layout for a Social Club web page.",
    aGit: "https://github.com/Rubengon84/SocialClubFront-End",
    aNetlify: "https://simple-social-club-practice.netlify.app/",
  }),
  (GameGuessing = {
    h2: "Game Guessing",
    p: "Game guessing where a user choose a number and check if he is the winner. Languages used HTML5, CSS3, JavSript.",
    aGit: "https://github.com/Rubengon84/GameGuessing",
    aNetlify: "https://rubengon-game-guessing.netlify.app/",
  }),
  (Musicon = {
    h2: "Musicon Website practice",
    p: "Practice of a Website shop, focussing on apealing layout and responsive site using JavaScript objects as data.",
    aGit: "https://github.com/Rubengon84/MusiconShop",
    aNetlify: "https://rubengon-musicon-shop.netlify.app/",
  }),
  (Teacozy = {
    h2: "Teacozy Website practice",
    p: "Practice of copying a webpage from the scratch. (No responsive design) HTML5, CSS3.",
    aGit: "https://github.com/Rubengon84/Teacozy",
    aNetlify: "https://rubengon-teacozy.netlify.app/",
  }),
  (BusinessWebPage = {
    h2: "Business Flexbox",
    p: "One of my first flexbox practices, focusing on responsive and appealing design and site.",
    aGit: "https://github.com/Rubengon84/flexboxBusinessPractice-",
    aNetlify: "https://business-flexbox-practice.netlify.app/",
  }),
  (FindYourhat = {
    h2: "Find your hat",
    p: "Interactive terminal game with JavaScript classes",
    aGit: "https://github.com/Rubengon84/Find-your-hat",
    aNetlify: "",
  }),
  (Aequor = {
    h2: "P.Aequor organism",
    p: "CodeCademy project JavaScript practice where there is a Factory function for creating objects that simulate the DNA of P.Aequor organism, with some methods to works with the DNA bases.",
    aGit: "https://github.com/Rubengon84/Mysterious-Organism-Object.git",
    aNetlify: "",
  }),
  (CreditCards = {
    h2: "Checking Credit-Cards",
    p: "Function for checking Credit-Cards using JavaScript language, Where a by giving number you can check the validation for the credit card with the Luhn Algorithm.",
    aGit: "https://github.com/Rubengon84/Credict-Card-Id-Check.git",
    aNetlify: "",
  }),
  (ExpressServer = {
    h2: "Server with Express library",
    p: "CodeCademy project JavaScript practice of creating a server fully funcionated (GET, POST, UPDATE & DELETE functions) using Express library in JavaScript.",
    aGit: "https://github.com/Rubengon84/Express-Server.git",
    aNetlify: "",
  }),
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
  aGit.setAttribute("href", obj.aGit);
  aNetlify.setAttribute("href", obj.aNetlify);

  divContainer.appendChild(h2);
  divContainer.appendChild(p);
  obj.aGit ? divContainer.appendChild(aGit) : "";
  //divContainer.appendChild(aGit);
  obj.aNetlify ? divContainer.appendChild(aNetlify) : "";

  container.appendChild(divContainer);
}

objProjects.forEach((obj) => createProject(obj));
