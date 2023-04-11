import BasketContainer from '../../basket/basketContainer';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux, renderWithReduxEmty } from '../helpers/renderWithRedux';

describe('order complete in basket', () => {
  test('if basket not empty click on button should show modal complete', () => {
    renderWithRedux(<MemoryRouter>
      <BasketContainer />
    </MemoryRouter>)
    const btn = screen.getByTestId('btn-order-complete');
    expect(screen.queryByTestId('modal-order-complete')).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId('modal-order-complete')).toBeInTheDocument();
  });

  test('if basket empty click on button should not show modal', () => {
    renderWithReduxEmty(<MemoryRouter>
      <BasketContainer />
    </MemoryRouter>)
    const btn = screen.getByTestId('btn-order-complete');
    expect(screen.queryByTestId('modal-order-complete')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('modal-order-complete')).toBeNull();
  });
})