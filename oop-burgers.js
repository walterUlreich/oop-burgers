var FoodItem = function(name, calories, vegan, glutenFree) {
  this.name = name
  this.calories = calories
  this.vegan = vegan
  this.glutenFree = glutenFree

  if(vegan) {
    this.vegan = 'is vegan'
  } else {
    this.vegan = 'is not vegan'
  }

  if (glutenFree) {
    this.glutenFree = 'is gluten free'
  } else {
    this.glutenFree = 'is not gluten free'
  }
}

FoodItem.prototype.stringify = function() {
  // Bacon has 100 calories, is not vegan, and is gluten free.
  return `${this.name} has ${this.calories} calories, ${this.vegan}, and ${this.glutenFree}.`
}

var lettuce = new FoodItem('lettuce', 5, true, true)
var dressing = new FoodItem('dressing', 100, true, true)
var tomato = new FoodItem('tomato', 11, true, true)
var onion = new FoodItem('onion', 22, true, true)
var croutons = new FoodItem('croutons', 122, true, false)

var bun = new FoodItem('bun', 120, true, false)
var meat = new FoodItem('meat', 200, false, true)
var fries = new FoodItem('fries', 365, true, false)

var Plate = function(name, description, price, foodItems) {
  this.name = name
  this.description = description
  this.price = price
  this.foodItems = foodItems
}

Plate.prototype.stringify = function() {
  var output = `${this.name}: $${this.price}. ${this.description}. It contains: `
  for ( var i = 0; i < this.foodItems.length; i++ ) {
      output += this.foodItems[i].stringify()
  }
  return output
}

var saladIngredients = [lettuce, dressing, tomato, onion, croutons]
var burgerIngredients = [lettuce, tomato, onion, bun, meat, fries]

var saladPlate = new Plate('salad plate', 'house salad with your choice of dressing', 5, saladIngredients)
var burgerPlate = new Plate('burger plate', 'burger served with fries', 9, burgerIngredients)

var Menu = function(name, plates) {
  this.name = name
  this.plates = plates
}

var dinnerMenu = new Menu('dinner menu', [saladPlate, burgerPlate])

Menu.prototype.stringify = function() {
  var output = this.name + ': '
  for ( var i = 0; i < this.plates.length; i++ ) {
      output += this.plates[i].stringify()
  }
  return output
}

var Restaurant = function(name, description, menu) {
  this.name = name
  this.description = description
  this.menu = menu
}

var myRestaurant = new Restaurant("Walter's Pub", 'the finest pub around', dinnerMenu)

Restaurant.prototype.stringify = function() {
    return `${this.name}: ${this.description}. Check our our menu! ${this.menu.stringify()}`
}

console.log(myRestaurant.stringify())
