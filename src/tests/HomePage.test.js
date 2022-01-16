import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/HomePage';

describe('HomePage component test', () => {
  it('Renders the overview of the weather App', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Renders all path of the web App', () => {
    const path = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(path).toMatchSnapshot();
  });
});
