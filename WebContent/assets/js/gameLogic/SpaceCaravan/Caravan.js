var Ship = Ship || {};

Ship.Caravan = {};

Ship.Caravan.init = function(stats){
  this.day = stats.day;
  this.distance = stats.distance;
  this.crew = stats.crew;
  this.food = stats.food;
  this.fuel = stats.fuel;
  this.money = stats.money;
  this.firepower = stats.firepower;
};

//update weight and capacity
Ship.Caravan.updateWeight = function(){
  var droppedFood = 0;
  var droppedGuns = 0;

  //how much can the caravan carry
  this.capacity = this.fuel * Ship.WEIGHT_PER_FUEL + this.crew * Ship.WEIGHT_PER_PERSON;

  //how much weight do we currently have
  this.weight = this.food * Ship.FOOD_WEIGHT + this.firepower * Ship.FIREPOWER_WEIGHT;

  //drop things behind if it's too much weight
  //assume guns get dropped before food
  while(this.firepower && this.capacity <= this.weight) {
    this.firepower--;
    this.weight -= Ship.FIREPOWER_WEIGHT;
    droppedGuns++;
  }

  if(droppedGuns) {
    this.ui.notify('Left '+droppedGuns+' guns behind', 'negative');
  }

  while(this.food && this.capacity <= this.weight) {
    this.food--;
    this.weight -= Ship.FOOD_WEIGHT;
    droppedFood++;
  }

  if(droppedFood) {
    this.ui.notify('Left '+droppedFood+' food provisions behind', 'negative');
  }
};

//update covered distance
Ship.Caravan.updateDistance = function() {
  //the closer to capacity, the slower
  var diff = this.capacity - this.weight;
  var speed = Ship.SLOW_SPEED + diff/this.capacity * Ship.FULL_SPEED;
  this.distance += speed;
};

//food consumption
Ship.Caravan.consumeFood = function() {
  this.food -= this.crew * Ship.FOOD_PER_PERSON;

  if(this.food < 0) {
    this.food = 0;
  }
};
