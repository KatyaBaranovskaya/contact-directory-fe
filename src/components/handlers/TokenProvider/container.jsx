import React from 'react';
import jwtDecode from 'jwt-decode';

import { APP_LIFE_CYCLE_EVENTS, AppLifecycle } from '../../../services/events/appLifecycle';
import ApiService from '../../../services/apiService';

const DEFAULT_VALUE = {
  token: null,
  user: null,
};

export const TokenContext = React.createContext({ ...DEFAULT_VALUE });

class TokenProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      tokenInfo: { ...DEFAULT_VALUE },
    };
  }

  componentDidMount() {
    AppLifecycle.subscribe(APP_LIFE_CYCLE_EVENTS.LOGIN, this.handleLogin);
    AppLifecycle.subscribe(APP_LIFE_CYCLE_EVENTS.LOGOUT, this.handleLogout);
    this.updateTokenInfo();
  }

  componentWillUnmount() {
    AppLifecycle.removeListener(APP_LIFE_CYCLE_EVENTS.LOGIN, this.handleLogin);
    AppLifecycle.removeListener(APP_LIFE_CYCLE_EVENTS.LOGOUT, this.handleLogout);
  }

  handleLogin = (token, callback) => {
    localStorage.setItem('token', token);
    this.updateTokenInfo(callback);
  };

  handleLogout = (callback) => {
    localStorage.removeItem('token');
    this.updateTokenInfo(callback);
  };

  updateTokenInfo = (callback) => {
    const token = localStorage.getItem('token');
    const newState = { isReady: true };

    if (token) {
      const jwtDecoded = jwtDecode(token);
      const user = {
        id: jwtDecoded.jti,
        email: jwtDecoded.sub,
        role: jwtDecoded.permissions,
      };
      newState.tokenInfo = {
        token,
        user,
      };
    } else {
      newState.tokenInfo = { ...DEFAULT_VALUE };
    }

    ApiService.setToken(newState.tokenInfo.token);
    this.setState(newState, callback);
  };

  render() {
    const { children } = this.props;
    const { isReady, tokenInfo } = this.state;

    return (
      <TokenContext.Provider value={tokenInfo}>
        {
          isReady
            ? children
            : null
        }
      </TokenContext.Provider>
    );
  }
}

export default TokenProvider;
