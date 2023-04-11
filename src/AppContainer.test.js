import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContainer from './AppContainer';
import { MemoryRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


test('renders learn react link', () => {
  // render(
  //   <Provider store={store}>
  //       <AppContainer />
  //   </Provider>
  // )
  // const linkElement = screen.getByText(/hello/i);
  // expect(linkElement).toBeInTheDocument();
});
