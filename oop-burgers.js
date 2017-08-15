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
  console.log((`${this.name} has ${this.calories} calories, ${this.vegan}, and ${this.glutenFree}.`))
}

var lettuce = new FoodItem('lettuce', 5, true, true)
var dressing = new FoodItem('dressing', 100, true, true)
var tomato = new FoodItem('tomato', 11, true, true)
var onion = new FoodItem('onion', 22, true, true)
var croutons = new FoodItem('croutons', 122, true, false)

var bun = new FoodItem('bun', 120, true, false)
var meat = new FoodItem('meat', 200, false, true)
var fries = new FoodItem('fries', 365, true, false)

var Plate = function(name, description, price, ingredients) {
  this.name = name
  this.description = description
  this.price = price
  this.ingredients = ingredients.join(', ')
}

Plate.prototype.stringify = function() {
  console.log(`The ${this.name} is a ${this.description}. Ingredients: ${this.ingredients}. Price: $${this.price}`)
}

var saladPlate = new Plate('salad plate', 'house salad with your choice of dressing', 5, [lettuce.name, dressing.name, tomato.name, onion.name, croutons.name])
var burgerPlate = new Plate('burger plate', 'burger served with fries', 9, [lettuce.name, tomato.name, onion.name, bun.name, meat.name, fries.name])

var Menu = function(name, plates) {
  this.name = name
  this.plates = plates.join(', ')
}

var dinnerMenu = new Menu('dinner menu', [saladPlate.name, burgerPlate.name])

Menu.prototype.stringify = function() {
  console.log(`The ${this.name} includes the following: ${this.plates}. `)
}

var Restaurant = function(name, description, menu) {
  this.name = name
  this.description = description
  this.menu = menu
}

var myRestaurant = new Restaurant("Walter's Pub", 'the finest pub around', dinnerMenu)

Restaurant.prototype.stringify = function() {
  console.log(`${this.name} is commonly referred to as '${this.description}.'`)
}

myRestaurant.stringify()
