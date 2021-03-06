import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
