/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var button = document.querySelector('.album li:nth-child(1) button');
var change = 0;

function bundle() {

    if (change == 0) {
        button.classList.add('addone');
        change++;
    } else {
        button.classList.remove('addone');
        change--;
    }
}
button.addEventListener('click', bundle);




//function enlarge1() {
//    if (document.getElementById('one').style.fontSize == "1em") {
//        document.getElementById('one').style.fontSize = "0em";
//    } else {
//        document.getElementById('one').style.fontSize = "1em";
//    }
//}
//
//function enlarge2() {
//    if (document.getElementById('two').style.fontSize == "1em") {
//        document.getElementById('two').style.fontSize = "0em";
//    } else {
//        document.getElementById('two').style.fontSize = "1em";
//    }
//}
//
//function enlarge3() {
//    if (document.getElementById('three').style.fontSize == "1em") {
//        document.getElementById('three').style.fontSize = "0em";
//    } else {
//        document.getElementById('three').style.fontSize = "1em";
//    }
//}
//
//
//function enlarge4() {
//    if (document.getElementById('four').style.fontSize == "1em") {
//        document.getElementById('four').style.fontSize = "0em";
//    } else {
//        document.getElementById('four').style.fontSize = "1em";
//    }
//}
//
//function enlarge5() {
//    if (document.getElementById('five').style.fontSize == "1em") {
//        document.getElementById('five').style.fontSize = "0em";
//    } else {
//        document.getElementById('five').style.fontSize = "1em";
//    }
//}
//
//function enlarge6() {
//    if (document.getElementById('six').style.fontSize == "1em") {
//        document.getElementById('six').style.fontSize = "0em";
//    } else {
//        document.getElementById('six').style.fontSize = "1em";
//    }
//}
//
//function enlarge7() {
//    if (document.getElementById('seven').style.fontSize == "1em") {
//        document.getElementById('seven').style.fontSize = "0em";
//    } else {
//        document.getElementById('seven').style.fontSize = "1em";
//    }
//}
//
//function enlarge8() {
//    if (document.getElementById('eight').style.fontSize == "1em") {
//        document.getElementById('eight').style.fontSize = "0em";
//    } else {
//        document.getElementById('eight').style.fontSize = "1em";
//    }
//}
