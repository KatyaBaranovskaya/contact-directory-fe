import React from 'react';
import { Link } from '@reach/router';

import { Button, TextInput } from '../../../../components/common';
import './style.css';

function LoginForm({ email, password, error, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <div className="login-form">
      <h3 className="login-form__title">SIGN IN</h3>
      <TextInput
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextInput
        placeholder="password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      />
      {error && (
        <span className="login-form__error-text">{error}</span>
      )}
      <Button
        className="login-form__btn"
        disabled={isLoading || isSuccessfullySubmitted}
        onClick={onClick}
        text="SUBMIT"
      />
      <Link className="login-form__link" to="/signup">sign up</Link>
    </div>
  );
}

export default LoginForm;
