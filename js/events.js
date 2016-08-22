 "use strict";

$("#fight").on('click', function(){
  BattleBots.buildPlayer()
  BattleBots.buildEnemy()
})


$("#attack").click(function (){
  BattleBots.giveDamage()

})




