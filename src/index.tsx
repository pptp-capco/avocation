import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ErrorBoundary} from "./ErrorBoundary";


ReactDOM.render(
  <ErrorBoundary>
    <StrictMode>
      <App/>
    </StrictMode>
  </ErrorBoundary>,
document.getElementById('root')
)
;

