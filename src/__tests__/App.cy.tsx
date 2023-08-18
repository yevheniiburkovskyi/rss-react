import App from '../App';
import { mount } from '@cypress/react18';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('<App>', () => {
  it('mounts', () => {
    mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
