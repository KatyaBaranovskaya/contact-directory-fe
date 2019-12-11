import React from 'react';

import Page from '../../components/common/Page';
import ResetPasswordForm from './components/ResetPasswordForm';
import './style.css';

function ResetPasswordView({ password, confirmPassword, onChange, onClick }) {
  return (
    <Page className="reset-page-content">
      <ResetPasswordForm
        password={password}
        confirmPassword={confirmPassword}
        onChange={onChange}
        onClick={onClick}
      />
    </Page>
  );
}

export default ResetPasswordView;
