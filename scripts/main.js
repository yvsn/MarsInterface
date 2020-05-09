function time (){

var number1 = document.getElementById('text1').value;
var number2 = document.getElementById('text2').value;
var totalDays = Math.round(number2/ number1 /24);
var totalMonths = Math.round(number2/ number1/ 744);
alert(totalDays + " day(s) until arrival or " + totalMonths + " month(s) until arrival.");
}

function gPull (){

var number3 = Math.pow(6.67 * 10, -11);
var number4 = Math.pow(6.39 * 10, 23);
var number5 = 4535924;
var number6 = document.getElementById('text6').value;
var number7 = Math.pow(number6, 2);
var totalPull = number3 * number4 * number5 / number7;
alert("At a distance of " + number6 + "km, the gravitational pull between the SpaceX starship and Mars is " + totalPull +"g" );
}

const menuToggle = document.querySelector('.menu-toggle');
       const nav = document.querySelector('nav');
       menuToggle.addEventListener('click', () => {
           if (nav.className != 'active') {nav.className = 'active';}
           else {nav.className = '';}
       });
