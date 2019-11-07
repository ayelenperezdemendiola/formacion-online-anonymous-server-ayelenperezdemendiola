'use strict';

const navOpenButton = document.querySelector ('.nav-trigger');
const navCloseButton = document.querySelector ('.nav-close');
const navList = document.querySelector ('.nav');

navList.classList.add('hide');

function showNav(){
    navList.classList.remove('hide');
    navList.classList.add('show');
    navOpenButton.classList.add('hide');
    navOpenButton.classList.remove('show');
}

function hideNav(){
    navList.classList.remove ('show');
    navList.classList.add('hide');
    navOpenButton.classList.remove('hide');
    navOpenButton.classList.add('show');
}

navOpenButton.addEventListener('click', showNav);
navCloseButton.addEventListener('click', hideNav);

//no entiendo el error que me marca la consola