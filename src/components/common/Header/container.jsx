import React from 'react';
import { navigate } from '@reach/router';

import HeaderView from './view';
import { APP_LIFE_CYCLE_EVENTS, AppLifecycle } from '../../../services/events/appLifecycle';

class HeaderContainer extends React.Component {

  handleLogoutClick = () => {
    AppLifecycle.emit(APP_LIFE_CYCLE_EVENTS.LOGOUT, () => navigate('/login'));
  };

  render() {
    const { isAuthorized, className } = this.props;

    return (
      <HeaderView
        isAuthorized={isAuthorized}
        className={className}
        onLogoutClick={this.handleLogoutClick}
      />
    );
  }
}

export default HeaderContainer;
