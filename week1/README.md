# Week 1: Hello World :wave:
 > `console.log('Hello World');`

## Course background and goals

This course is a jump into the deep end of mobile app development.
Everything you learn in this class will be applicable to the real world,
in a real job. Expectations for you will be high. Read the required
resources that we give you, especially in the first few weeks. If you
feel that you are falling behind, **please talk to us**. There will be
several opportunities for acquiring additional assistance; you will find
office hours and code reviews to be most helpful.

In addition to the amount of work, instructors will be strict on the way
you write your code. Clean, reusable code is an essence of programming
excellence and a main determining factor between a good and bad software
engineer. Code reviews will also serve as instructors' way to find any
stylistic hiccups and assess the structural integrity of your design.


## Communication and coordination
 > It is not distance that keeps people apart, but the lack of communication.

Every tool that we will use during this bootcamp are tools that you would
use on the job. It's important that you use these tools actively; however,
it's even more important to understand how to communicate effectively with
your team and instructors. You will receive an effective communication
evaluation at the end of the course.


### Slack

Throughout the length of the course, we will be using Slack to communicate.
If you followed Week 0's instructions, you should have received an email
invitation already. You will be using Slack to communicate with your classmates,
team members (if you have any), and instructors. If you have a question or
comment relating to the course, send a message on the `#bootcamp` channel. If
you want to schedule office hours, send a direct message to `@puradox`. If
you're on a team, one of the instructors will create a private channel for your
team.

[Download the Slack App](https://slack.com/get) on your phone and laptop to
receive notifications.


### Trello
 > Organize your project into cards.

Trello is a card-based project management application that allows developers
to plan their project from start to finish. This is a great way to communicate
in a team by letting them know what features you have planned out. Team
coordination is also simplified by utilizing card assignment to assign members
to work on different features.

You will be creating a Trello board for your project, before any code has been
created. Instructors will be constantly reviewing your project's Trello board
to assess your progress. It is important that you use this tool while developing
your application, from start to finish. This becomes immensely more important
when working on a team, since features will be coordinated through Trello.

 > View a sample application board: https://trello.com/b/mXh5WQ9E


## Development workflow

All of the development tools that we'll be using will be command-line based.
Thus, using the command line will be an integral part of the course. The commands
that I'll be going over this week assumes that you're on a Linux or Mac machine.
Instructors will be primarily using Mac for development, so it's highly
recommended that you acquire a Mac.

 > Note: Windows does things a little differently. For this reason, you might have
 trouble following along with the notes. Again, I recommend using either Mac or
 Linux for development. Alternatively, you can have a Linux environment on Windows
 through the [Bash on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/about)
 project. If Bash on Windows isn't working out for you, as a last resort,
 [create a virtual machine that runs Ubuntu](https://linus.nci.nih.gov/bdge/installUbuntu.html).

### Working in the command line
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

#### Common commands

Launch a terminal on your local machine and try these commands out.

Command                        | Description
------------------------------ | -----------
`ls`                           | *List* files in the current directory (on Windows, use `dir`)
`cd <DEST>`                    | *Change* directory
`mkdir <NAME>`                 | *Make* a new *directory*
`cp <SOURCE> <DEST>`           | *Copy* a file or directory (use -r for directories)
`rm <FILE>`                    | *Remove* a file or directory (use -rf for directories) (on Windows, use `rem`)
`mv <SOURCE> <DEST>`           | *Move* a file or directory


#### Common directories

Some directories have special names. Here's the ones you should remember.

Name | Description
---- | -----------
.    | Current directory
..   | Previous directory
~    | Home directory
/    | Root directory

# Week 1 Assignments (Also posted on slack)

Heys guys! We survived the first week together, yay! The good news is that we got
the hard part out of the way: setting up your development environment and getting
the app on your device. Now we can focus on actually writing code!

Here's an overview of the steps we took for setting everything up:
1. Download [Node.js](https://nodejs.org/) **v6.11.0**.
2. If you're on Windows, download [Git](https://git-scm.com/) (Mac already has
this installed.) Select "Use Git from the Windows Command Prompt" when prompted,
and leave all other installation settings as their defaults.
3. Run `npm install --global create-react-native-app yarn`. Use the `--global`
flag to specify that you're not installing project-specific packages.
4. Navigate in the command line to where you'd like to place a new project using
`ls` (`dir` on Windows) and `cd`.
5. Run `create-react-native-app BirthdayApp`.
6. Run `cd BirthdayApp`.
7. Run `yarn upgrade` to make sure everything is up-to-date.
8. Run `yarn start` to start up the compiler.
9. Download the Expo Client on your phone.
10. Make sure you're connected to the same WiFi on your computer and phone.
11. Scan the QR code on your phone or tablet using the Expo Client.
12. Open the `App.js` file in your project folder.
13. Get coding!

After setting up, most of your errors received in class were syntax errors.
Don't worry if it's confusing at first. We'll go over the syntax of
JavaScript in class next week. I recommend casually browsing
[Eloquent JavaScript](https://http://eloquentjavascript.net/) in the
meantime.

Here are your assignments for the week:
1. Read the first 5 sections of [React Native Express](https://www.reactnativeexpress.com/).
2. Add the `DatePicker` component to your BirthdayApp from
`react-native-datepicker` (if you haven't already) by running `npm install
--save react-native-datepicker`. This will save `react-native-datetpicker`.
to your project's dependencies, which can be viewed in `package.json`.
Instructions can be found on [their GitHub page](https://github.com/xgfe/react-native-datepicker).
3. Skim the documentation on [JavaScript's Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
4. Change the code of BirthdayApp to do something cool with
`this.state.date`.
5. Post a screenshot on the `#bootcamp` channel.
6. *Optional:* Start an entirely new app called `TodoApp`, which will
be a simple todo list.

For testing purposes, you can run Javascript in the console by running
`node`. This will open up an interactive terminal where you can
experiment with JavaScript's features (such as `Date`).

```
C:\Users\samba>node
> const now = new Date()
undefined
> now
2017-06-25T18:47:22.099Z
<Ctrl-D> to exit
```
