import React, { Component } from 'react';
import Approutes from './Routes/index';
import { store } from './Redux/Store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Approutes />
        </div>
      </Provider>
    );
  }
}

export default App;