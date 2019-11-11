'use strict';

const navOpenButton = document.querySelector ('.nav-trigger');
const navCloseButton = document.querySelector ('.nav-close');
const navList = document.querySelector ('.nav');

function showNav(){
    navList.classList.add('show');
    navList.classList.remove('hideNav');

    navOpenButton.classList.add('hide');
    navOpenButton.classList.remove('show');
}

function hideNav(){
    navList.classList.remove ('show');
    navList.classList.add('hideNav');
    navOpenButton.classList.remove('hide');
}

navOpenButton.addEventListener('click', showNav);
navCloseButton.addEventListener('click', hideNav);

