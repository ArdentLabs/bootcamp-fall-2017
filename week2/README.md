# Week 2: Going Native

Congratulations on surviving week one and learning our basic cli programs,
`npm`, `yarn`, and `create-react-native-app`! Before we continue with
[React Native](https://facebook.github.io/react-native/), let's learn a few
things about JavaScript, JSX, React's component design, and error parsing to
help us along the way.

## Basic JavaScript

There are a number of topics discussed in
[Eloquent JavaScript](https://eloquentjavascript.net), and they are summarized
here to make your life easier. Please also read through the book if you have
enough time to do so.

### Types

There are just a few types we'll want to focus on in JavaScript, namely
booleans, strings, and numbers.

**_Booleans_** can hold just two values: true or false.

**_Numbers_** are represented as you might expect:
```
8
8.16
8.332e8
/* Just like many calculators, we represent 833,200,000 with compact exponential form 8.332e8. */
```

**_Strings_** are represented in a similar way to other languages:
```
/* These two strings are identical */
"Hello World!"
'Hello World!'
```
We can also use a set of *escape characters* for special functions:
```
"This is the first line\nAnd this is the second"
/* Displays as */
This is the first line
And this is the second
```
Here are some common escape characters:

Escape Character | Output
---------------- | -----------
`\'`             | Single Quote
`\"`             | Double Quote
`\\`             | Backslash
`\n`             | New Line
`\t`             | Tab

 > You can find more of these [here](https://docs.microsoft.com/en-us/scripting/javascript/advanced/special-characters-javascript)

### Operators

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

### Variables

We will be discussing two types of variables in JavaScript: `let` and `const`.

A `let` should be your default choice if you want to change the value of the
variable later. Here is an example executed in the console using a `let`:
```
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
you store inside of it. **We encourage the use of `const` variables wherever
it is possible to do so**. Example:
```
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
```
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

#### Scoping

Scoping is another important aspect of variable usage. To reason out why, let's
ask a simple question: If we create a variable, when is it deleted?

The answer depends on where we create the variable in our code. Consider the
project outline below:
```
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

### Objects

The simplest object that can be created in JavaScript is `{}`, which is an empty
object. We can use this syntax to create any object we'd like, such as `{ type:
'banana', color: 'yellow', texture: 'smooth' }`. We can take this object syntax
and use the command line to gain a better understanding of how it works:

```
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

```
> const newFruit = {
>   type: 'apple',
>   color: 'red',
>   texture: 'mushy',
>   name: 'Red Delicious',
>   hasSkin: true,
> }
undefined
```

### Arrays

Arrays is a collection of things. You'll find these useful for a large amount of
items. You can create an empty array with `[]`. You can check the size, or
length, of the array by viewing it's `length` property.

Operation       | Description
--------------- | -----------
`push(element)` | Push `element` to the back of the array
`pop()`         | Remove the back-most element from the array

```
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

So you can access individual elements within an array by *indexing* the array.

```
> people[0] // Numbering starts at 0!
'Sam'
> people[1]
'Jack'
```

> You might have already noticed, but I'll explicitly state it: **in arrays,
> order matters**.

### Destructuring

Let's also say we have three functions called `handleApple`, `handleBanana`, and
`handleGrape` that take the entire fruit object **without** its `type` field.
How do we remove the type of the object, then pass the remainder to our
functions? It turns out that ES6 has syntax for this:

```
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

```
/* Doesn't require ES6 */
$ node
> const fruit = { type: 'banana', color: 'yellow', texture: 'smooth' }
undefined
> const { type, color, texture } = fruit
undefined
> type
'banana'
```

Objects are complex, so message us on Slack if anything is still unclear!

### Functions

Taken directly from Eloquent JavaScript,

> Functions are the bread and butter of JavaScript programming. The concept of
> wrapping a piece of program in a value has many uses. It is a tool to
> structure larger programs, to reduce repetition, to associate names with
> subprograms, and to isolate these subprograms from each other.

Functions may take one or more *parameters* and may *return* a value. Let's
create one here that operates on two numbers.

```
const add = (a, b) => {
  return a + b;
};
```

> Note: We are using a *fat arrow function* here, which is an ES6 feature.
> This is equivalent to:
> ```
> function add(a, b) {
>   return a + b;
> }
> ```
> and also equivalent to:
> ```
> const add = function(a, b) {
>   return a + b;
> }
> ```
> We will discuss the differences later within the notes.

You can also shorten this by *implying a return*. Whatever is after the fat
arrow (`=>`) will be returned.

```
const add = (a, b) => a + b;    // Much shorter!
```

In this example, we've created two **parameters**: `a` and `b`. We then add
these two parameters together and **return** the result.

```
> add(3, 5)
8
```

### Higher order functions

One really powerful feature of JavaScript is its support for functions as a
*first class types*. This means that whatever you can do with regular types,
you can do with functions.

Let's do something mind-bending 💫

```
const execute = (a, b, operation) => {
  return operation(a, b);
};
```

We've created a function that takes 3 parameters: `a`, `b`, and `operation`
which we expect to be a function. We return the result of calling the
`operation` function with the parameters `a` and `b`.

Confused? Don't be. Let's see how this would be used.

```
> execute(3, 5, add)
8
```

Just like before, we're passing two numbers. But this time, we're also passing
the function we made earlier, `add`. When the `execute` function runs, it will
run `add` with `3` and `5` as parameters.

Let's break it down even further.

```
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
 > Note: This isn't valid JavaScript, it's just my way of showing you what's
 > going on behind the scenes.

### Revisiting arrays

As it turns out, one nifty use case of passing a function to a function is when
you're working with arrays.

Let's say we have a group of people and a collection of computers.

```
const people = ['Sam', 'Dallas', 'Jack'];
const computers = ['iMac', 'Alienware', 'Surface Pro'];
```

I want to **map** each person a computer.

```
const assignments = people.map((person, index) => {
  return {
    person,
    computer: computers[index],
  };
})
```

Since all we're doing is returning, we can *imply* the return.

```
const assignments = people.map((person, index) => {{
    person,
    computer: computers[index],
}})
```
 > Important: If you want to return an object from a fat arrow function, you have to
 > wrap it in an additional set of curly braces.

This is equivalent to using an explicit `for` loop.

```
// Not as nice... 🤢

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

### Classes



### Modules

When we created our first [React Native](https://facebook.github.io/react-native/)
project, you may have noticed the `import` and `export` keywords which are
placed as follows:

```
// App.js

import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    );
  }
}
```

These are called modules, and there are actually four of them. The first is
called `import`, and it allows us to use one or multiple components that are
declared in an external file. Both of these usage cases are shown in the example
above.

The second module we will be discussing is `export`. If we call `export` on a
class, it will be accessible from other files using `import` to find it. Here
is an example of its usage:

```
// ReactIsGood.js

import React from 'react';
import { Text, View } from 'react-native';

export class ReactIsGood extends React.Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    );
  }
}
```

```
// App.js

import React from 'react';
import { ReactIsGood } from './File1';

export default class App extends React.Component {
  render() {
    return (
      <ReactIsGood/>
    );
  }
}
```

So what is `export default`? Well, you may have noticed that we import the
default `React` component differently from our class that we called `export`
on. The short explanation is that when we say `export default App`, we can then
later `import App from 'containing-file'`. If we were to `export App` instead,
we would need to `import { App } from 'containing-file` instead.

There is one more module you will run into, and it is called `require`. This
module's purpose is to `// TODO the rest is yours.`
