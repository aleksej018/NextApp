import React from 'react';
// import {LoginScreen, SignUpScreen} from './src/screens';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <>
      <Provider>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;
