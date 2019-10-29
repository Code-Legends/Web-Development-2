// A - 1

var name = "Window";

	var alice = {
		name: "Alice",
		sayHi: function() {
		alert(this.name + " says hi");
		}
	};

var bob = { 
	name: "Bob"
	};

setTimeout(alice.sayHi.call(bob), 1000);

/*	==== Solution ====
	it invokes a private closure stored in the alice object
	on an external object which does not have the function stored 
	in it after 1 sec.
*/

// A - 2

function sayHello () {
	alert(this.name + " says hello!");
}

var alice = { name: "Alice" };

sayHello.call(alice); // <==== The answer 


// A - 3

var x = 10;
var puzzle = function (amount) {
	this.x += amount;
	return this.x;
};

var result = 50 - puzzle(20); // returns 20

/*	==== Solution ====
	The function puzzle have access to the global variable x
	without using @keyword this. In this case using this keyword
	will refer to global scope.
*/

// A - 4

window.name = 'window'

var alice = {
	name: 'Alice',
	greet: function () {
		return "Hi I am " + this.name;
	}
}

var bob = {
	name: 'Bob',
	greet: alice.greet
}

var greet = alice.greet;
var result = greet();

//C. "Hi I am window"

/*	==== Solution ====
	The function greet have this.name on its return
	which refers to property of name at window object on
	the global scope. 
*/

// A - 5

var obj1 = { x: 10 };
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);
var result = obj3.x + 10;

// B. 20

// A - 6

var name = "Window";
var alice = {
	name: "Alice",
	sayHi: function() {
	alert(this.name + " says hi");
	}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);

// C. Alice says hi, after 1 second


// A - 7

// DRY - don't repeat yourself (developer efficency)
