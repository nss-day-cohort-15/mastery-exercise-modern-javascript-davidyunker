
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.

// Give each robot model a different range of health. For example, one model
// can have health range of 50-80, and another one will have a range of
// 60-120.

// Give each robot model a different range of damage they do using the same technique.


// A base Robot function.

// Pizza.prototype.setCrustThickness = function (thickness) {
//   this.crustThickness = this.crustThickness * thickness;
// };

var BattleBots = (function (battleBots) {




battleBots.Robot = function () {
  this.name = "";
  this.attack = Math.floor(Math.random() * 10 + 5);
  this.health = Math.floor(Math.random() * 40 + 50);
  this.type = null;
  this.model = null;


}


battleBots.Robot.prototype.setHealth = function (healthBonus) {
  this.health = this.health * healthBonus

}

battleBots.Robot.prototype.setDamage = function (damageBonus) {
  this.attack = this.attack * damageBonus

}

battleBots.Drone = function () {
  this.type = "drone";
}

battleBots.Drone.prototype = new battleBots.Robot();

battleBots.ThanksObama = function () {
  this.damageBonus = 10;
  this.healthBonus = 50;
  this.model = "obama";

};

battleBots.ThanksObama.prototype = new battleBots.Drone();


battleBots.PhotoTime = function () {
  this.damageBonus = 5;
  this.healthBonus = 40;
  this.model = "phototime";

};

battleBots.PhotoTime.prototype = new battleBots.Drone();





battleBots.BiPedal = function ()  {
  this.type = "Bipedal";

};

battleBots.BiPedal.prototype = new battleBots.Robot();


battleBots.CThreePO = function () {
  this.model = "CThreePO";
  this.healthBonus = 7;
  this.damageBonus = 6;

};

battleBots.CThreePO.prototype = new battleBots.BiPedal();

battleBots.JohnnyFive = function () {
  this.healthBonus = 80;
  this.damageBonus = 15;

};

battleBots.JohnnyFive.prototype = new battleBots.BiPedal();


battleBots.ATV = function () {
    this.type = "atv";

};

battleBots.ATV.prototype = new battleBots.Robot();




battleBots.RecVehicle = function () {
  this.model = "recVehicle";
  this.damageBonus = 25;
  this.healthBonus = 40;

};

battleBots.RecVehicle.prototype = new battleBots.ATV();



battleBots.MilitaryVehicle = function () {
  this.model = "military";
  this.damageBonus = 60;
  this.healthBonus = 100;

};

battleBots.MilitaryVehicle.prototype = new battleBots.ATV();


return battleBots

})(BattleBots || {})




// DeepDish.prototype = new Pizza();
// //defines relationship between deepdish and pizza
// // created prototype chain between deepdish and pizza
// // DeepDish.setCrustThickness(3);
// //The above doesn't work because we've only made deepdish a child of pizza.
// // no instance of deepdish yet thus can't call method yet
// var myPizza = new DeepDish();
