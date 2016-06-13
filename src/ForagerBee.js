var ForagerBee = function() {
  Bee.call(this);
  this.job = "find pollen";
  this.age = 10;
  this.canFly = true;
  this.treasureChest = [];
};


ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}

ForagerBee.prototype.constructor = ForagerBee;
