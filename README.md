# WORK-IT-DONE

## Table of Contents 
* [Description](#description)
* [Instructions](#instructions)
* [Technologies Utilized](#technologies-utilized)
* [Contributions](#contributions)
* [Questions](#questions)
* [Future Features](#future-features)
* [Collaboration Requests](#collaboration-requests)

## Description

For our project we decided to make a project tracking website. 

Project Requirements:
 * Use Node and Express to create RESTful APIs.
 * Use Handlebars.js as the templating engine.
 * Use MySQL and the Sequelize ORM for the database.
 * Have both GET and POST routes for retrieving and adding new data.
 * Be deployed using Heroku (with data).
 * Use at least one new library, package, or technology that we haven’t discussed.
 * Have a polished UI.
 * Be responsive.
 * Be interactive (i.e., accept and respond to user input).
 * Have a folder structure that meets the MVC paradigm.
 * Include authentication (express-session and cookies).
 * Protect API keys and sensitive information with environment variables.
 * Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming   conventions, indentation, quality comments, etc.).
 * Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).


Based on the above requirements we decided to make a Trello-style kanban board. Each project is equivalant to a workspace, within that project there are tasks that need to be accomplished. These tasks can be moved via drag and drop from one column to another based on the updated state of the task.

**View the application, here:** [Work-it-Done](https://warm-eyrie-07140.herokuapp.com/ "Work-it-Done")

## Instructions 

1. Users who are new to the site should sign up with an email and password.
2. Returning users should log in with the same email and password.
3. Create a project.
4. Add status columns.
5. Add cards to the columns.
6. Move cards from column to column as the current status of the cards change.

## Technologies Utilized
 
 * booststrap
 * MySQL
 * Handlebars
 * Node
 * Express
 * Sequelize
 * JQuery
 * JavaScript
 * HTML
 * CSS

## Contributions

* Victor Weinert - project management (role assignments, scheduling, bug fixes), schema design, seeds, routes, password encryption, Heroku deployment
* Patrick Sebstead - RESTful API design (routes), README
* TJ James - front end mock up, html, css, Handlebars templates, bug fixes
* Lauren Groh - ORM design (models & associations, password encryption), README, PowerPoint slideshow

## Questions

If you have any questions please connect with us through Github. 

* [Victor Weinert](https://github.com/vw0389)
* [Patrick Sebstead](https://github.com/RaiderNationBuilder)
* [TJ James](https://github.com/jamestw13)
* [Lauren Groh](https://github.com/GrohTech)

## Future Features
1. Option to add multiple users per project
2. Google password syncing
3. Integrate other note taking apps
4. Implement states of tasks
5. Integrate weather apps to plan outdoor tasks
6. Implement automatic task movement from column to column

## Collaboration Requests

If you'd like to help implement any of these future features, please get in touch with one of [us](#contributions). 
To test out our project and come up with ideas to propose, follow the instructions, below:  

**Fork repository:**  
```
Click "Fork"
```

**Clone forked repository:**
```
git clone <repository link>
```

**Add npm dependencies:**
```
npm install
```
**Sign into MySQL:**
```
mysql -u root -p
```
**Import database:**
```
source db/schema.sql
```
**Exit MySQL:**
```
quit
```
**Seed database:**
```
npm run seed
```
**Create tables and start server:**
```
npm start
```
**Test Routes**
1. Go to RESTful API client
2. Test GET, POST, PUT, DELETE routes
3. Verify database has been updated in MySQL workbench