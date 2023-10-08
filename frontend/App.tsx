import React from 'react';
// import {LoginScreen, SignUpScreen} from './src/screens';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/components/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
