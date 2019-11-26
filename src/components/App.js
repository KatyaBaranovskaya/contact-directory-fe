import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
      <SignupPage path="signup" />
    </Router>
  );
}

export default App;
