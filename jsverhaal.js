/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var opacity = document.querySelector("img#leeg");
setInterval(function () {
    opacity.classList.toggle("opacity");
}, 3000);


var opacity1 = document.querySelector("img#leeg1");
setInterval(function () {
    opacity1.classList.toggle("opacity1");
}, 3000);
