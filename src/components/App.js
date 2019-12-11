import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ContactsPage from "../pages/ContactsPage";
import UsersPage from "../pages/UsersPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ContactDetailPage from "../pages/ContactDetailPage";
import EmailPage from "../pages/EmailPage";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
      <SignupPage path="signup" />
      <ResetPasswordPage path="reset-password" />
      <ContactsPage path="contacts" />
      <ContactDetailPage path="contact-detail" />
      <UsersPage path="users" />
      <EmailPage path="email" />
    </Router>
  );
}

export default App;
