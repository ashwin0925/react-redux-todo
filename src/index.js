import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import "./style.css";
import App from './App';

store.subscribe(() => {
  localStorage.setItem("myTodos", JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
