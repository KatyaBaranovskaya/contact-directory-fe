import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function SignupForm({ name, surname, lastname, email, password, confirmPassword, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <div className="signup-form">
      <h3 className="signup-form__title">Registration</h3>
      <TextInput className="signup-form__name" name="name" value={name} onChange={onChange} />
      <TextInput className="signup-form__surname" name="surname" value={surname} onChange={onChange} />
      <TextInput className="signup-form__lastname" name="lastname" value={lastname} onChange={onChange} />
      <TextInput className="signup-form__email" name="email" value={email} onChange={onChange} />
      <TextInput className="signup-form__password" name="password" type="password" value={password} onChange={onChange} />
      <TextInput className="signup-form__confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={onChange} />
      <Button className="signup-form__btn" disabled={isLoading || isSuccessfullySubmitted} onClick={onClick} />
    </div>
  );
}

export default SignupForm;
