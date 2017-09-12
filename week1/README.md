# Week 1: Hello World :wave:

 > `console.log('Hello World');`

## Course Background and Goals

This course jumps into the deep end of mobile app development. Everything you
learn in this class will be applicable to the real world, in a real job.
Expectations for you will be high. If you feel that you are falling behind,
**please talk to us**. There are many opportunities over the ten weeks the
course runs for you to aquire additional assistance; office hours will be
announced in-class and posted online.

The resources we give you for this class range from helpful to absolutely
necessary to your development experience, and the purpose of each will be
addressed when they are discussed. Make sure to keep a list of the resources
that are most helpful to you.

In addition to the amount of work this class requires, we will be inforcing some
best practices for your code formatting. Clean, reusable code is essential to
programming excellence, and will be the biggest determining factor between good
and bad software. Make sure to pay attention to your code formatting and styling
during homework assignments, as this will be the way we address any stylistic
issues of your code and assess how robust and expandable your design is.


## Communication and Coordination

 > It is not distance that keeps people apart, but the lack of communication.

Every tool that you use during this bootcamp is a tool that we use every day we
work. It's important that you use all of our course tools actively, and the
communication tools listed below will be your best line of communication with
us as well as your classmates. Effective communciation is an integral part of
this course; check the course message board twice weekly even if you do not need
help. You will receive feedback about your communication in progress reports on
weeks six and ten, and we will review how much you've helped your classmates as
well as how often you get help with your own problems.


### Slack

Throughout the course, we will be using Slack to send out homework assignments
and offer general project help. The `#bootcamp` channel is a great place to ask
questions and social posts are welcome. Direct messages are also available if
you think your question is better directed to a specific person. If you're on a
team, we will create a private channel for you - we will still be able to see
your posts and help you out.

[Download the Slack App](https://slack.com/get) on your phone and laptop to
receive notifications.


### Trello

 > Organize your project into cards.

Trello is a card-based project management application that allows developers
to plan their project from start to finish. Cards are a great way to keep track
of the features of your app, and categorizing these cards lets you know which
features are complete and which features still need work. If you're in a team,
Trello also allows you to assign each card to different team members which
facilitates easy project planning.

During week six, you will develop a Trello board for your project. Expect us to
keep an eye on your project's Trello board after this point to make sure it
accurately reflects your progress. By keeping the board up to date, you will
also be able to know how long your features take to complete. Our hope is that
you will be able to come reasonably close to finishing your project by week ten
of the course.

 > View a sample application board: https://trello.com/b/mXh5WQ9E


## Development Workflow

The development tools we are using for this class are command line based.
Because of this, your knowledge of the command line is essential to your success
in this course. The commands that we used in class this week assume that you
are using Linux or macOS for development, but Windows variants of these commands
are available below. We will be using macOS for instruction but **Windows should
work just as well** since most of our command line work will be done through
[Node.js](https://nodejs.org).


### Working in the Command Line
```
$ cowsay "Learn to use the command line"
 _______________________________
< Learn to use the command line >
 -------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

#### Common Commands

Launch a terminal on your local machine and try these commands out.

Command                        | Description
------------------------------ | -----------
`ls`                           | **L**i**s**t files in the current directory (on Windows, use `dir`)
`cd <DESTINATION>`             | **C**hange **d**irectory to some destination
`mkdir <NAME>`                 | **M**a**k**e a new **dir**ectory
`cp <SOURCE> <DESTINATION>`    | **C**o**p**y a file or directory (use -r for directories)
`rm <FILE>`                    | **R**e**m**ove a file or directory (use -rf for directories) (on Windows, use `rem`)
`mv <SOURCE> <DESTINATION>`    | **M**o**v**e a file or directory


#### Common Directories

Some directories have special names. Here's the ones you should remember.

Name | Description
---- | -----------
.    | Current directory
..   | Previous directory
~    | Home directory
/    | Root directory

#### Interactive JavaScript Terminal

Open an interactive JavaScript terminal from the command line by typing `node`.
Once you have entered this command, you will be able to run most of the
JavaScript we use in class from the command line. Here are some examples:

```js
Ardents-iMac:~ ardentlabs$ node
> let var1 = 'The Best'
undefined
> let var2 = 'Second Best'
undefined
> var1.length > var2.length ? 'Variable 1 is actually better' : 'Variable 2 is actually better'
'Variable 2 is actually better'
> // Pressed CTRL + C
(To exit, press ^C again or type .exit)
> // Pressed CTRL + C
Ardents-iMac:~ ardentlabs$
```

```js
Ardents-iMac:~ ardentlabs$ node
> let bestSnacks = ['pizza', 'bar', 'fruit']
undefined
>  const snackValues = bestSnacks.map((snack, index) => {
... return { value: 'The number ' + index + ' snack is ' + snack + '.'};
... })
undefined
> snackValues
[ { value: 'The number 0 snack is pizza.' },
  { value: 'The number 1 snack is bar.' },
  { value: 'The number 2 snack is fruit.' } ]
> // Pressed CTRL + C
(To exit, press ^C again or type .exit)
> // Pressed CTRL + C
Ardents-iMac:~ ardentlabs$
```

> It is very important to exit this interactive terminal before you run any cli
> commands!

# JavaScript

This week we covered basic JavaScript usage for most of the class. Since we will
be building off of your understanding of these topics in the coming weeks, make
sure you have a good understanding of all of the topics listed below. There are
a great deal of topics discussed in [Eloquent JavaScript][1] which expand far
beyond what we summarize here, so read through it if you have the time. In this
first week, we covered chapters 1, 3, 4, and 5.

[1]: https://eloquentjavascript.net

## Types

There are just a few types we'll want to focus on in JavaScript, namely
booleans, strings, and numbers.

**_Booleans_** can hold just two values: true or false.

**_Numbers_** are represented as you might expect:

```js
8
8.16
8.332e8
// Just like many calculators, we represent 833,200,000 with compact exponential form 8.332e8.
```

**_Strings_** are represented in a similar way to other languages:

```js
"Hello World!"
'Hello World!'
`Hello World!` // Template string (ES6)
```

We can also use a set of *escape characters* for special functions. For example,

```js
"This is the first line\nAnd this is the second"
```
displays as
```
This is the first line
And this is the second
```

Here are some common escape characters:

Escape Character | Output
---------------- | -----------
`\'`             | Single Quote
`\"`             | Double Quote
`\`              | Backslash
`\n`             | New Line
`\t`             | Tab

 > You can find more of these [here](https://docs.microsoft.com/en-us/scripting/javascript/advanced/special-characters-javascript)

## Operators

There are three main categories of operators in JavaScript, the first of which
are Arithmetic operators. These are used to perform mathematic operations which
return a number based on the operation they perform.

Operator | Operation Performed
-------- | -----------------------
`+`      | Addition (`6 + 3` returns `9`)
`-`      | Subtraction (`6 - 3` returns `3`)
`/`      | Division (`6 / 3` returns `2`)
`*`      | Multiplication (`6 * 3` returns `18`)
`%`      | Modulus (Think of this as remainder, `6 % 3` returns `0`)
`**`     | Exponentiation (`6 ** 3` is `6 * 6 * 6`, which returns `216`)
`++`     | Increment (`++1` returns `2`, `++2` returns `3`, and so on)
`--`     | Decrement (`--5` returns `4`, `--4` returns `3`, and so on)

Comparison operators are used to determine differences between objects. They
return boolean values, and use the operators listed below.

Operator | Operation Performed
-------- | -----------------------
`==`     | Equality (`5 == 5` returns `true` and `5 == '5'` also returns `true`)
`!=`     | Inequality (`4 != 5` returns `true` but `5 != '5'` returns `false`)
`===`    | Strict Equality (`5 === 5` returns `true` but `5 === '5'` returns `false`)
`!==`    | Strict Inequality (`4 !== 5` returns `true` and `5 !== '5'` returns `true`)
`>`      | Greater Than (`5 > 3` returns `true` but `5 > 5` returns `false`)
`>=`     | Greater Than or Equal To (`5 >= 3` returns `true` and `5 >= 5` returns `true`)
`<`      | Less Than (`3 < 7` returns `true` but `7 < 7` returns `false`)
`<=`     | Less Than or Equal To (`3 <= 7` returns `true` and `7 <= 7` returns `true`)

 > You should always use the *strict* comparison operators, to avoid [unexpected behavior](https://stackoverflow.com/a/359509).

Logical operators determine relationships involving one or two boolean objects.
They also return boolean values.

Operator | Operation Performed
-------- | -----------------------
`&&`     | Logical AND: Returns true only if both objects are true (`true && true` returns `true`)
`\|\|`   | Logical OR:  Returns false only if both objects are false (`false \|\| false` returns `false`)
`!`      | Logical NOT: Returns the opposite of what it is passed (`!false` returns `true`)

## Variables

We will be discussing two types of variables in JavaScript: `let` and `const`.

A `let` should be your default choice if you want to change the value of the
variable later. Here is an example executed in the console using a `let`:
```js
$ node
> let myVariable = 'spaghetti and meatballs'
undefined
> myVariable
'spaghetti and meatballs'
> 'I love ' + myVariable + '.'
'I love spaghetti and meatballs.'
> myVariable = 'pizza'
'pizza'
> 'I love ' + myVariable + '.'
'I love pizza.'
```

A `const` variable should be your choice if you wish to never change the value
you store inside of it. **We encourage the use of `const` variables wherever it
is possible to do so**. Example:
```js
$ node
> const cannotChangeThis = 'I want a pony!'
undefined
> cannotChangeThis
'I want a pony!'
> cannotChangeThis = 'I want an ocelot!'
TypeError: Assignment to constant variable.
```

To be aware of the shortcomings of the `const` variable type, let's see one more
example:
```js
$ node
> const shouldNotChange = { favoriteAnimal: 'puppy' }
undefined
> shouldNotChange.favoriteAnimal
'puppy'
> shouldNotChange.favoriteAnimal = 'kitten'
'kitten'
> shouldNotChange.favoriteAnimal
'kitten'
```
We see that, despite being stored in a `const` variable, we are able to change
an element of the object `shouldNotChange`. This is because we are simply
modifying one of the children of `shouldNotChange` instead of modifying the
object itself (objects are discussed in the section below). Be aware of this
when designing your apps!

### Scoping

Scoping is another important aspect of variable usage. To reason out why, let's
ask a simple question: If we create a variable, when is it deleted?

The answer depends on where we create the variable in our code. Consider the
project outline below:
```js
import React, { Component } from 'react';

const variable1 = 'one';

class App extends Component {
  const variable2 = 'two';

  constructor() {
    super();
    const variable3 = 'three';
  }

  myFunction = () => {
    const variable4 = 'four';
  }
}
```
Now let's break down when each variable comes into and goes out of scope
(thereby being deleted):

1. This variable is declared independently of any scope, and will therefore
come into existence when the application is launched. It will not be deleted
from memory until the application is closed. This is called a global variable,
and we want to use as few of these as possible for security reasons. It is
accessed from anywhere in this file by its name, `variable1`.
2. This variable is declared within the object and will be created and deleted
with the class. Declaring variables here is not encouraged, as it is only
supported by newer code specifications (≥ ES6), but if you do use it, **AND
DO NOT USE IT**, it is accessed using `this.variable2`
3. This variable has the same scope as variable 2, which is created and deleted
when the class is created and deleted. This is called an instance variable, and
we will need to access it using `this.variable3`.
4. This variable is declared within myFunction, and will be created once
myFunction is called and deleted when myFunction completes (or returns). Since
it can only be accessed from inside of myFunction, it will always be called
`variable4`.

## Arrays

An array is a collection of things, which can be very useful for storing a large
amount of related items. You can create an empty array with `[]`, and can check
its size (this is often called length) by viewing the array's `length` property.

Operation       | Description
--------------- | -----------
`push(element)` | Push `element` to the back of the array
`pop()`         | Remove the back-most element from the array

```js
$ node
> const people = ['Sam', 'Jack'] // Create an array
undefined
> people.length                  // View the size of the array
2
> people.push('Bob')             // Add a person to the back
3
> people
[ 'Sam', 'Jack', 'Bob' ]
> people.pop()                   // Remove the last person in the array
'Bob'
> people
[ 'Sam', 'Jack' ]
```

You can access individual elements within an array by *indexing* the array.

```js
> people[0] // Numbering starts at 0!
'Sam'
> people[1]
'Jack'
```

> Because of this indexing scheme, **the order of the elements in an array
> matters!**

## Objects

The simplest object that can be created in JavaScript is `{}`, which is an empty
object. We can use this syntax to create any object we'd like, such as `{ type:
'banana', color: 'yellow', texture: 'smooth' }`. We can take this object syntax
and use the command line to gain a better understanding of how it works:

```js
$ node
> const fruit = { type: 'banana', color: 'yellow', texture: 'smooth' }
undefined
> fruit.type
'banana'
> fruit.color
'yellow'
```

Now, we are passed a new fruit with more than three descriptors (these are
called keys)

```js
> const newFruit = {
>   type: 'apple',
>   color: 'red',
>   texture: 'mushy',
>   name: 'Red Delicious',
>   hasSkin: true,
> }
undefined
```

### Destructuring

Let's now say we have three functions called `handleApple`, `handleBanana`, and
`handleGrape` that take the entire fruit object **without** its `type` field.
How do we remove the type of the object, then pass the remainder to our
functions? It turns out that ES6 has syntax for this:

```js
/*
 * Note: Enable ES6 features in the command line with the --harmony flag
 *
 * We want an object that looks like { color: 'yellow', texture: 'smooth' }
 */

$ node --harmony
> const fruit = { type: 'banana', color: 'yellow', texture: 'smooth' }
undefined
> const { type, ...fruitForProcessing } = fruit
undefined
> type
'banana'
> fruitForProcessing
{ color: 'yellow', texture: 'smooth' }
```

Great! now we can pass it by calling `handleBanana(fruitForProcessing)`. This
syntax is fairly flexible, so it can be used on arrays as well. We can also use
the same syntax without ellipses (which is called [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator))
to create a new variable for each key of the object.

```js
/* Doesn't require ES6 */
$ node
> const fruit = { type: 'banana', color: 'yellow', texture: 'smooth' }
undefined
> const { type, color, texture } = fruit
undefined
> type
'banana'
```

Objects are a complex subject, so message us on Slack if anything is still unclear!

## Functions

Taken directly from Eloquent JavaScript,

> Functions are the bread and butter of JavaScript programming. The concept of
> wrapping a piece of program in a value has many uses. It is a tool to
> structure larger programs, to reduce repetition, to associate names with
> subprograms, and to isolate these subprograms from each other.

Functions may take one or more *parameters* and may *return* a value. Let's
create one here that operates on two numbers.

```js
const add = (a, b) => {
  return a + b;
};
```

> Note: We are using *fat arrow notation* here, which is an ES6 feature.
> Functions can also be declared like this:
> ```js
> function add(a, b) {
>   return a + b;
> }
> ```
> and this:
> ```js
> const add = function(a, b) {
>   return a + b;
> }
> ```
> but not all declarations work identically. We will discuss the differences
> between these declarations later.

You can also shorten this by *implying a return*. Whatever is after the fat
arrow (`=>`) will be returned.

```js
const add = (a, b) => a + b;    // Shorter but less explicit
```

In this example, we've created two **parameters**: `a` and `b`. We then add
these two parameters together and **return** the result.

```js
> add(3, 5)
8
```

 > If you're feeling particularly adventurous, you can do some more research on
 > [functions in JavaScript][1]. As it turns out, functions are just objects!

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

## Higher order functions

One really powerful feature of JavaScript is its support for functions as
*first class types*. This means that whatever you can do with regular types,
you can do with functions.

Let's do something mind-bending:

```js
const execute = (a, b, operation) => {
  return operation(a, b);
};
```

We've created a function that takes 3 parameters: a variable `a`, a
variable `b`, and an `operation` which we expect to be a function.
We return the result of calling the `operation` function with the
parameters `a` and `b`.

Let's use the `execute` function to call our previous function, `add`,
with the same parameters:

```js
> execute(3, 5, add)
8
```

Just like before, we're passing in two numbers, but this time we're also passing
in the `add` function we made earlier. When the `execute` function runs, it will
run `add` with `3` and `5` as parameters.

Let's break it down even further.

```js
execute(3, 5, add)

// evaluates to...

(3, 5, add) => {
  return add(3, 5);
}

// evaluates to...

(3, 5, add) => {
  return 8;
};

// evaluates to...

8
```
 > Note: This isn't valid JavaScript, it's just a way of showing you what's
 > going on behind the scenes.

### Revisiting arrays

You may be wondering why we would ever need to pass one function into
another as a parameter. As it turns out, we frequently need to **map**
each element in an array to some label for identification.

Let's say we have a group of people and a collection of computers.

```js
const people = ['Sam', 'Dallas', 'Jack'];
const computers = ['iMac', 'Alienware', 'Surface Pro'];
```

I want to **map** each person to a computer.

```js
const assignments = people.map((person, index) => {
  return {
    person,
    computer: computers[index],
  };
})
```

You may also see this written with an *implied* return in other people's
code:

```js
const assignments = people.map((person, index) => ({
    person,
    computer: computers[index],
}))
```
Notice that this syntax makes the returned object **look like a function body!**
You should be aware of this when reading other people's code, but we will be
avoiding this in our own code for the sake of clarity.

This is equivalent to using an explicit `for` loop.

```js
// Not as nice...

const assignments = [];

for (let i = 0; i < people.length; i++) {
  assignments.push({
    person: people[i],
    computer: computers[i],
  });
}
```

We'll be using `Array.map` often for working with large sets of data that we'll
need to map to React components, so it's definitely valuable to learn.

## Classes

If you have been following along so far, you will have noticed that we have classes
in all of our test apps. These will look familiar to you if you've worked with an
object-oriented programming language before.

Let's build a simple class:

```js
class Animal {
}
```

Let's now add a **constructor**, which is used for initializing class variables.
Conventionally, we store all class variables within a special object called
`this`. The `this` object will be created for you and will contain everything
declared in your class.

 > Fun fact: In JavaScript, classes are really just functions
 > ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)).

```js
class Animal {
  constructor(name) {
    this.name = name;
    this.species = 'homosapien';
  }
}
```

ES7 adds support for *instance properties*, which allows you moves the
initialization of class variables outside of the constructor. We recommend
sticking with the previous method since it's more explicit about assigning
class variables to the `this` object, but this example will function
identically to the one above:

```js
class Animal {
  species = 'homosapien';
  constructor(name) {
    this.name = name;
  }
}

// Note: ES7 support is sparse for Node v6 LTS
```

The constructor is a special function that gets called whenever you make a new
instance of a class. Just like functions, they can accept parameters.

```
> const me = new Animal('Sam');
> `My name is ${me.name} and I'm a ${me.species}.`
'My name is Sam and I'm a homosapien.'
```
 > We are using template strings here, which means `${...}` will be replaced
 > with whatever `...` evaluates to.

In addition to class variables, you can also add class functions. These are more
commonly known as **methods**.

```js
class Animal {
  constructor(name) {
    this.name = name;
    this.species = 'homosapien';

    this.sayHello = this.sayHello.bind(this); // We must bind the function
  }
  sayHello() {
    return `My name is ${this.name} and I'm a ${this.species}.`;
  }
}
```

You may have noticed a nasty-looking addition to our constructor: `bind`.
When we initially create a new method, it won't have access to the `this`
object. When we write in the `bind` function, it *binds* the special `this`
object of your class to the function it is passed.

Binding is a pain in the neck. Luckily, we can avoid this clumsy syntax by taking
advantage of ES6's *fat arrow functions* and ES7's *instance properties* (since
all member functions are technically stored in variables).

```js
class Animal {
  constructor(name) {
    this.name = name;
    this.species = 'homosapien';
  }
  sayHello = () => {
    // Works! 👌🏽
    return `My name is ${this.name} and I'm a ${this.species}.`;
  }
}
```

Let's break it down: we're making an *instance property* named `sayHello` and
assigning it a *fat arrow function* that returns a formatted string. The fat
arrow function *automagically* binds the `this` object of our *class* to the
`this` object of the *function*, and we get to avoid the ugly `bind` syntax -
this is the reason we use *fat arrow notation* when writing our member functions.

```js
> const me = new Animal('Sam')
> me.sayHello()
'My name is Sam and I'm a homosapien.'
```

## Inheritance

Let's say we have two simple classes: `Square` and `Circle`.

```js
class Square {
  constructor(width) {
    this.width = width;
    this.height= width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}
```

Let's make a function that can accept either a `Square` or a `Circle` as its
parameter and return the area of the shape.

```js
const getArea = (shape) => {
  if (shape instanceof Square) {
    return this.width * this.width;
  }
  if (shape instanceof Circle) {
    return Math.PI * this.radius * this.radius;
  }
  // Unsupported type
  return 0;
}
```

> Note: You can check the class type of a variable by using the `instanceof`
> operator ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)).

If we want to add more shapes, we'd have to keep adding `if` statements to
the `getArea` function, but if we ever forget to add a new shape to `getArea`,
its area will be returned as `0`.

**There has to be a better way...**

What if we add methods to each class?

```js
class Square {
  constructor(width) {
    this.width = width;
  }
  getArea = () => {
    return this.width * this.width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea = () => {
    return Math.PI * this.radius * this.radius;
  }
}
```

This saves us the trouble of passing an instance of the class to a
function, and now we can just call `getArea()` directly from the class instance.

```js
> const shapes = [new Square(7), new Circle(2), new Square(4)];
> shapes.map(shape => shape.getArea());
[
  49,
  12.566370614359172,
  16
]
```

**This is still fairly limited though...**

What if we made a new class called `Rectangle` that didn't support the
`getArea()` method? It would give us a vague error saying
`shape.getArea is not a function`. If we didn't already know beforehand that
`Rectangle` was the culprit, then it would take us some time to find the
object that was missing its implementation of `getArea()`. We can do better.

We should also have a reasonable default in case someone forgets to override
the `getArea()` method. How do we do all of this?

**Introducing _inheritance_!**

```js
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea = () => {
    // Give a sensible default
    if (this.width && this.height) {
      return this.width * this.height;
    }

    console.error(`You forgot to override "getArea()" for ${this.name}`);
    return 0;
  }
}

class Square extends Shape {
  constructor(width) {
    super(width, width);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea = () => {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}
```

Let's break down some of the new syntax:
 1. The `extend` keyword is used to specify which class you want to inherit
    from. This essentially copies all the member variables and methods from the
    *parent* class, or the class you're extending from. You can *override*
    these variables and methods by delaring them again in the *child* class.
 2. The `super` function directly references the `constructor` of the class that
    you *extended* from. When you call `super`, you're really just calling the
    `constructor` of the parent class. If you override the constructor, you are
    **required** to call `super`.

So we've created a parent class called `Shape` which every other class is
inheriting from. This allows us to provide default methods whenever it makes
sense to do so. We have already provided defaults in the constructor for
assigning member variables and for computing the area of the shape, and we will
now get a warning in the console if the default area computation is insufficient.

Let's try it out with some sample user input:

```js
const shapes = [
  new Square(7),
  3,
  new Circle(2),
  new Square(4),
  false,
  new Rectangle(4, 3),
  ';DROP TABLE USERS;',
];

shapes.map(element => {
  if (element instanceof Shape) {
    return element.getArea();
  }
  return 0;
});

// Returns:
[
  49,
  0,
  12.566370614359172,
  16,
  0,
  12,
  0
]
```

**It's beautiful 😍**

# Week 1 Review + Assignments (Also Posted on Slack)

Congratulations to everyone on surviving the first week of class! I know this
first week has been a little rough, but the good news is that you should all
have development environments set up for Week 2. That means we get to move on to
the interesting stuff!

> Following the difficulty Windows users have faced installing everything this
> first week, I have decided to change from yarn to npm for the remainder of the
> course for better compatibility. If you are on a Mac and feel comfortable
> using yarn, you are welcome to continue using it in place of npm.

Your assignment for the first week is to send me code that solves the following
problems:
1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we
   get 3, 5, 6 and 9. The sum of these multiples is 23. Write a function that
   finds the sum of all the multiples of 3 or 5 below some input `n`.
2. Create a function which takes in any string and determines if that string
   contains the word 'banana'.
3. Given an input string consisting of comma-separated integer values in the
   form '1, 3, 10, 6, 4', create a function that outputs the sum of these
   integers.
4. The four adjacent digits in the 1000-digit number that have the greatest
   product are 9 × 9 × 8 × 9 = 5832.

    ```
    73167176531330624919225119674426574742355349194934
    96983520312774506326239578318016984801869478851843
    85861560789112949495459501737958331952853208805511
    12540698747158523863050715693290963295227443043557
    66896648950445244523161731856403098711121722383113
    62229893423380308135336276614282806444486645238749
    30358907296290491560440772390713810515859307960866
    70172427121883998797908792274921901699720888093776
    65727333001053367881220235421809751254540594752243
    52584907711670556013604839586446706324415722155397
    53697817977846174064955149290862569321978468622482
    83972241375657056057490261407972968652414535100474
    82166370484403199890008895243450658541227588666881
    16427171479924442928230863465674813919123162824586
    17866458359124566529476545682848912883142607690042
    24219022671055626321111109370544217506941658960408
    07198403850962455444362981230987879927244284909188
    84580156166097919133875499200524063689912560717606
    05886116467109405077541002256983155200055935729725
    71636269561882670428252483600823257530420752963450
    ```
   
   Write a function which finds a number of adjacent digits `n` in the
   1000-digit number that have the greatest product.

For testing purposes, you can run Javascript in the console by running
`node`. This will open up an interactive terminal where you can
experiment with JavaScript's features (which are documented over on [MDN][2]).
Remember to press `CTRL + C` twice to exit the node terminal before you try to
use cli programs!

Notes are up on the GitHub page - make sure to post any questions you may have
about the course on the #bootcamp-fall-2017 channel!

[2]: (https://developer.mozilla.org/en-US/)

### Office Hours
This week, I will have office hours from 4:00 - 6:00 on Thursday and Friday.
Anyone is welcome to come, but **we need all Windows users to come in for office
hours** to make sure everyone is caught up for Week 2. If you are using a
Windows machine and you're busy on both Thursday and Friday, send me a direct
message and we can find a time on Saturday or Sunday to meet. Office hours will
be held at our [UCI campus](https://www.google.com/maps/place/Ardent+Academy+for+Gifted+Youth/@33.6495763,-117.8403002,17.24z/data=!4m5!3m4!1s0x80dcde0c66f6a059:0xb607a74193095a88!8m2!3d33.6507791!4d-117.8382879).

See you all next Sunday!

-Dallas