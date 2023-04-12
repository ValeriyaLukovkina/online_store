import BasketContainer from '../../basket/basketContainer';
import React from 'react';
import configureStore from 'redux-mock-store'
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux, renderWithReduxEmty } from '../helpers/renderWithRedux';
import thunk from 'redux-thunk';
import { testBasketProduct } from '../../../redux/test/inintialValue';
import { decreaseCountProduct, deleteFromBasket, increaseCountProduct } from '../../../redux/basket-reducer';
import { Provider } from 'react-redux';
import BasketProduct from '../../basket/basketProduct';
// import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';

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
});

describe('Component basket product', () => {
  // let container = null;
  // beforeEach(() => {
  //   container = document.createElement("div");
  //   document.body.appendChild(container);
  // });

  // afterEach(() => {
  //   unmountComponentAtNode(container);
  //   container.remove();
  //   container = null;
  // });


  test('Content in count should be similar product count', () => {

    render(<BasketProduct product={testBasketProduct} />);
    expect(screen.queryByTestId('product-count').textContent).toBe(`${testBasketProduct.count}`);

  });

  test('Content in price should be count rigthly and equal 1 * 972 = 972', () => {

    render(<BasketProduct product={testBasketProduct} />);
    let showedPrice = screen.queryByTestId('product-price').textContent
    expect(parseInt(showedPrice)).toBe(972);

  });

  test(`If description has length more then 200, length should cut to 200 and add '...'`, () => {

    render(<BasketProduct product={testBasketProduct} />);
    let showedDecription = screen.queryByTestId('product-decription').textContent;
    let descriptionMustShowed = testBasketProduct.description.slice(0, 200) + '...'
    expect(showedDecription).toBe(descriptionMustShowed);

  });

  test(`If description has length less then 200, length should stay the same`, () => {
    let testBasketProductWithCutDescription = {
      ...testBasketProduct,
      description: testBasketProduct.description.slice(0, 199)
    }
    render(<BasketProduct product={testBasketProductWithCutDescription} />);
    let showedDecription = screen.queryByTestId('product-decription').textContent;
    expect(showedDecription).toBe(testBasketProductWithCutDescription.description);
  });
});