var Ship = Ship || {};

//constants
Ship.WEIGHT_PER_FUEL = 20;
Ship.WEIGHT_PER_PERSON = 2;
Ship.FOOD_WEIGHT = 0.6;
Ship.FIREPOWER_WEIGHT = 5;
Ship.GAME_SPEED = 800;
Ship.DAY_PER_STEP = 0.2;
Ship.FOOD_PER_PERSON = 0.02;
Ship.FULL_SPEED = 5;
Ship.SLOW_SPEED = 3;
Ship.FINAL_DISTANCE = 1000;
Ship.EVENT_PROBABILITY = 0.15;
Ship.ENEMY_FIREPOWER_AVG = 5;
Ship.ENEMY_GOLD_AVG = 50;

Ship.Game = {};

//initiate the game
Ship.Game.init = function(){

  //reference ui
  this.ui = Ship.UI;

  //reference event manager
  this.eventManager = Ship.Event;

  //setup caravan
  this.caravan = Ship.Caravan;
  this.caravan.init({
    day: 0,
    distance: 0,
    crew: 30,
    food: 80,
    fuel: 2,
    money: 300,
    firepower: 2
  });

  //pass references
  this.caravan.ui = this.ui;
  this.caravan.eventManager = this.eventManager;

  this.ui.game = this;
  this.ui.caravan = this.caravan;
  this.ui.eventManager = this.eventManager;

  this.eventManager.game = this;
  this.eventManager.caravan = this.caravan;
  this.eventManager.ui = this.ui;
    
  this.ui.resetNofity();
};

//start the journey and time starts running
Ship.Game.startJourney = function() {
  this.gameActive = true;
  this.previousTime = null;
  this.ui.notify('Your journey begins', 'positive');
  this.step();
};

//game loop
Ship.Game.step = function(timestamp) {

  //starting, setup the previous time for the first time
  if(!this.previousTime){
    this.previousTime = timestamp;
    this.updateGame();
  }

  //time difference
  var progress = timestamp - this.previousTime;

  //game update
  if(progress >= Ship.GAME_SPEED) {
    this.previousTime = timestamp;
    this.updateGame();
  }

  //we use "bind" so that we can refer to the context "this" inside of the step method
  if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
};

//update game stats
Ship.Game.updateGame = function() {
  //day update
  this.caravan.day += Ship.DAY_PER_STEP;

  //food consumption
  this.caravan.consumeFood();

  if(this.caravan.food === 0) {
    this.ui.notify('Your caravan starved to death', 'negative');
    this.gameActive = false;
    return;
  }

  //update weight
  this.caravan.updateWeight();

  //update progress
  this.caravan.updateDistance();

  //show stats
  this.ui.refreshStats();

  //check if everyone died
  if(this.caravan.crew <= 0) {
    this.caravan.crew = 0;
    this.ui.notify('Everyone died', 'negative');
    this.gameActive = false;
    return;
  }

  //check win game
  if(this.caravan.distance >= Ship.FINAL_DISTANCE) {
    this.ui.notify('You have found a new home!', 'positive');
    this.gameActive = false;
    return;
  }

  //random events
  if(Math.random() <= Ship.EVENT_PROBABILITY) {
    this.eventManager.generateEvent();
  }
};

//pause the journey
Ship.Game.pauseJourney = function() {
  this.gameActive = false;
};

//resume the journey
Ship.Game.resumeJourney = function() {
  this.gameActive = true;
  this.step();
};

//init game
Ship.Game.init();

//button event listeners
document.getElementById("start").addEventListener("click", function() {
    Ship.Game.init();
    Ship.Game.startJourney();
});
document.getElementById("pause").addEventListener("click", function() {
    Ship.Game.pauseJourney();
});
document.getElementById("resume").addEventListener("click", function() {
    Ship.Game.resumeJourney();
});
document.getElementById("restart").addEventListener("click", function() {
    Ship.Game.init();
    Ship.Game.startJourney();
});