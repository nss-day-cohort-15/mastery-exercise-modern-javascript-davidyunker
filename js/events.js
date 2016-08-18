// Event listeners

// two buttons that can be clicked
// two select menus
// two text input fields

$(".robots").change(function(yourChoice) {
  var yourChoice = yourChoice.target.value
  console.log(yourChoice)

  BattleBots.addRobotType()
})


 $(".opponents").change(function(yourChoice) {
  var yourChoice = yourChoice.target.value
  console.log(yourChoice)

  BattleBots.addRobotType()
})


$("#fight").click(function(){
  console.log("robots coming!")
  BattleBots.renderRobots()
})


$("attack").click(function (){
  console.log("attack clicked!")
  BattleBots.giveDamage()

})


