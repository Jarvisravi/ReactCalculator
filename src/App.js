import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Calculator from './components/Calculator';

type Props = {};
class App extends Component<Props> {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex : 1 }}>
          <Calculator />
        </View>
      </Provider>
    );
  }
}

export default App;
