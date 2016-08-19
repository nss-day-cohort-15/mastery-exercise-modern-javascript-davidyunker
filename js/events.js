

$("#fight").on('click', function(){
  BattleBots.buildPlayer()
  BattleBots.buildEnemy()
})


$("#attack").click(function (){
  console.log("attack clicked!")
  BattleBots.giveDamage()

})




