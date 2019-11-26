import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function LoginForm({ email, password, onChange, onClick }) {
  return (
    <div className="login-form">
      <h3 className="login-form__title">SIGN IN</h3>
      <TextInput className="login-form__email" name="email" value={email} onChange={onChange} />
      <TextInput className="login-form__password" name="password" type="password" value={password} onChange={onChange} />
      <Button className="login-form__btn" onClick={onClick} />
    </div>
  );
}

export default LoginForm;
