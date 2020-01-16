import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function SignupForm({ name, surname, lastname, email, password, confirmPassword, errors, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  const hasErrors = Object.keys(errors).length !== 0;

  return (
    <div className="signup-form">
      <h3 className="signup-form__title">Registration</h3>
      <TextInput
        placeholder="name"
        name="name"
        value={name}
        error={errors.name}
        onChange={onChange}
      />
      <TextInput
        placeholder="surname"
        name="surname"
        value={surname}
        error={errors.surname}
        onChange={onChange}
      />
      <TextInput
        placeholder="lastname"
        name="lastname"
        value={lastname}
        error={errors.lastname}
        onChange={onChange}
      />
      <TextInput
        placeholder="email"
        name="email"
        value={email}
        error={errors.email}
        onChange={onChange}
      />
      <TextInput
        placeholder="password"
        name="password"
        type="password"
        value={password}
        error={errors.password}
        onChange={onChange}
      />
      <TextInput
        placeholder="confirm password"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        error={errors.confirmPassword}
        onChange={onChange}
      />
      <Button
        className="signup-form__btn"
        disabled={hasErrors || isLoading || isSuccessfullySubmitted}
        onClick={onClick}
        text="SUBMIT"
      />
    </div>
  );
}

export default SignupForm;
