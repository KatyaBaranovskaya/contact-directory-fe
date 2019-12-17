import React from 'react';

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
    this.updateToken();
  }

  updateToken = () => {
    // localStorage.getItem
    // validate token
    // parse token if it exists
    // setToken in ApiService
    this.setState({ isReady: true });
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
