# Week 3: Component Design

Week three is all about the ways we split our apps up to make them more flexible
and expandable. If we pick our components correctly, we should be able to change
most aspects of our apps quickly! The three major advantages we gain from the
component design approach are better code flexibility, reusability, readability,
and expandability. Since this all deals with code styling, you may wonder why
these properties are important - the end user won't know the difference between
good and bad code styling, right?

Let's go over each of these four qualities to understand why they are important.

## Flexibility

Flexibility allows small changes to be executed quickly. By naming and
separating pieces of your app, you can quickly find the component you need to
modify, and - if you have done everything right - you can change the entire
layout of the app by modifying just a few lines of code. This almost always
entails more math than a less flexible approach, since your goal is to make one
number change **all** of a component's values.

Let's look at a simple button as an example:

```js
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

class SimpleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color: 'rgb(0, 122, 255)',
            padding: 8,
            fontSize: 15,
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
```

Declared as:

```js
<SimpleButton
  title='Press Me!'
  onPress={() => console.log('Pressed')}
/>
```

This button is identical to the default React Native button, but it is not
flexible. Let's add some flexibility:

```js
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

class SimpleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color: 'rgb(0, 122, 255)',
            padding: 8,
            fontSize: 15,
            ...this.props.style
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
```

This button will be much more flexible. Here are just a few possibilities:

```js
<SimpleButton
  title='A green button'
  onPress={() => console.log('So green!')}
  style={{ fontColor: 'green' }}
/>
```

```js
<SimpleButton
  title='DO NOT PRESS'
  onPress={() => console.log('oh no...')}
  style={{ fontColor: 'white', backgroundColor: 'red' }}
/>
```

```js
<SimpleButton
  title='A big button'
  onPress={() => console.log('I am large.')}
  style={{ fontSize: 50 }}
/>
```

We can even use our previous declaration to get the same default button:

```js
<SimpleButton
  title='Press Me!'
  onPress={() => console.log('Pressed')}
/>
```

Now that our component is more flexible, we can use it in a variety of places
without it looking out-of-place. This leads into our next quality!

## Reusability

Now that we can reuse our button in a variety of locations, we can write a lot
less code. If the benefits of this approach seem similar to those of the class
and function approaches of C++, Python, and other languages, that's because
these components are actually classes. In addition to speeding up our workflow,
component design also allows us to maintain consistent styling throughout our
project, which leads to higher user satisfaction.

## Readability

Component design also creates a logical place to add comments or comment-like
structures to our code. Let's move back to our simple button:

```js
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

class SimpleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color: 'rgb(0, 122, 255)',
            padding: 8,
            fontSize: 15,
            ...this.props.style
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
```

Props are the one thing we will always need to know about a component. If we
look through this one, we can determine where the props are because it is so
short:

```js
import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

class SimpleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress} // An onPress prop
      >
        <Text
          style={{
            color: 'rgb(0, 122, 255)',
            padding: 8,
            fontSize: 15,
            ...this.props.style // A style prop
          }}
        >
          {this.props.title /* A title prop */}
        </Text>
      </TouchableOpacity>
    );
  }
}
```

We should really write a comment at the *top of the class* describing all of
these prop types:

```js
// The class SimpleButton has the following prop types:
//   onPress: a function that gets called when the button is pressed
//   style: an object that changes the way the button looks
//   title: a string that acts as the button label
```

But we can actually do one better. Using React Native, we have access to
something called `PropTypes`. Not only do these let us show all of our prop
types, but they will also **warn** us if any of the props have an incorrect
type. They even let us label props as `required`! Let's add them to our button:

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types'; // This import is new!!
import {
  Text,
  TouchableOpacity,
} from 'react-native';

class SimpleButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color: 'rgb(0, 122, 255)',
            padding: 8,
            fontSize: 15,
            ...this.props.style
          }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
```

Now our code is not only more readable, but also more foolproof! If we follow
this design, we will always know that a component's possible props are listed at
the top of each file, and we will also be warned if we pass a prop of the
incorrect type.

## Expandability

All of these qualities together make our code much easier to expand. The goal
here is to minimize the time you spend searching through your code and maximize
the time you spend writing new code!

This still leaves us with our question about user impact. **How does any of this
help the user?**

Since the user will never see your code, it's safe to assume that they won't
know how well you follow component design ideals when they first pick it up. The
key benefit of code clarity is development *speed*. Google, for instance, sends
out updates for its Android apps several times a week - this is the true
differentiator between good apps and bad apps. Even if a user loves your app at
first, they will only stay interested if you keep it up-to-date.

## SnakeApp

To understand better the choices that split components, we will be going over an
app which implements the game Snake. The GitHub page is located [here][1]!

[1]: https://github.com/ArdentLabs/SnakeApp

# Week 3 Review + Assignments

Three weeks done! Hopefully everyone is feeling a little more comfortable in
React Native - if it still seems foreign, try to put in a couple extra hours to
figure out this week's homework. Next week we will be designing and creating an
app in-class, so you will want to be acquainted with React Native's basic
concepts to keep up.

Your assignment for this week is to complete the BirthdayApp as discussed in
class. I have created a [Trello Board][2] for the project that you should use to
keep your development organized. Start by clicking `Show Menu` in the upper
right corner, then click `More...` , and finally click `Copy Board` to create
your own copy of the board to modify. Please work through things based on the
priority labels provided (Red > Orange > Yellow > Green)!

[2]: https://trello.com/b/Z4xVcIoe/birthdayapp

> Note: You will need to make a Trello account now if you haven't already.

The board you create during Week 5/6 for your own project will look very similar
to this, so you may want to click through everything and see how it is
formatted.

Like last week, I will be checking your implementations of BirthdayApp at the
start of class, so make sure everything is working before class! I will be
available to answer your questions over Slack all week, and I will be holding
office hours for two hours before class if you need any help in-person.

Hope everyone's week is going smoothly!

-Dallas

P.S. If you feel comfortable starting your project before Week 5/6, you are more
than welcome to. Send me a direct message on Slack if you want to get started.
