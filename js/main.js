'use strict';

const navOpenButton = document.querySelector ('.nav-trigger');
const navCloseButton = document.querySelector ('.nav-close');
const navList = document.querySelector ('.nav');


function showNav (){
    navList.classList.add('show');
}
function hideNav (){
    navList.classList.remove ('show');
}
navOpenButton.addEventListener('click', showNav);
navCloseButton.addEventListener('click', hideNav);