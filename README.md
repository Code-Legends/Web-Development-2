### Basic Requirments

1- What message will eventually be alerted? After how long?
``` javacript
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
```

##### Answer Choices:

1.  Window says hi, after 1 second
2.  Window says hi, immediately
3.  Alice says hi, after 1 second
4.  Alice says hi, immediately
5.  Bob says hi, after 1 second
6.  Bob says hi, immediately

----------

2- Write a line of code that uses **.call**  _(from Function.prototype.call)_  to alert the string **"Alice says hello!"**

``` javacript 
function sayHello () {
	alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
// ???  
```

----------

3- After running the following code, what will be the value of result?

```javacript 
var x = 10;
var puzzle = function (amount) {
	this.x += amount;
	return this.x;
};
var result = 50 - puzzle(20);  
```
----------

4- After running the following code, what will be the value of result?

```javacript
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
```

##### Answer Choices:

1.  "Hi I am Alice"
2.  "Hi I am Bob"
3.  "Hi I am window"
4.  "Hi I am undefined"

----------

5- After running the following code, what will be the value of result?

```javacript
var obj1 = { x: 10 };
var obj2 = Object.create(obj1);
var obj3 = Object.create(obj2);
var result = obj3.x + 10;
```

##### Answer Choices:

1.  10
2.  20
3.  30
4.  NaN

----------

6- What message will eventually be alerted? After how long?

```javacript 
var name = "Window";
var alice = {
	name: "Alice",
	sayHi: function() {
	alert(this.name + " says hi");
	}
};
var bob = { name: "Bob" };
setTimeout(alice.sayHi.bind(alice), 1000);  
```

##### Answer Choices:

1.  Window says hi, after 1 second
2.  Window says hi, immediately
3.  Alice says hi, after 1 second
4.  Alice says hi, immediately
5.  Window says hi, after 1 second
6.  Bob says hi, immediately

----------

7- Which of the following are reasons why we might reuse code?

##### Answer Choices:

1.  modularize our code for reuse and composition
2.  centralize code to simplify maintenance
3.  reduce errors and repetition
4.  DRY - don't repeat yourself (developer efficacy)