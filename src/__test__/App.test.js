import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "../AppRoute";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
