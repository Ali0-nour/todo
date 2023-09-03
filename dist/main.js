"use strict";
let themeQuer = document.querySelector(".theme");
let darkLight = true;
let darkOrLightText = "dark";
let mesaggText;
let mesagge = document.createElement("div");
themeQuer.addEventListener("click", function () {
    if (darkLight == true) {
        document.body.style.cssText = `
    --main-color:azure;
    --footer-color: rgb(33, 38, 145);
    --position-color:rgba( 100, 79, 158, 0.41);
    --color-card: blue;
    --font-Color-input:snow;`;
        darkLight = false;
        darkOrLightText = "light";
        console.log(darkOrLightText);
    }
    else {
        document.body.style.cssText = `
    --main-color: rgb(37, 37, 82);
    --footer-color: rgb(93, 38, 145);
    --position-color:rgba(187, 100, 79, 0.158);
    --color-card:  rgb(207, 206, 206);
    --font-Color-input: rgb(25, 117, 121);`;
        darkLight = true;
        darkOrLightText = "dark";
        console.log(darkOrLightText);
    }
    mesaggText = document.createTextNode(`New is ${darkOrLightText}`);
    mesagge.appendChild(mesaggText);
    mesagge.style.cssText = `animation-play-state: running; background-color: dark;  animation-name: mesag;
    animation-timing-function: ease-in-out;
    animation-duration: 5s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: alternate-reverse; 
    display: flex;`;
});
mesagge.setAttribute("class", "mesageDrLi");
document.body.appendChild(mesagge);
let chick = document.querySelector(".chick-p");
let ifChick = false;
chick.addEventListener("click", function () {
    if (ifChick === true) {
        chick.style.cssText = `  font-size: 1em;
  text-align: center;
  background-color: darkslategray;
  border: none;`;
        ifChick = false;
    }
    else {
        chick.style.cssText = `  font-size: 0;
    text-align: center;
    background-color: none;
    border: 2px solid seashell;`;
        ifChick = true;
    }
});
let chickTodo = document.querySelector(".chickTo");
let ifChickTodo = false;
chick.addEventListener("click", function () {
    if (ifChick === true) {
        chickTodo.style.cssText = `  font-size: 1em;
  text-align: center;
  background-color: darkslategray;
  border: none;`;
        ifChickTodo = false;
    }
    else {
        chickTodo.style.cssText = `  font-size: 0;
    text-align: center;
    background-color: none;
    border: 2px solid seashell;`;
        ifChickTodo = true;
    }
});
let inputTodo = document.querySelector(".inputToAddText");
let btnToAdd = document.querySelector(".btnAdd");
let clear = document.querySelector(".clear");
let hestory = document.querySelector(".hestory");
let todocarde = document.querySelector(".todoCard");
todocarde.addEventListener("click", function () {
    hestory.appendChild(todocarde);
});
let Active = document.querySelector(".Active");
