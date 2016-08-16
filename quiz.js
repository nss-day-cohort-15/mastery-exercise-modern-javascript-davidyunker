
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.

// Give each robot model a different range of health. For example, one model
// can have health range of 50-80, and another one will have a range of
// 60-120.

// Give each robot model a different range of damage they do using the same technique.


// A base Robot function.
var Robot = function () {
  this.attack = 10
  this.health = 50

}

Robot.prototype.setAttackStrength = function (strength) {
  this.attack = this.attack * strength;


}

Robot.prototype.setHealthLevel = function (survival) {
  this.health = this.health * survival
}


// Define three robot type functions (e.g. Drone, Bipedal, ATV).

var Drone = function () {
  this.attack = this.attack + 20
  this.health = this.health - 10

}

Drone.prototype = new Robot();


// Define at least 2 specific robot model functions for each type.

var thanksObama = function () {

};

Robot.Drone.thanksObama.prototype = new Robot.Drone();



// Define at least 2 specific robot model functions for each type.

var photoTime = function () {

};

Robot.Drone.photoTime.prototype = new Robot.Drone();



// Define three robot type functions (e.g. Drone, Bipedal, ATV).


var BiPedal = function ()  {
  this.attack = this.attack + 2
  this.health = this.health + 10

};

BiPedal.prototype = new Robot();


var CThreePO = function () {

};

Robot.BiPedal.cThreePO.prototype = new Robot.BiPedal();

var JohnnyFive = function () {

};

Robot.BiPedal.JohnnyFive.prototype = new Robot.BiPedal();


// Define three robot type functions (e.g. Drone, Bipedal, ATV).



var ATV = function () {
    this.attack = this.attack + 5
    this.health = this.health + 20

};

ATV.prototype = new Robot();


// Define at least 2 specific robot model functions for each type.


var recVehicle = function () {

};

Robot.ATV.recVehicle.prototype = new Robot.ATV();


// Define at least 2 specific robot model functions for each type.



var militaryVehicle = function () {

};

Robot.ATV.militaryVehicle.prototype = new Robot.ATV();


