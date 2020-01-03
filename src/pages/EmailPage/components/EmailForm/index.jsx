import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import Textarea from '../../../../components/common/Textarea';
import './style.css';

function EmailForm({ email, text, onChange, onClick }) {
  return (
    <div className="email-form">
      <h3 className="email-form__title">EMAIL</h3>
      <TextInput
        className="email-form__email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Textarea
        className="email-form__text"
        name="text"
        value={text}
        onChange={onChange}
      />
      <Button className="email-form__btn" onClick={onClick} />
    </div>
  );
}

export default EmailForm;
