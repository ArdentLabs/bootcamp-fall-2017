# Week 2: Going Native

This week, we will be learning about JSX, React Native components, and the
complications JSX syntax introduces into JavaScript code. Along the way, we will
build our first app!

## JSX

Normal JavaScript code should be familiar to anyone who has worked in a
programming language before. As just one example, functions are handled like
this in C++:

```C++
// Finds the max of two numbers
int max(int num1, int num2) {
  if (num1 > num2)
    return num1;
  return num2;
}
```

Like this in Python:

```Python
def max(num1, num2):
  "Finds the max of two numbers"
  if num1 > num2:
    return num1
  return num2
```

And like this in JavaScript:

```js
// Finds the max of two numbers
const max = (num1, num2) => {
  if (num1 > num2)
    return num1;
  return num2;
}
```

These can all be cleaned up using each language's ternary operator (even though
Python's method is strange):

```C++
// Finds the max of two numbers
int max(int num1, int num2) {
  return num1 > num2 ? num1 : num2;
}
```

```Python
def max(num1, num2):
  "Finds the max of two numbers"
  return num1 if num1 > num2 else num2
```

```js
// Finds the max of two numbers
const max = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
}
```

Since the syntax between these is fairly similar, we will not be spending
additional class time on JavaScript's syntax. Because of this, I encourage you
all to ask quesitons about any JavaScript code you don't understand!

Despite JavaScript's similarity to other programming languages, React Native
relies heavily on JSX for development. JSX stands for JavaScript XML, and it
allows you to use XML- or HTML-esque syntax in Javascript. If you have looked at
the code for your first React Native project, you've probably seen this:

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

Most of this looks like normal JavaScript, but what's going on inside the return
statement?

```js
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
  <Text>Changes you make will automatically reload.</Text>
  <Text>Shake your phone to open the developer menu.</Text>
</View>
```

This is all JSX (**not** normal JavaScript), and it has a very important
purpose. You might notice that this chunk of code looks very similar to the
application running on your device - this is not an accident! The reason React
and React Native rely on JSX for application construction is that **your code
will look like your app**. During debugging, this allows you to easily identify
code that is producing an undesired result on your app's user interface. Take
this code for a user profile card:

```js
<View
  style={{
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'rgb(200, 200, 200)',
    borderWidth: 0.5,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    width: 281,
  }}
>
  <Image
    source={{ uri: 'https://vignette.wikia.nocookie.net/harrypotter/images/4/41/Hermionedhface.jpg/revision/latest/scale-to-width-down/350?cb=20161221044857' }}
    style={{
      height: 365.6,
      width: 280,
      borderRadius: 5,
    }}
  />
  <Text style={{ fontSize: 30 }}>Hermione Granger</Text>
  <Text>Height: 5'6</Text>
  <Text>Birthday: September 19th</Text>
</View>
```

Without actually seeing the result, we know that this will be a card (read:
styled `View`) with a shadow that contains an `Image` with some descriptive
text underneath it. This very well may leave you with some questions:

1. Why does the style prop need {{double curly braces}}?
2. Why do some style keywords take in `'strings'`, some take in `numbers`, and
   others still take in `{ objects }`?
3. Why don't the style and source props take in strings like their HTML
   counterparts?

### Props

The answers to all of these questions lie within React Native's implementation
of class properties, or props. Each React Component has the ability to receive
props. You can think of props as variables which are passed from a higher-order
component to a lower-order component each time their value changes. Props cannot
be changed from the lower-order component, but they can be used anywhere in the
class that is useful. Some common props can be used to change a variety of
aspects of the lower-order class, such as `style`, while others such as
`onPress` call a function when an event occurs. Here is how we pass props:

```js
<Text
  // The style prop
  style={{
    fontSize: 30,
    color: 'blue'
  }}
/>
<TouchableOpacity
  // The onPress prop
  onPress={(text) => this.setState({ text })}
/>
<Image
  // The source prop
  source={require('../resources/logo.png')}
/>
```

Information about what props each component supports can be found on their
respective [React Native documentation][1] pages. Now we can finally answer
question one. Let's use this as an example:

```js
<Button
  color='red'
  title='DO NOT PRESS'
  onPress={() => console.log('Pressed!')}
/>
```

Here, it is obvious that the button has a color, a title, and something that
happens when it is pressed. JSX supports two categories of input for an
element's props: `'strings'` and `{code}`. Knowing this, we see that if a prop
requires anything other than a string as input, we have to give it code to
represent that value. Props which require a number, for example, look like this:

```js
<TouchableOpacity
  activeOpacity={0.4}
/>
```

Furthermore, if a prop requires an object, we need to put that object in curly
braces to indicate that it is code. Taken straight from [React Native's
documentation on the style prop][2], "The `style` prop can be a plain old
JavaScript object." This all serves to describe why the style prop is declared
like this:

```js
<Text
  style={{ color: 'blue' }}
>
  Hello Blue World!
</Text>
```

> Note: styles can also be created using StyleSheets, which can be a good way of
> making your code cleaner. If you decide to use StyleSheets, keep in mind that
> they do not support dynamic styling, meaning you have to override the
> StyleSheet style with new dynamic styles. This may be messier than just using
> inline styling - coder beware!

Now that we have question one answered, we can move on to question two. This
is a question about implementation details, so its answer lies on each
component's [documentation page][1]. Question three is also an implementation
detail, and probably only important to you if you have used HTML or XML in the
past. If you ever find yourself asking a question about how something is
implemented, check its documentation!

With all of this new knowledge under our belts, we can finally start creating
our own React Native components! 🎉

[1]: https://facebook.github.io/react-native/docs/getting-started.html
[2]: https://facebook.github.io/react-native/docs/style.html

## Making Components

A React 'Component' is, in essence, any JavaScript class which inherits from
`React.Component` (see [Week 1][3] for classes and inheritance). As previously
discussed, inheritance leaves a React Component with a number of functions and
variables. We will leave out the implementation details for this class, though
you are more than welcome to [read the documentation][4] yourself. We will
always be declaring our components like this:

```js
import React, { Component } from 'react';
import { Text } from 'react-native';

class MyNewComponent extends Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}
```

though it is possible to declare components like this if you change your import:

```js
import React, from 'react';
import { Text } from 'react-native';

class MyNewComponent extends React.Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}
```

This component is completely useless right now, and we will need to learn more
before we can make it useful. As we go, we will be using some of the classes
that we are given by `Component` to make our new component smarter. The three
most useful things we get from inheritance are a `constructor`, a `render`
function, and a function to `setState`. Let's jump into each in more detail!

> Note: inherited functions should not be declared as arrow functions. They are
> already declared in the class's `this` object because of the Component class,
> so they do not need to be bound. This also creates natural separation between
> the functions you declare and the built-in functions of a component. Neat!

[3]: https://github.com/ArdentLabs/bootcamp-fall-2017/tree/master/week1
[4]: https://facebook.github.io/react/docs/react-component.html

### Constructors

As the name implies, the constructor is called when an instance of your class is
constructed for the first time. You may already be comfortable with constructors
depending on how much programming you have done, but don't worry if the name is
foreign. Constructors are very simple! As discussed during [Week 1][3], we have
to call `Component`'s constructor if we want to override it with our own
constructor:

```js
constructor() {
  super();  // Calls the constructor in Component
  this.state = {
    myFirstState: true,
    favoriteDog: 'German Shepard',
  }
}
```

The main purpose of an overridden constructor is to give a class a default
state. In this case, the class's state contains just two variables: myFirstState
and favoriteDog. You may recognize that the state is an `{ object }`! It is
possible to make a constructor more complex than this, but anything more
complex should generally be stored in its own function. Take this example:

```js
constructor(props) {
  super(props);  // Calls the constructor in Component
  let newProblems = props.problems.map((problem, index) => {
    title: problem.category + ' question #' + index,
    question: problem.question,
  })
  this.state = {
    problems: newProblems,
  }
}
```

We can break this into two functions:

```js
constructor(props) {
  super(props);  // Calls the constructor in Component
  this.state = {
    problems: getProblems(props.problems),
  }
}

getProblems = (problems) => {
  return problems.map((problem, index) => {
    title: problem.category + ' question #' + index,
    question: problem.question,
  })
}
```

This might seem pointless on an example this small, but your diligence in
keeping your constructors readable will pay off when your project has thousands
of lines of code. Our first week of notes is over a thousand lines of Markdown
code on its own!

### Render Functions

Render functions are the part of your code that will look most like your app. A
very simple render function might look like this:

```js
render() {
  return (
    <Text>Simple!</Text>
  );
}
```

This will only return some hard-coded text, so let's make it a little more
interesting! We can display the current day by using the same `{code}` format
that we used before:

```js
render() {
  let today = new Date();
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return (
    <Text>{weekdays[today.getDay()]}</Text>
  );
}
```

As in the example above, code can be put above the render function's return
statement. This allows us to declare variables, format data, and do anything we
can do anywhere else inside of the render function. This is especially useful
for cleaning up prop or state variables. Right now, we have to use prop and
state variables like this:

```js
render() {
  return (
    <Text>{this.props.thepropData}</Text>
    <Text>{this.state.thestateData}</Text>
  );
}
```

We can clean this up by assinging prop/state variables to local variables
instead:

```js
render() {
  const { thePropData }  = this.props;
  const { theStateData } = this.state;
  return (
    <Text>{thepropData}</Text>
    <Text>{thestateData}</Text>
  );
}
```

Consider this actual component I created a few months back:

```js
<StudentOverlay
  enrollment={this.props.screenProps.enrollments[this.state.overlayIndex]}
  width={(this.state.height > this.state.width ? this.state.width : this.state.height) / this.state.numberOfStudentImagesAcross}
  position={{ xOffset: this.state.overlayXOffset, yOffset: this.state.overlayYOffset }}
  close={this.unzoomEnrollment}
  screenHeight={this.state.height}
  screenWidth={this.state.width}
  checkIn={this.handleCheckIn}
  checkIns={this.state.checkIns[this.state.overlayIndex]}
  points={this.state.homeworks[this.state.overlayIndex]}
  index={this.state.overlayIndex}
/>
```

> Hold it back 🤢

Using cleaner variable assingments, it becomes this:

```js
<StudentOverlay
  enrollment={enrollments[overlayIndex]}
  width={(height > width ? width : height) / numberOfStudentImagesAcross}
  position={{ xOffset: overlayXOffset, yOffset: overlayYOffset }}
  close={this.unzoomEnrollment}
  screenHeight={height}
  screenWidth={width}
  checkIn={this.handleCheckIn}
  checkIns={checkIns[overlayIndex]}
  points={homeworks[overlayIndex]}
  index={overlayIndex}
/>
```

> Much better 🙂

### Component State

By now, we have learned how to create a default component state in the
`constructor`, but we still can't change any of our state variables!

Of course, we could just assign them like any other variable...

```js
this.state.favoriteDog = 'Dachshund';
```

But that would be **VERY BAD** and **you should never do this**!!! React states
are an integral part of the update cycle of their components - **when the state
is updated using `setState`, that component is told to re-render to show its
changes**. If you assign state variables *manually*, the things the user sees
will not update to reflect their changes. This is why we use `setState`!
Recreating the last command using `setState`, we have:

```js
this.setState({
  favoriteDog: 'Dachshund',
});
```

This function can then be passed to other components, and we can use the class's
state to keep track of any changes that need to be re-rendered. The easiest use
case for state variables is on a login screen:

```js
constructor() {
  super();
  this.state = {
    username: '',
    password: '',
  }
}

render() {
  const { username, password } = this.state;
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius: 5,
        }}
        onChangeText={(newUsername) => this.setState({username: newUsername})}
        value={username}
      />
      <View style={{ height: 5 }} />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius: 5,
        }}
        onChangeText={(newPassword) => this.setState({password: newPassword})}
        value={password}
      />
    </View>
  );
}
```

We can also abuse the fact that the render function will only update when the
state is updated to automatically check if a username/password combo is valid:

```js
constructor() {
  super();
  this.state = {
    username: '',
    password: '',
  }
}

render() {
  const { username, password } = this.state;
  const { logins } = this.props

  let isValid = false;
  if (logins[username] === password)
    isValid = true;
  .
  .
  .
}
```

Now that you know how to use JSX and design your own React Components, the real
fun begins! Head on over to the [GitHub page for MathApp][5] to download the
source and prepare our first app!

[5]: https://github.com/ArdentLabs/MathApp

# Week 2 Review + Assignments

Another week under our belts! Now that we have touched some React Native code,
we can really get to the meat of the course. In class this week, we designed a
screen to display English questions but left the `Math` screen undefined.

Your homework assignment this week has two parts:

1. Create the MathApp's `Math` screen! You should keep in mind that its fields are
defined differently than those in the `English` screen - you can find the format
of each on the [GitHub](https://github.com/ArdentLabs/MathApp) page.

> Tip: You'll need to look at the React Native documentation for [TextInput][6].
> It's the only way that you'll be able to get reasonable input from the user
> for this type of problem.

[6]: https://facebook.github.io/react-native/docs/textinput.html

> Tip: `TextInput` requires the use of component states! The documentation shows
> an example of how to use `this.setState` in conjunction with `TextInput`.

> Tip: My TextButton component has four props you should care about: `title`,
> `style`, `disabled`, and `onPress`. You may not recognize `disabled`; it takes
> in a boolean value and disables the button if the boolean is true.

2. Improve upon the `Start` screen so that the user is able to select different
levels of questions, and select a random question that matches the level that is
selected. I am leaving this one intentionally vague, but I will tell you that
React Native has a [Picker][7] component that you may find useful.

[7]: https://facebook.github.io/react-native/docs/picker.html

Don't worry too much if you can't complete this homework assignment - we have
only started learning React Native code so it may be quite challenging. I will
be checking each person's version of the app at the start of class, and I will
go over one possible solution as well.

In other news, I will be checking the results of the poll tomorrow evening and
will decide when office hours will be held based on that. Even if you can't make
it to office hours, I will make sure to check Slack several times a day to
answer any questions you may have!

Have a great week,

-Dallas
