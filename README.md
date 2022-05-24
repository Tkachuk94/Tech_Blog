# TechBlog

## Description
The purpose of this web application is to allow the user to post blog posts on a blog-style site.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)

## Installation
In order to begin, the user must git clone this repo. After cloning, the user can get the required techologies to run this app by typing `npm install` into their terminal. 

Then, source the database by running `mysql -u root -p` and then typing `source db/schema.sql;` into the terminal. 

After adding the database, the user must add the seeds by running `node seeds/seed.js` in the terminal. 

Once the following is done, the user can begin the application by running `node server.js`.

## Usage
Once the server is running, the user will first be introduced to the homepage that is showing example blog posts. When the user clicks `Dashboard` or `Login`, the user will be directed to the login screen. After creating an account and/or logging in, the user will be led to the dashboard, where they will be able to create and delete new blog posts. Newly created blog posts are also available to view on the homepage. 

## Screenshot
![screenshot of homepage](./Screenshot.png)
https://trentstechblog.herokuapp.com/

## Technologies Used
* bcrypt
* Sequelize
* dotenv
* Express
* Handlebars
* MySQL2
