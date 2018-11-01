/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function move() {
    var element = document.getElementById("inner");
    var width = 0;
    var id = setInterval(frame, 100);


    function frame() {
        if (width >= 54) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            element.innerHTML = width * 1 + "%";
        }
    }
}
window.onload = move;
