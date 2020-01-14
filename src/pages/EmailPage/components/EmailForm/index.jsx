import React  from 'react';

import { TextInput, Button, Textarea } from '../../../../components/common';
import './style.css';

function EmailForm({ emails, title, message, errors, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  const hasErrors = Object.keys(errors).length !== 0;

  return (
    <div className="email-form">
      <h3 className="email-form__title">EMAIL</h3>
      <TextInput
        className="email-form__emails-input"
        placeholder="Emails"
        name="emails"
        value={emails}
        error={errors.emails}
        onChange={onChange}
      />
      <TextInput
        className="email-form__title-input"
        placeholder="Title"
        name="title"
        value={title}
        error={errors.title}
        onChange={onChange}
      />
      <Textarea
        className="email-form__message-textarea"
        name="message"
        placeholder="Message"
        value={message}
        onChange={onChange}
      />
      <Button
        disabled={hasErrors || isLoading || isSuccessfullySubmitted}
        onClick={onClick}
        text="SUBMIT" />
    </div>
  );
}

export default EmailForm;
