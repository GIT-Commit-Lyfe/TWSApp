import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux';
import MyApp from './src';

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}
