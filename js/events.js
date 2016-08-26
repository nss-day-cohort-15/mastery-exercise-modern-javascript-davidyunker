 "use strict";

$("#fight").on('click', function(){
   var robotName1 = $('#robot1').val();
   var robotName2 = $('#robot2').val();
  if (robotName1 === "") {
     alert("Robots must have names")
  }
   else if (robotName2 === "") {
    alert("Robots must have names")
   }
   else {
  BattleBots.buildPlayer()
  BattleBots.buildEnemy()
  BattleBots.addAttackButton()
  }
})



$(document).on('click', '#attack', function(){
  console.log("I'm clicking you")
  BattleBots.giveDamage()
})



