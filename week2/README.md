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
/* Just like many calculators, we represent 833,200,000 with compact exponential
form 8.332e8. */
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
`\b`             | Backspace
`\f`             | Form Feed
`\t`             | Horizontal Tabulator
`\v`             | Vertical Tabulator

Only the first four of these make sense for our usage, so don't worry about the
others.

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
`===`    | Strict Equality (`5 === 5` returns `true` but `5 === '5'` returns `false`)
`!=`     | Inequality (`4 != 5` returns `true` but `5 != '5'` returns `false`)
`!==`    | Strict Inequality (`4 !== 5` returns `true` and `5 !== '5'` returns `true`)
`>`      | Greater Than (`5 > 3` returns `true` but `5 > 5` returns `false`)
`>=`     | Greater Than or Equal To (`5 >= 3` returns `true` and `5 >= 5` returns `true`)
`<`      | Less Than (`3 < 7` returns `true` but `7 < 7` returns `false`)
`<=`     | Less Than or Equal To (`3 <= 7` returns `true` and `7 <= 7` returns `true`)

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
Ardents-iMac:~ ardentlabs$ node
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
Ardents-iMac:~ ardentlabs$ node
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
> Ardents-iMac:~ ardentlabs$ clear
Ardents-iMac:~ ardentlabs$ node
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
Ardents-iMac:~ ardentlabs$ node
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
Let's also say we have three functions called `handleApple`, `handleBanana`, and
`handleGrape` that take the entire fruit object **without** its type (since each
function only handles one type of fruit, this is not required information). How
do we remove the type of the object, then pass the remainder to our functions?
It turns out that ES6 has a syntax for this:
```
/* We want an object that looks like { color: 'yellow', texture: 'smooth' }
   Note: this does not work in console, so I am pretending it does only for the
   purposes of this example. */

> const { type, ...fruitForProcessing } = fruit
undefined
> type
'banana'
> fruitForProcessing
{ color: 'yellow',
  texture: 'smooth' }
```
Great! now we can pass it by calling `handleBanana(fruitForProcessing)`. This
syntax is fairly flexible, so it can be used on arrays as well. We can also use
the same syntax without ellipses (which is called [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator))
to create a new variable for each key of the object.
```
/* This does work in console! */
Ardents-iMac:~ ardentlabs$ node
> const fruit = { type: 'banana', color: 'yellow', texture: 'smooth' }
undefined
> const { fruitType, fruitColor, fruitTexture } = fruit
undefined
> const { type, color, texture } = fruit
undefined
> type
'banana'
```

Objects are complex, so message us on Slack if anything is still unclear!

### Modules

When we created our first [React Native](https://facebook.github.io/react-native/)
project, you may have noticed the `import` and `export` keywords which are
placed as follows:
```
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
/* File 1 */
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

/* End of File 1 */
```
```
/* File 2 */
import React from 'react';
import { ReactIsGood } from './File1';

export default class App extends React.Component {
  render() {
    return (
      <ReactIsGood/>
    );
  }
}

/* End of File 2 */
```
So what is `export default`? Well, you may have noticed that we import the
default `React` component differently from our class that we called `export`
on. The short explanation is that when we say `export default App`, we can then
later `import App from 'containing-file'`. If we were to `export App` instead,
we would need to `import { App } from 'containing-file` instead.

There is one more module you will run into, and it is called `require`. This
module's purpose is to `// TODO the rest is yours.`
