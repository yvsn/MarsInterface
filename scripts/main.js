//Nav Bar responsive alternative
const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
    menuToggle.addEventListener("click", () => {
      if (nav.className != "active") {
        nav.className = "active";}
        else {
        nav.className = "";}
}
);

//Function Time Calculator
function time (){
  var speed = document.getElementById('text1').value;
    var distance = document.getElementById('text2').value;
      var totalDays = Math.round(distance/ speed /24);
        var totalMonths = Math.round(distance/ speed/ 744);
          document.getElementById("displayresulttext").innerHTML = totalDays + " day(s) or " + totalMonths + " month(s) until arrival on Mars.";
}
//Function Food Calculator
function food (){
  var fooddaily = 1.8;
    var foodleft = document.getElementById('textfood').value;
      var timeleft = document.getElementById('texttime').value;
        var foodcalc = foodleft/ timeleft;

if (foodcalc >= fooddaily) {
  document.getElementById("displayresulttext2").innerHTML = "You still have " + foodcalc + " kilogramm(s) of food per day left" + " (You don't have to ration your food).";
}
    else{
        document.getElementById("displayresulttext2").innerHTML = "You only have " + foodcalc + " kilogramm(s) of food per day left" + " (You have to ration your food).";
}
}
//Event Atmosphere Mars
document.getElementById("btn3").onclick = function(){
  var marsCD= "Carbon Dioxide: 95,32%";
    var marsMN= "Molecular Nitrogen: 2.6%";
      var marsA= "Argon: 1,9%";
        var marsO= "Other Elements: 0.18%";
          document.getElementById("marsCD").innerHTML = marsCD;
            document.getElementById("marsMN").innerHTML = marsMN;
              document.getElementById("marsA").innerHTML = marsA;
                document.getElementById("marsO").innerHTML = marsO;
}
//Event Atmosphere Earth
document.getElementById("btn4").onclick = function(){
  var earthN= "Nitrogen: 78.09%";
    var earthOX= "Oxygen: 20,95%";
      var earthA= "Argon: 1,9%";
        var earthCD= "Carbon Dioxide: 0.04%"
          var earthO= "Other Elements: 0.18%";
            document.getElementById("earthN").innerHTML = earthN;
              document.getElementById("earthOX").innerHTML = earthOX;
                document.getElementById("earthA").innerHTML = earthA;
                  document.getElementById("earthCD").innerHTML = earthCD;
                    document.getElementById("earthO").innerHTML = earthO;
}
