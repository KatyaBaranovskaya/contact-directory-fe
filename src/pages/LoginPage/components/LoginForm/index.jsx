import React  from 'react';
import { Link } from '@reach/router';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function LoginForm({ email, password, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <div className="login-form">
      <h3 className="login-form__title">SIGN IN</h3>
      <TextInput placeholder="email" name="email" value={email} onChange={onChange} />
      <TextInput placeholder="password" name="password" type="password" value={password} onChange={onChange} />
      <Button disabled={isLoading || isSuccessfullySubmitted} onClick={onClick} text="SUBMIT" />
      <Link className="login-form__link" to="/signup">sign up</Link>
    </div>
  );
}

export default LoginForm;
