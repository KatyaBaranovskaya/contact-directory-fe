import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
    </Router>
  );
}

export default App;
