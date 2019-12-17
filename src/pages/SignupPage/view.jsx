import React from 'react';

import Page from '../../components/common/Page';
import './style.css';
import SignupForm from './components/SignupForm';

function SignupView({ name, surname, lastname, email, password, confirmPassword, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <Page className="signup-page-content">
      <SignupForm
        name={name}
        surname={surname}
        lastname={lastname}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default SignupView;
