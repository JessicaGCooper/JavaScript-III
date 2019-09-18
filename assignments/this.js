/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding (also known as Global Binding in Node) occurs when the 'this' keyword is called and none of the other rules apply.  This is essentially ineffective/useless and will return an error. In these circumstances 'this' will refer to the ENTIRE global scope or ENTIRE window scope. As far as I can tell, without some sort of dot notations being used when the function or object is called then 'this' ends up with no context other than the global/window context.  

* 2. Implicit binding occurs when dot notation is being used to call the function/object.  This is true for the other three types of binding as well.  Specifically implicit binding is called by a "preceding dot" which means that whatever is to the left of the dot/"." will be the object that 'this' refers to.  Typically this seems to be the case unless the very specific circumstances for Explicit Binding, which I will outline below, are present OR unless a constructor function which will allow the utilization of the 'new' keyword is present and the 'this' keyword is used in that context.(How might bracket notation be used?)

* 3. New binding occurs specifically within the context of a constructor function which allows for the utilization of the 'this' keyword.  The structure for usage of the 'this' keyword changes slightly here in that the constructor function will have a general paramater passed through it which can be utilized in the value portion of any of the key value pairs it contains AND a generalized or "variable" word follows both 'this' in the key and the parameter in the value for for key value pair, for example if "attributes" is the parameter then a key value pair examples is as follows: this.age = attributes.age. These key value pairs can be used in any method created within the constructor function or any prototypes created outside the constructor function.  Then when a 'new' object is created using assignment and the 'new' keyword, then the name of object will be utilized to call an attribute or method from the constructor function and that is when 'this' is actually given it's meaning.  'this' will refer to whatever 'new' object the method/attribute/prototype is being called upon using dot notation.

* 4. To keep this answer short, I will just say that Explicit Binding occurs when the 'this' keyword is used in the context of the .call, .apply, or .bind methods.   Also in these cases the binding is Explicit because whatever 'this' refers to is declared at the same time it is called.  These methods can overwrite anything 'this' might previously have referred to.  In some ways it can be used to force 'this' to apply to something specific.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let food = 'grass'

function goat() {
    console.log(`I love to eat ${this.food}`)
}

goat();//logs: I love to eat undefined

// Principle 2

// code example for Implicit Binding

const parent = {
   name: 'Gerry',
   age: 77,
   hobby: 'golfing',
   about: function(){
       console.log(`Even at the age of ${this.age}, my dad ${this.name} still loves to go ${this.hobby}!`);
   }//Note: an arrow function CANNOT be used in a method.
}

parent.about();
//logs: Even at the age of 77, my dad Gerry still loves to go golfing!

// Principle 3

// code example for New Binding

const Tragedy = function(description) {
    this.weather = description.weather,
    this.relation = description.relation,
    this.activity = description.activity,
    this.danger = description.danger,
    this.verb = description.verb,
    this.outcome = description.outcome,
    this.event = function(){
        return `On a ${this.weather} day, my ${this.relation} was ${this.activity} when a ${this.danger} suddenly ${this.verb} and my ${this.relation} ended up ${this.outcome}!`;
    }
};

let animalAttack = new Tragedy({
    weather: 'sunny',
    relation: 'cousin',
    activity: 'hiking',
    danger: 'bear',
    verb: 'appeared',
    outcome: 'mauled'
})

console.log(animalAttack.event());
//logs: On a sunny day, my cousin was hiking when a bear suddenly appeared and my cousin ended up mauled!

// Principle 4

// code example for Explicit Binding

//my note: using the above constructor function I created

function pythagorean(){
    return Math.sqrt((this.a * this.a) + (this.b * this.b)) 
}

let hypotenuse = {
    a: 3,
    b: 4,
}

console.log(pythagorean.call(hypotenuse));