/**
 * @description Application bootstrap.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './store/Root';
import ErrorBoundry from './ErrorBoundary';
import registerServiceWorker from './registerServiceWorker';

// Render the application as normal.
ReactDOM.render(
  <Root>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Root>, document.getElementById('root')
);
registerServiceWorker();
