import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function SignupForm({ name, surname, lastname, email, password, confirmPassword, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <div className="signup-form">
      <h3 className="signup-form__title">Registration</h3>
      <TextInput className="signup-form__name" placeholder="name" name="name" value={name} onChange={onChange} />
      <TextInput className="signup-form__surname" placeholder="surname" name="surname" value={surname} onChange={onChange} />
      <TextInput className="signup-form__lastname" placeholder="lastname" name="lastname" value={lastname} onChange={onChange} />
      <TextInput className="signup-form__email" placeholder="email" name="email" value={email} onChange={onChange} />
      <TextInput className="signup-form__password" placeholder="password" name="password" type="password" value={password} onChange={onChange} />
      <TextInput className="signup-form__confirmPassword" placeholder="confirm password" name="confirmPassword" type="password" value={confirmPassword} onChange={onChange} />
      <Button className="signup-form__btn" disabled={isLoading || isSuccessfullySubmitted} onClick={onClick} text="SUBMIT" />
    </div>
  );
}

export default SignupForm;
