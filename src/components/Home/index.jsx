import React from 'react';

const Home = () => (
  <React.Fragment>
    <p>CRUD Example with React, Mongo, Node and Express !</p>
    <span>This app includes: </span>
    <ul>
      <li>Third party UI integration (bootstrap, semanticUI,  etc…)</li>
      <li> Coding standard ( extending airbnb style Guide)</li>
      <li> Linting for javascript/ES6</li>
      <li> Linting for sass/less</li>
      <li> Lintining for Accessibility</li>
      <li> JSDoc for documentation.</li>
      <li> Precommit git hook to prevent commit in case any violation in codding standard</li>
      <li>
        Unit test using Jest.
        <ul>
          <li>Component test</li>
          <li> Mocking api </li>
          <li> api test </li>
          <li> Routing test </li>
        </ul>
      </li>
      <li>
        E2E test using cypress : configure to open in Chrome and electron browser to run UI test.
        <ul>
          <li> Creating Fixture</li>
          <li> Creating Command</li>
          <li> UI test ( Font, color, etc..)</li>
          <li> Workflow test</li>
          <li> Accessibility test</li>
          <li> Automatic screen capture for evidence</li>
        </ul>
      </li>
      <li> Test and Build strategy</li>
      <li> Configuration to execute and integrating all of above.</li>
      <li>
        Redux (Expert discourage to use redux with react new version(16.6 onward)
        until it is necessary )
      </li>
      <li> DEVOPS ( SDLC Lifecycle with Jenkins(open source))</li>
      <li> ReadMe file explaining to do a local setup and run this application.</li>
    </ul>
  </React.Fragment>
);

export default Home;
