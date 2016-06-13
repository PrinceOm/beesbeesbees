var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.color = "yellow";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++
}

HoneyMakerBee.prototype.giveHoney = function(){
  if(this.honeyPot > 0){
    this.honeyPot--;
  }
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;