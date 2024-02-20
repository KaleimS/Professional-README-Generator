import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import fileURLToPath from "url";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter a title for your Professional Readme.",
  },
  {
    type: "input",
    name: "Description",
    message: "What is the purpose of this project?",
  },
  {
    type: "input",
    name: "table of contents",
    message: "Table of contents",
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is required to use this app/project?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What License does your project use?",
    choices: [
      "MIT License",
      "AFL-3.0",
      "Apache-2.0",
      "BSL 1.0",
      "BSD-2-Clause",
      "CC0-1.0",
    ],
  },
  {
    type: "input",
    name: "credits",
    message:
      "Were there any collaborators that you would like to include on your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are some tests for application/how do you run it?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github Username?",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Were there any collaborators that you would like to include on your project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
