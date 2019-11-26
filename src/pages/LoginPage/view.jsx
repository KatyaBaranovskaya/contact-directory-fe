import React from 'react';

import Page from '../../components/common/Page';
import LoginForm from './components/LoginForm';
import './style.css';

function LoginPageView({ email, password, onChange, onClick }) {
  return (
    <Page>
      <LoginForm
        email={email}
        password={password}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default LoginPageView;
