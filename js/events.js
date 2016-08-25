 "use strict";

$("#fight").on('click', function(){
  BattleBots.buildPlayer()
  BattleBots.buildEnemy()
  BattleBots.addAttackButton()
})



$(document).on('click', '#attack', function(){
  console.log("I'm clicking you")
  BattleBots.giveDamage()
})






