


BattleBots = (function (battleBots) {

  battleBots.buildPlayer = function () {
   var robotName1 = $('#robot1').val();
   console.log(robotName1)
   var playerType = $(".robots").val();
   console.log(playerType)


  if (playerType === "ThanksObama") {
    var player = new BattleBots.ThanksObama;
    console.log(player)
  }
  else if (playerType === "PhotoTime") {
    var player = new BattleBots.PhotoTime;
    console.log(player)
  }
  else if (playerType === "CThreePO") {
    var player = new BattleBots.CThreePO;
  }

  else if (playerType === "JohnnyFive") {
    var player = new BattleBots.JohnnyFive;
  }
  else if (playerType === "RecVehicle") {
    var player = new BattleBots.RecVehicle;
  }
  else if (playerType === "MilitaryVec") {
    var player = new BattleBots.MilitaryVec;
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

 $("#yourChar").append(`<h1> ${player.name} </h1> <p>${player.health}</p> <p>${player.attack}</p>`)

}

    battleBots.buildEnemy = function () {
    var robotName2 = $('#robot2').val();
    var enemyType = $('.opponents').val();
    console.log(robotName2)
    console.log(enemyType)

    if (enemyType === "ThanksObama") {
    var enemy = new BattleBots.ThanksObama;
    console.log(enemy)
    console.log(enemy.damageBonus)

  }

  else if (enemyType === "PhotoTime") {
    var enemy = new BattleBots.PhotoTime;
  }
  else if (enemyType === "CThreePO") {
    var enemy = new BattleBots.CThreePO;
  }
  else if (enemyType === "JohnnyFive") {
    var enemy = new BattleBots.JohnnyFive;
  }
  else if (enemyType === "RecVehicle") {
    var enemy = new BattleBots.RecVehicle;
  }
  else if (enemyType === "MilitaryVec") {
    var enemy = new BattleBots.MilitaryVec;
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

$("#yourEnemy").append(`<h1> ${enemy.name} </h1> <p>${enemy.health}</p> <p>${enemy.attack}</p>`)

}


battleBots.giveDamage = function (enemyObj, playerObj) {
  enemyObj.health = enemyObj.health - player.attack;
  playerObj.health = playerObj.health - enemyObj.attack;

  if (playerObj.health === 0) {
    alert("You lose!");
  } else if (enemyObj.health === 0) {
    alert("You win!");
  } else {
    BattleBots.renderRobots();
  }

}

return battleBots
})(BattleBots)





