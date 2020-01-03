import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function SignupForm({ name, surname, lastname, email, password, confirmPassword, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <div className="signup-form">
      <h3 className="signup-form__title">Registration</h3>
      <TextInput
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <TextInput
        placeholder="surname"
        name="surname"
        value={surname}
        onChange={onChange}
      />
      <TextInput
        placeholder="lastname"
        name="lastname"
        value={lastname}
        onChange={onChange}
      />
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
      <TextInput
        placeholder="confirm password"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={onChange}
      />
      <Button
        disabled={isLoading || isSuccessfullySubmitted}
        onClick={onClick}
        text="SUBMIT"
      />
    </div>
  );
}

export default SignupForm;
