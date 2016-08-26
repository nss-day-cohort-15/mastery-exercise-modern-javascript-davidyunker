 "use strict";


BattleBots = (function (battleBots) {

  var player = null;
  var enemy = null;



  battleBots.buildPlayer = function () {
   var robotName1 = $('#robot1').val();
   var playerType = $(".robots").val();


  if (playerType === "ThanksObama") {
    player = new BattleBots.ThanksObama();
  }
  else if (playerType === "PhotoTime") {
    player = new BattleBots.PhotoTime();
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
    player = new BattleBots.MilitaryVehicle();
  }
  else { alert("Pick a robot type!")
}

 player.setDamage([player.damageBonus])
 player.setHealth([player.healthBonus])
 player.name = robotName1


 $("#yourChar").append(`<h1> Player: ${player.name} </h1> <p class="playerhealth"> Health: ${player.health}</p> <p class="playerattack"> Attack: ${player.attack}</p>`)

}

    battleBots.buildEnemy = function () {
    var robotName2 = $('#robot2').val();
    var enemyType = $('.opponents').val();


    if (enemyType === "ThanksObama") {
    enemy = new BattleBots.ThanksObama();


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
    enemy = new BattleBots.MilitaryVehicle();
  }
  else {
    alert("Pick a robot type!")
  }

 enemy.setDamage([enemy.damageBonus])
 enemy.setHealth([enemy.healthBonus])
 enemy.name = robotName2


$("#yourEnemy").append(`<h1> Enemy: ${enemy.name} </h1> <p> Health: ${enemy.health}</p> <p> Attack: ${enemy.attack}</p>`)

}

battleBots.giveDamage = function () {

  player.health = player.health - enemy.attack;
  enemy.health = enemy.health - player.attack;

  $("#yourChar").html(`<h1> Player: ${player.name} </h1> <p> Health: ${player.health}</p> <p> Attack: ${player.attack}</p>`)
  $("#yourEnemy").html(`<h1> Enemy: ${enemy.name} </h1> <p> Health: ${enemy.health}</p> <p> Attack: ${enemy.attack}</p>`)

    if (player.health <= 0) {
      player.health = 0;
    alert(`"Sorry, ${player.name}. You were defeated by ${enemy.name}!"`);
  }
  if (enemy.health <= 0) {
    enemy.health = 0;
    alert(`"Nice job, ${player.name}! You defeated ${enemy.name}"`);
  }
}

battleBots.addAttackButton = function() {
    $("#attackButton").append(`<div id="buttonHolder"><input type="button" id="attack" value="attack"></div>`)
  }




return battleBots
})(BattleBots)



