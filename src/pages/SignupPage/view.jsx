import React from 'react';

import Page from '../../components/common/Page';
import './style.css';
import SignupForm from './components/SignupForm';

function SignupView({ name, surname, email, password, confirmPassword, onChange, onClick }) {
  return (
    <Page className="signup-page-content">
      <SignupForm
        name={name}
        surname={surname}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default SignupView;
