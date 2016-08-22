 "use strict";


BattleBots = (function (battleBots) {

  var player = null;
  var enemy = null;

  battleBots.buildPlayer = function () {
   var robotName1 = $('#robot1').val();
   console.log(robotName1)
   var playerType = $(".robots").val();
   console.log(playerType)


  if (playerType === "ThanksObama") {
    player = new BattleBots.ThanksObama();
    console.log(player)
  }
  else if (playerType === "PhotoTime") {
    player = new BattleBots.PhotoTime();
    console.log(player)
  }
  else if (playerType === "CThreePO") {
    player = new BattleBots.CThreePO();
  }

  else if (playerType === "JohnnyFive") {
    player = new BattleBots.JohnnyFive();
  }
  else if (playerType === "RecVehicle") {
    player = new BattleBots.RecVehicle();
  }
  else if (playerType === "MilitaryVec") {
    player = new BattleBots.MilitaryVec();
  }
  else { alert("Pick a robot type!")
}
 console.log("This is the attack before", player.attack)
 console.log("this is the health before", player.health)
 player.setDamage([player.damageBonus])
 player.setHealth([player.healthBonus])
 player.name = robotName1
 console.log("This is the attack now for myPlayer", player.attack)
 console.log("This is the health now for my player", player.health)

 $("#yourChar").append(`<h1> Player: ${player.name} </h1> <p class="playerhealth"> Health: ${player.health}</p> <p class="playerattack"> Attack: ${player.attack}</p>`)

}

    battleBots.buildEnemy = function () {
    var robotName2 = $('#robot2').val();
    var enemyType = $('.opponents').val();
    console.log(robotName2)
    console.log(enemyType)

    if (enemyType === "ThanksObama") {
    enemy = new BattleBots.ThanksObama();
    console.log(enemy)
    console.log(enemy.damageBonus)

  }

  else if (enemyType === "PhotoTime") {
    enemy = new BattleBots.PhotoTime();
  }
  else if (enemyType === "CThreePO") {
    enemy = new BattleBots.CThreePO();
  }
  else if (enemyType === "JohnnyFive") {
    enemy = new BattleBots.JohnnyFive();
  }
  else if (enemyType === "RecVehicle") {
    enemy = new BattleBots.RecVehicle();
  }
  else if (enemyType === "MilitaryVec") {
    enemy = new BattleBots.MilitaryVec();
  }
  else {
    alert("Pick a robot type!")
  }

console.log("This is the attack before", enemy.attack)
console.log("This is the health before", enemy.health)
 enemy.setDamage([enemy.damageBonus])
 enemy.setHealth([enemy.healthBonus])
 enemy.name = robotName2
 console.log("This is the attack now for Enemy", enemy.attack)
 console.log("This is the health now for Enemy", enemy.health)

$("#yourEnemy").append(`<h1> Enemy: ${enemy.name} </h1> <p> Health: ${enemy.health}</p> <p> Attack: ${enemy.attack}</p>`)

}

battleBots.giveDamage = function () {

  player.health = player.health - enemy.attack;
  enemy.health = enemy.health - player.attack;

  $("#yourChar").html(`<h1> Player: ${player.name} </h1> <p> Health: ${player.health}</p> <p> Attack: ${player.attack}</p>`)
  $("#yourEnemy").html(`<h1> Enemy: ${enemy.name} </h1> <p> Health: ${enemy.health}</p> <p> Attack: ${enemy.attack}</p>`)

    if (player.health <= 0) {
    alert(`"Sorry, ${player.name}. You were defeated by ${enemy.name}!"`);
  }
  if (enemy.health <= 0) {
    alert(`"Nice job, ${player.name}! You defeated ${enemy.name}"`);
  }
}


return battleBots
})(BattleBots)



