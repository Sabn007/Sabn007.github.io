//Type the strings here
// ##########################################
const arr = ["Web Developer", "MERN Stack Developer", "Freelancer"];
const arr1 = ['Work','Fast','Right']
// #################################################
//Variable declaration
let noOfItems = arr.length;
let noOfItems1 = arr1.length;
const Home = document.getElementById("menu1");
const About = document.getElementById("menu2");
const Skill = document.getElementById("menu3");
const Contact = document.getElementById("menu4");
const menuBar = document.getElementById("navigation");
const HTML = document.getElementById("html");
const HTMLlogo = document.getElementById("htmllogo");
const Python = document.getElementById("python");
const Pythonlogo = document.getElementById("pythonlogo");
const CSS = document.getElementById("css");
const CSSlogo = document.getElementById("csslogo");
const React = document.getElementById("react");
const Reactlogo = document.getElementById("reactlogo");
const NodeJS = document.getElementById("node");
const Nodelogo = document.getElementById("nodelogo");
const Mongodb = document.getElementById("mongodb");
const Mongodblogo = document.getElementById("mongodblogo");
const JS = document.getElementById("js");
const JSlogo = document.getElementById("jslogo");
const Github = document.getElementById("github");
const Githublogo = document.getElementById("githublogo");
const defaultText = document.getElementById("default");
let box = document.getElementById("infobox");
let quitButton = document.getElementById("quit");
let mobileMenuforHome = document.getElementById("HomeMobile");
let mobileMenuforAbout = document.getElementById("AboutMobile");
let mobileMenuforSkills = document.getElementById("SkillsMobile");
let mobileMenuforProjects = document.getElementById("ProjectsMobile");
let mobileNavBar = document.getElementsByClassName("mobileNav")[0];
let hamBurgerButton = document.getElementById("hamBurgerButton");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let shown = true;

function getOne() {
  let selected = Math.floor(Math.random() * noOfItems);
  document.querySelector("span#type").innerHTML = arr[selected];
  document.documentElement.style.setProperty(
    "--wordLength",
    arr[selected].length
  );
}
function getOne1() {
  let selected1 = Math.floor(Math.random() * noOfItems1);
  document.querySelector("span#type1").innerHTML = arr1[selected1];
  document.documentElement.style.setProperty(
    "--wordLength",
    arr1[selected1].length
  );
}

function getWidth() {
  let spanbox = document.getElementById("type");
  let width = spanbox.offsetWidth;
  width = width + "px";
  document.documentElement.style.setProperty("--spanwidth", width);
}
function getWidth1() {
  let spanbox = document.getElementById("type1");
  let width = spanbox.offsetWidth;
  width = width + "px";
  document.documentElement.style.setProperty("--spanwidth", width);
}
setInterval(getOne, 4000);
// setInterval(getOne1, 4000);
setInterval(getWidth, 4000);
// setInterval(getWidth1, 4000);

function showCard() {
  if (shown) {
    box.style.display = "block";
  }
}
quitButton.onclick = () => {
  box.style.display = "none";
};
let lastscroll = 0;
window.addEventListener("scroll", () => {
  let currentscroll = Math.floor(window.scrollY);
  if (currentscroll >= 0 && currentscroll <= 400) {
    Home.style.color = "#00FFF0";
  } else {
    Home.style.color = "#fff";
  }
  if (currentscroll >= 401 && currentscroll <= 1100) {
    About.style.color = "#00FFF0";
  } else {
    About.style.color = "#fff";
  }

  if (currentscroll >= 1101 && currentscroll <= 1800) {
    Skill.style.color = "#00FFF0";
  } else {
    Skill.style.color = "#fff";
  }
  if (currentscroll >= 1801 && currentscroll <= 2264) {
    Contact.style.color = "#00FFF0";
  } else {
    Contact.style.color = "#fff";
  }
  if (currentscroll > lastscroll) {
    menuBar.style.top = "-24px";
  } else {
    menuBar.style.top = "15px";
  }
  lastscroll = currentscroll;
  let scrollPercent = Math.floor((window.scrollY / 2261) * 100);
  let scrollPercentInv = 100 - scrollPercent;
  document.documentElement.style.setProperty(
    "--scrollPercent",
    scrollPercentInv + "%"
  );
});

defaultText.style.display = "block";
HTML.style.display = "None";
React.style.display = "None";
Python.style.display = "None";
NodeJS.style.display = "None";
Mongodb.style.display = "None";
CSS.style.display = "None";
JS.style.display = "None";
Github.style.display = "None";
HTMLlogo.addEventListener("click", () => {
  console.log("clicked");
  document.documentElement.style.setProperty(
    "--AnimationForHTML",
    "HTML 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "None";
  CSS.style.display = "none";
  NodeJS.style.display = "none";
  Mongodb.style.display = "none";
  JS.style.display = "None";
  Github.style.display = "None";
  HTML.style.display = "Block";
  defaultText.style.display = "none";
});
CSSlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForCSS",
    "CSS 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "none";
  CSS.style.display = "block";
  NodeJS.style.display = "none";
  Mongodb.style.display = "none";
  JS.style.display = "None";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
JSlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForJS",
    "JS 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "none";
  NodeJS.style.display = "none";
  Mongodb.style.display = "none";
  CSS.style.display = "none";
  JS.style.display = "block";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Pythonlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForPYTHON",
    "PYTHON 1s ease-in-out forwards"
  );
  React.style.display = "None";
  Python.style.display = "BLOCK";
  NodeJS.style.display = "none";
  Mongodb.style.display = "none";
  CSS.style.display = "none";
  JS.style.display = "none";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Reactlogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForReact",
    "REACT 1s ease-in-out forwards"
  );
  React.style.display = "block";
  Python.style.display = "none    ";
  CSS.style.display = "none";
  JS.style.display = "none";
  NodeJS.style.display = "none";
  Mongodb.style.display = "none";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Mongodblogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForMongodb",
    "Mongodb 1s ease-in-out forwards"
  );
  React.style.display = "none";
  Python.style.display = "none    ";
  CSS.style.display = "none";
  JS.style.display = "none";
  NodeJS.style.display = "none";
  Mongodb.style.display = "block";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Nodelogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForNode",
    "NodeJS 1s ease-in-out forwards"
  );
  React.style.display = "none";
  Python.style.display = "none    ";
  CSS.style.display = "none";
  JS.style.display = "none";
  NodeJS.style.display = "block";
  Mongodb.style.display = "none";
  Github.style.display = "None";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
Githublogo.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--AnimationForGithub",
    "GITHUB 1s ease-in-out forwards"
  );
  React.style.display = "none";
  Python.style.display = "none ";
  NodeJS.style.display = "none";
  Mongodb.style.display = "none";
  CSS.style.display = "none";
  JS.style.display = "none";
  Github.style.display = "block";
  HTML.style.display = "none";
  defaultText.style.display = "none";
});
document.documentElement.style.setProperty("--Success", "none");
const success = () => {
  document.documentElement.style.setProperty("--Success", "block");
};
let showmenu = true;
hamBurgerButton.addEventListener("click", () => {
  showmenu ? makecross() : makeburger();
  showmenu = !showmenu;
});
mobileMenuforHome.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
mobileMenuforAbout.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
mobileMenuforSkills.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
mobileMenuforProjects.addEventListener("click", () => {
  showmenu = !showmenu;

  makeburger();
});
const makecross = () => {
  first.style.transform = "rotate(35deg)";
  first.style.transformOrigin = "left";
  second.style.opacity = "0";
  third.style.transform = "rotate(-35deg)";
  third.style.transformOrigin = "left";
  mobileNavBar.style.left = "0";
};
const makeburger = () => {
  first.style.transform = "rotate(0deg)";
  first.style.transformOrigin = "left";
  second.style.opacity = "1";
  third.style.transform = "rotate(0deg)";
  third.style.transformOrigin = "left";
  mobileNavBar.style.left = "-100%";
  //showmenu = !showmenu;
};



async function insertUrl(domElement) {
  // Using domElement as argument to pass the HTML element

  //using fetch api to fetch data
  //using await returns the data until the returned promise is resolved or rejected
  //Assuming the promise is always resolved..

  const data = await fetch("https://api.github.com/users/Sabn007/repos");

  const json = await data.json(); // Await until the promise is resolved

  //creating the context to be inserted in HTML page
  let html = "<ul>"; //Create ul HTML element for unOrdered list

  for (let data of json)
    html += `<li><a href="${data.html_url}"> ${data.html_url}</a> </li>`; //Creating the list element in loop

  html += "</ul>"; //End the ul html element after loop is terminated.

  domElement.innerHTML = html; //Adding created html string to the passed domElement
}

insertUrl(document.querySelector("#reposlink")); //Pass the element with id html to the created function