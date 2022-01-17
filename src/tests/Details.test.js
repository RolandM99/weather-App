import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/Details';

describe('Details Component test', () => {
  it('Renders the details of city weather data', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
