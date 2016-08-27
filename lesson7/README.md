# Lesson 7: Defintion files Part 1 - Creating Definitions for your existing Javascript files

## Installation

1. Install typescript `npm install -g typescript` or if you have installed typescript globally already use go to directory and command `npm link typescript`
2. Install webpack globally `npm install -g webpack` if you haven't do so yet
3. Setup *lesson7* as npm project by going to its directory and typing `npm install` to install setup based on *package.json*.

## Deployment/Trying it out

1. In *lesson7* directory, command `webpack` to build *dist/bundle.js* so that *index.html* can access it via src tag as specified
2. Copy path or type file directory of *index.html* in browser preferrably on chrome.

## Typescript Defintions

As mentioned in [Typescript](https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html) one of its major design goal 
was to make it possible for you to safely and easily use existing JavaScript libraries 
in TypeScript. TypeScript does this by means of declaration. In this lesson we explore how we can actually do this on our current setup 
of Typescript Project using Webpack as module bundler.

Before we proceed with hands on code we must remember that **Typescript defintion files contain only declaration**. The implementation for 
this declarations would be on the javascript files that we try to incorporate on our project. In Typescript we call this **Ambient Definitions**.

## Creating a Defintion file for our existing project

In this lesson's main project directory *lesson7* under external modules we have a custom javascript file *index.js* under qoutez. To wrap it 
with types (to take leverage of intellisense that comes with TypeScript) we create an equivalent defintion file *index.d.ts*. 

...To be continued.


