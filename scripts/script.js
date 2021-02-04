// JavaScript Document

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf
//https://www.youtube.com/watch?v=gXkqy0b4M5g
//navigation menu - hamburger menu active and show
var mainNav = document.getElementById("js-nav-links");
var navBarToggle = document.getElementById("js-bnt-toggle");
var burger = document.querySelector('.bnt-burger-toggle');

navBarToggle.addEventListener("click", function () {
    // burger animation

    mainNav.classList.toggle("active");
    burger.classList.toggle('toggle');
});
