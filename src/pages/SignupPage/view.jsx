import React from 'react';

import Page from '../../components/common/Page';
import SignupForm from './components/SignupForm';
import './style.css';

function SignupView({ name, surname, lastname, email, password, confirmPassword, errors, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <Page className="signup-page__content">
      <SignupForm
        name={name}
        surname={surname}
        lastname={lastname}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        errors={errors}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default SignupView;
