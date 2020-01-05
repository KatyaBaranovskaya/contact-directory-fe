import React  from 'react';

import { TextInput, Button } from '../../../../components/common';
import Textarea from '../../../../components/common/Textarea';
import './style.css';

function EmailForm({ emails, title, message, isLoading, isSuccessfullySubmitted, onChange, onClick }) {
  return (
    <div className="email-form">
      <h3 className="email-form__title">EMAIL</h3>
      <TextInput
        className="email-form__emails-input"
        placeholder="Emails"
        name="emails"
        value={emails}
        onChange={onChange}
      />
      <TextInput
        className="email-form__title-input"
        placeholder="Title"
        name="title"
        value={title}
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
        disabled={isLoading || isSuccessfullySubmitted}
        onClick={onClick}
        text="SUBMIT" />
    </div>
  );
}

export default EmailForm;
