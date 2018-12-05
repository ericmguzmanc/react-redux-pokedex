import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import './styles/App.css';
import PokeApp from './PokeApp';

const App = () => (
  <Provider store={store}>
    <PokeApp />
  </Provider>
);

export default App;
