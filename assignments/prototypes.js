/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===  //note to self: constructor function
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(description){
 this.createdAt = description.createdAt,
 this.name = description.name,
 this.dimensions = description.dimensions
}

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
};

/*
  === CharacterStats === //note to self: constructor function
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(life){
  this.healthPoints = life.healthPoints,
  GameObject.call(this, life)
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
}



/*
  === Humanoid (Having an appearance or character resembling that of a human.) === //note to self: constructor function
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(character){
  this.team = character.team,
  this.weapons = character.weapons,
  this.language = character.language,
  CharacterStats.call(this, character)
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
 
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
};



/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date --> correct
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 } --> correct
  console.log(swordsman.healthPoints); // 15 --> correct
  console.log(mage.name); // Bruce --> correct
  console.log(swordsman.team); // The Round Table --> correct
  console.log(mage.weapons); // Staff of Shamalama --> correct
  console.log(archer.language); // Elvish --> correct
  console.log(archer.greet()); // Lilith offers a greeting in Elvish. --> correct
  console.log(mage.takeDamage()); // Bruce took damage. --> correct
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game. --> correct


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!