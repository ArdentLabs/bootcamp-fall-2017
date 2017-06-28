
#### A text editor: Vim

You'll eventually want to edit files from the command line. Vim is one such tool that will allow you to do so, and is the editor of choice for many developers and power users. It's a *modal* text editor: meaning you have multiple *modes* of operation.

Mode   | Description
------ | ---------------------------------------------------------
Normal | Move the cursor. This is the default mode.
Insert | Insert text (this is the only mode on most text editors).
Visual | Highlight text.

 > Run `vim test.txt` then don't touch anything.

When you first launch `vim`, you'll be in *Normal* mode. It's different than anything you've ever used before, but don't freak out. It's okay. I swear. While you're in Normal mode, you can move the cursor around using the arrow keys; however, you won't be able to insert text yet.

Press `i` to enter *Insert* mode. Now `vim` will begin feel like a normal text editor: you can insert text, move your cursor with the arrow keys, and remove text with backspace. Press Escape on your keyboard (commonly referred to as `<Esc>`) to return back to Normal mode.

So now we want to save file and quit `vim`. That's how most people get stuck. From within Normal mode, you can execute commands by typing semicolon, followed by your command, then pressing Enter (commonly referred to as `<CR>`). For saving the file, type `:w` then press Enter. For exiting `vim`, type `:q` then press Enter.

Normal Mode Command | Description
------------------- | -----------
`i`                 | Enter *Insert* mode
`:w <CR>`           | Write to file
`:q <CR>`           | Quit `vim`


## Project management

When your code base begins to grow, you'll find that it'll be harder to keep track of what you've done. It's inevitable. **Version controlling** is one way of cope with your code's **fate to become more complex**. By keeping track of all changes that you've made to your code, you'll be able to *jump* back in time to view your codebase as it was before. This makes it easier to quickly fix mistakes. In addition, you also have the opportunity to comment the changes to the code.

 > Read more about the difficulties of developing software in Frederick Brook's [No Silver Bullet](http://faculty.salisbury.edu/~xswang/Research/Papers/SERelated/no-silver-bullet.pdf) (optional)


### Git
 > Git allows groups of people to work on the same documents (often code) at the same time, and without stepping on each other's toes. ([Try Git](try.github.io))

The most popular version control system of today is **Git**. As most of the tools that we will be using, it is used on the *command line*. I'll be going over some of the basic git commands here, but if you're on a Mac or Linux operating system, you can easily view the full documentation by executing `man git`.

[Install Git](https://git-scm.com/download) on your local machine before continuing.

 - Git works on the idea of a **repository**, a collection of code.
 - All changes to the code are encapsulated in a **commit**, which consists of a list of what you've changed and a description.
 - Collaborators can **pull** the repo to get the latest commits and **push** to upload any new commits they have made.

Git has a *branching model*, which allows you to diverge from the main line of development and continue to do work without messing with that main line by making a different **branch**. As you can imagine, this is helpful for making experimental, breaking changes while keeping a *version* of your code that still works. By convention, we use the *master* branch to store the *stable*, working version of our code. We also use a *develop* branch for all the new, untested changes.
 > This specific branching model is called [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/)

<img
  alt="Branches visualized"
  src="https://wac-cdn-a.atlassian.com/dam/jcr:746be214-eb99-462c-9319-04a4d2eeebfa/01.svg?cdnVersion=ey"
  width="600px"
/>

Git is designed to be *decentralized*; each user has their own local copy of the full version history. This allows you to decide who's repository you want to work with, allowing you to decide your **"remote"** repository. The default remote repository is known as the **origin**. You will most likely see these keywords thrown around when linking a repository to GitHub (more on this later).

![Decentralized visualized](http://nvie.com/img/centr-decentr@2x.png)

> Compare this with centralized version control systems (such as `svn`) that have a single, enforced "remote" repository, whereas each user doesn't have access to the full version history. Read more about how Git is decentralized on [StackExchange](https://softwareengineering.stackexchange.com/questions/315252/why-does-everyone-use-git-in-a-centralized-manner) (optional).

Here are some basic commands that'll get you started.

Command  | Description
-------- | -----------
init     | Create a new repository (creates the `.git` directory)
status   | View the `diff` status of the repository
add      | Stage a file to be committed
commit   | Annotate the changes to the staged files **(BE DESCRIPTIVE)**
push     | Upload commits to *origin*
pull     | Get the latest commits

Here the slightly more advanced commands relating to branching.

Command  | Description
-------- | -----------
branch   | List, add, or remove branches
checkout | Change which branch you're in
merge    | Merge changes between branches

 > Full documentation can be found on the [Reference](https://git-scm.com/docs).

#### Quick Example
```bash
# Create a new directory
mkdir test-app
cd test-app

# Make a file with some text in it
echo Hello World > README.md

# Create a repo
git init

# Set the origin
git remote add origin https://github.com/user/repo.git

# Add the file
git add README.md

# Commit the file, this will open up a text editor
git commit

# ... (Make a DESCRIPTIVE commit message)

# Push to the master branch on the origin server
git push origin master
```


### GitHub
 > [GitHub](https://github.com/) is a development platform inspired by the way you work.

The difference between Git and Github always confuses people at first. So I'll set it straight. You don't need GitHub to use Git. In no way does Git rely on Github, nor is it the official website for Git. GitHub is simply a **hosting service for Git repositories**. There are other hosting services for Git, such as [Bitbucket](https://bitbucket.org/) and [GitLab](https://gitlab.com/), but we're only going to be using GitHub since it's the most popular (but not always the best!)

We will be using GitHub to host the *central repository* for your project, where all of your team members will *push* to and *pull* from.


### Interactive Git demonstration
 > View the repository for the in-class demo on [GitHub](https://github.com/ArdentLabs/try-git)


## Component design


