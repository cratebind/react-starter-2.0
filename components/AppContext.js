import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  user: {},
};

const AppContext = React.createContext({
  state: initialState,
});

class AppProvider extends Component {
  state = {
    ...initialState,
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  setUser = user => {
    this.setState({ user });
  };

  render() {
    const { children } = this.props;
    const { notifications, modalOpen, modalComponent } = this.state;
    return (
      <AppContext.Provider
        value={{
          state: { ...this.state },
          setUser: this.setUser,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;
export { AppContext, AppConsumer };
export default AppProvider;
