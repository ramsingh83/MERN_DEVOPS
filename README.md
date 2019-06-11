### React Framework for application development

## development setup

* `npm install` to install npm packages.

* Start dev server using `npm start`. This will open app at url http://localhost:3000 .

* For production build execute `npm run build`. this will create a build directory.

* Unit testing will watch all your changes in the test files. Use below command.
  `npm test`

* To generate code coverage execute below command and this will create a coverage directory.
 `npm run doc`.

* To run e2e integration test execute any one of below command. Application should be running at specified URL to execute integration test.
  `npm run e2e`
  `npm run e2e:chrome`
  `npm run e2e:headed`

### Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* `webpack/webpack.dev.js` config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Eslint config `/.eslintrc`.
* Browsers list config `/.browserslistrc`.
* Cypress config `/cypress.config`.

## Accessibility
 react-a11y npm plugin is used for accessibility test.
 read more on https://reactjs.org/docs/accessibility.html and https://a11yproject.com/checklist.html .
 sampl usage is given here https://github.com/reactjs/react-a11y .

## Styling 
* Keep your common styles in `src/scss` folder and components specific style should be along with components.

## Setting Node server with Mongo DB
* Download portable version of mongoDB from  https://www.mongodb.com/download-center/community.
* Create a config file anywhere on machine to start mongodb. a sample config file.
Content of config file would be dbpath, port and logpath :
  "dbpath = D:\LearningProjects-Practicle\MongoBDSetup\database
  port = 27017
  logpath = D:\LearningProjects-Practicle\MongoBDSetup\logs\mongo.log"
you can save this config with any ext.
* To start mongo DB navigate to mongodb  bin folder e. g. D:\LearningProjects-Practicle\MongoBDSetup\mongodb-win32-x86_64-2008plus-ssl-4.0.8\bin> then execute mongod with configuration file (include path for db, log and port number) e. g. mongod.exe --config="C:\D\LearningProjects\mongoDB\config.txt"

## Start node server
  navigate to backend folder in your project directory and run below command
  `node server`
  you will see below message on console after successfull connection.
  `server is running on port:4000`
  `Database is connected`

## CI/CD
  Follow the instruction given on https://medium.com/@bezgachev/6-simple-steps-to-automatically-test-and-deploy-your-javascript-app-to-github-pages-c4c32a34bcb1