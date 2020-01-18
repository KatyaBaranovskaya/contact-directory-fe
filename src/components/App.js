import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotificationContainer } from 'react-notifications';

import TokenProvider from '../components/handlers/TokenProvider';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ContactsPage from '../pages/ContactsPage';
import UsersPage from '../pages/UsersPage';
import ContactCreationPage from '../pages/ContactCreationPage';
import ContactEditPage from '../pages/ContactEditPage';
import EmailPage from '../pages/EmailPage';
import NotFound from './common/NotFound';
import ErrorPage from '../pages/ErrorPage';

function App() {
  return (
    <TokenProvider>
      <Router>
        <HomePage path="/" />
        <LoginPage path="/login" />
        <SignupPage path="/signup" />
        <ContactsPage path="/contacts" />
        <ContactCreationPage path="/contacts/create" />
        <ContactEditPage path="/contacts/:contactId" />
        <UsersPage path="/users" />
        <EmailPage path="/email" />
        <ErrorPage path="/error" />
        <NotFound default />
      </Router>
      <NotificationContainer/>
    </TokenProvider>
  );
}

export default App;
