import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('React app is working as expected', () => {
  test('renders App function', () => {
    const mapp = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(mapp).toMatchSnapshot();
  });
});
