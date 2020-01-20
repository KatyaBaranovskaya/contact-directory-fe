import React from 'react';

import Page from '../../components/common/Page';
import LoginForm from './components/LoginForm';
import './style.css';

function LoginPageView({ email, password, error, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <Page className="login-page__content">
      <LoginForm
        email={email}
        password={password}
        error={error}
        isLoading={isLoading}
        isSuccessfullySubmitted={isSuccessfullySubmitted}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default LoginPageView;
