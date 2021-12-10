import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/Store";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

import './assets/fonts/Vazir.ttf';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();