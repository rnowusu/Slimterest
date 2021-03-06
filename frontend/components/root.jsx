import React from 'react';
import { Provider } from 'react-redux';
import App from './App'
import { HashRouter } from 'react-router-dom';
//ask if provider has a store function/prop

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  );
};

export default Root;
