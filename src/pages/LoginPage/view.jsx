import React from 'react';

import { Page, TextInput } from '../../components/common';
import './style.css';

function LoginPageView({ email, onChange }) {
  return (
    <Page>
      <TextInput name="email" value={email} onChange={onChange} />
    </Page>
  );
}

export default LoginPageView;
