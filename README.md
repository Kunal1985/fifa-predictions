# Project-AIWPA
An application developed and maintained for ESDS Administration.

## Pre-Requisites
Node JS  
Mongo DB

## Installation
### Install Basic NPM Packages from package.json
`npm install`

### Install packages globally
`npm install bower -g`  
`npm install nodemon -g`  
`npm install gulp -g`  

### Install Bower Packages
`bower install`

## Running the Application
### Start the Mongo DB Server
Navigate to mongo bin directory  
`./mongod.sh` >> Linux  
`./mongod.exe` >> Windows

### Start Gulp for auto-build on file changes
`gulp`

### Start the Node Server
`npm run watch`

NOTE: Once started, file changes would be auto-detected, just refresh the browser URL for changes to reflect

### Accessing the application
http://localhost:3000 >> Index URL  
http://localhost:3000/home >> Home Page URL
