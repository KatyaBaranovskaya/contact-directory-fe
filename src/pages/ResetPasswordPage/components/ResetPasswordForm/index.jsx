import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import './style.css';

function ResetPasswordForm({ password, confirmPassword, onChange, onClick }) {
  return (
    <div className="reset-form">
      <h3 className="reset-form__title">Reset Password</h3>
      <TextInput className="reset-form__password" name="password" value={password} onChange={onChange} />
      <TextInput className="reset-form__password" name="confirmPassword" type="confirmPassword" value={confirmPassword} onChange={onChange} />
      <Button className="reset-form__btn" onClick={onClick} />
    </div>
  );
}

export default ResetPasswordForm;
