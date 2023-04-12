import { addToBasket, decreaseCountProduct, deleteBasket, deleteFromBasket, increaseCountProduct, setBasketSuccess } from './../basket-reducer';
import basketReducer, { addToBasketSuccess, decreaseCountProductSuccess, deleteBasketSuccess, 
    deleteFromBasketSuccess, increaseCountProductSuccess, InintalStateTypeBasket, setBasket } from "../basket-reducer";
import { testBarcodeProductInBasket, testBasket, testProduct, testProductSameInBasket, testStateBasket } from './inintialValue';
import { ProductBasketType } from '../../type/type';
import { mockLocalStorage } from '../../utilsTest/mockLocalStorage';

// jest.mock('localStorage');
// 
let state: InintalStateTypeBasket = testStateBasket;

describe('setBasket', () => {
    beforeEach(() => {
        mockLocalStorage();
      });

    test(`If localStorage has item 'basket', dispatch should be called once`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = setBasket();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        setBasket();
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    test(`If localStorage doesn't have item 'basket', dispatch should not be called`, async () => {

        const thunk = setBasket();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        setBasket();
        expect(dispatchMock).toBeCalledTimes(0); 
    });

    afterEach(() => {
        localStorage.clear();
    });
});

describe('addToBasket', () => {
    beforeEach(() => {
        mockLocalStorage();
      });

    test(`If localStorage has item 'basket' with length 1, and we add another product in basket, length of basket should be 2`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = addToBasket(testProduct, 1);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        addToBasket(testProduct, 1);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket.length).toBe(2); 
    });
    test(`If localStorage has item 'basket' with length 1, and we add the same product in basket, length of basket should not change`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = addToBasket(testProductSameInBasket, 1);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        addToBasket(testProductSameInBasket, 1);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket.length).toBe(1); 
    });
    test(`If localStorage has item 'basket', dispatch should be called once`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = addToBasket(testProduct, 1);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        addToBasket(testProduct, 1);
        expect(dispatchMock).toBeCalledTimes(1); 
    });
    test(`If localStorage has not item 'basket', dispatch should be called once`, async () => {
        const thunk = addToBasket(testProduct, 1);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        addToBasket(testProduct, 1);
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    afterEach(() => {
        localStorage.clear();
    });
})

describe('deleteFromBasket', () => {
    beforeEach (() => {
        mockLocalStorage();
      });

    test(`If localStorage has item 'basket' with length 1, and we delete this product in basket, length of basket should be 0`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = deleteFromBasket(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        deleteFromBasket(testBarcodeProductInBasket);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket.length).toBe(0); 
    });
    test(`If localStorage has item 'basket' with length 1, and we delete another product in basket, length of basket should not change`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = deleteFromBasket(0);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        deleteFromBasket(0);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket.length).toBe(1); 
    });
    test(`If localStorage has item 'basket', dispatch should be called once`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = deleteFromBasket(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        deleteFromBasket(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });
    test(`If localStorage has not item 'basket', dispatch should be called once`, async () => {
        const thunk = deleteFromBasket(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        deleteFromBasket(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    afterEach(() => {
        localStorage.clear();
    });
});

describe('increaseCountProduct', () => {
    beforeEach (() => {
        mockLocalStorage();
      });

    test(`If localStorage has item 'basket', and we increase count this product in basket, count of this product should be 2`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = increaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        increaseCountProduct(testBarcodeProductInBasket);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket[0].count).toBe(2); 
    });
    test(`If localStorage has item 'basket', and we increase count another product in basket, count of this product should be 1`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = increaseCountProduct(0);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        increaseCountProduct(0);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket[0].count).toBe(1); 
    });
    test(`If localStorage has item 'basket', dispatch should be called once`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = increaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        increaseCountProduct(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });
    test(`If localStorage has not item 'basket', dispatch should be called once`, async () => {
        const thunk = increaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        increaseCountProduct(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    afterEach(() => {
        localStorage.clear();
    });
});

describe('decreaseCountProduct', () => {
    beforeEach (() => {
        mockLocalStorage();
      });

    test(`If localStorage has item 'basket' with count of product 1, and we decrease count this product in basket, count of this product should not change`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = decreaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        decreaseCountProduct(testBarcodeProductInBasket);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket[0].count).toBe(1); 
    });
    test(`If localStorage has item 'basket' with count of product 1, and we decrease count another product in basket, count of this product should  should not change`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = decreaseCountProduct(0);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        decreaseCountProduct(0);
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket[0].count).toBe(1); 
    });
    test(`If localStorage has item 'basket', dispatch should be called once`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = decreaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        decreaseCountProduct(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });
    test(`If localStorage has not item 'basket', dispatch should be called once`, async () => {
        const thunk = decreaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        decreaseCountProduct(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    afterEach(() => {
        localStorage.clear();
    });
});

describe('deleteBasket', () => {
    beforeEach (() => {
        mockLocalStorage();
      });

    test(`After delete basket, all product from basket should delete and length of basket should be 0`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = deleteBasket();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        deleteBasket();
        let basketLS = localStorage.getItem('basket');
        let basket: Array<ProductBasketType> = basketLS && JSON.parse(basketLS);
        expect(basket.length).toBe(0); 
    });
    test(`After delete basket, dispatch should be called once`, async () => {
        localStorage.setItem('basket', JSON.stringify(testBasket));
        const thunk = decreaseCountProduct(testBarcodeProductInBasket);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        decreaseCountProduct(testBarcodeProductInBasket);
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    afterEach(() => {
        localStorage.clear();
    });
});

describe('setBasketSuccess', () => {
    let stateBasket: InintalStateTypeBasket;
    beforeEach(() => {
        stateBasket = basketReducer({basket: []}, setBasketSuccess(testBasket));
    });

    test('If we set basket with one product, length of basket should be 1', () => {
        expect(stateBasket.basket.length).toBe(1);
    });
});
 
describe('addToBasketSuccess', () => {
    test('After adding product in basket with length 1, new length should be 2', () => {
        let stateBasket: InintalStateTypeBasket = basketReducer(state, addToBasketSuccess(testProduct, 1));
        expect(stateBasket.basket.length).toBe(2);
    });

    test('if product is in a basket, new product should not be added', () => {
        let stateBasket: InintalStateTypeBasket = basketReducer(state, addToBasketSuccess(testProductSameInBasket, 1));
        expect(stateBasket.basket.length).toBe(1);
    });
});

describe('deleteFromBasketSuccess', () => { 
    test('After deleting product if product is in a basket with length basket 2, product should delete, new length should be 1', () => {
        let stateAddBasket: InintalStateTypeBasket = basketReducer(state, addToBasketSuccess(testProduct, 1));
        expect(stateAddBasket.basket.length).toBe(2);
        let stateDeleteProduct: InintalStateTypeBasket = basketReducer(stateAddBasket,
            deleteFromBasketSuccess(testBarcodeProductInBasket));

        expect(stateDeleteProduct.basket.length).toBe(1);
    });

    test('After deleting product if product is not in a basket with length basket 1, product should not delete, and lenght shoul not change', () => {
        let stateBasket: InintalStateTypeBasket = basketReducer(state, deleteFromBasketSuccess(0));
        expect(stateBasket.basket.length).toBe(1);
    });
})

describe('increaseCountProductSuccess', () => {

    test('If count of product = 1, after increase, count should be 2', () => {
        let stateBasket: InintalStateTypeBasket = basketReducer(state,
            increaseCountProductSuccess(testBarcodeProductInBasket));

        expect(stateBasket.basket[0].count).toBe(2);
    });
});

describe('decreaseCountProductSuccess', () => {

    test(`If count of product 1, and we decrease count this product in basket, count of this product should not change`, () => {
        let stateBasket = basketReducer(state,
            decreaseCountProductSuccess(testBarcodeProductInBasket));

        expect(stateBasket.basket[0].count).toBe(1);
    });

    test(`If count of product 2, and we decrease count this product in basket, count of this product should be decrease and equal = 1`, () => {
        let stateIncreaseCount = basketReducer(state,
            increaseCountProductSuccess(testBarcodeProductInBasket));
        expect(stateIncreaseCount.basket[0].count).toBe(2);

        let stateDecreaseCount = basketReducer(stateIncreaseCount,
            decreaseCountProductSuccess(testBarcodeProductInBasket));

        expect(stateDecreaseCount.basket[0].count).toBe(1);
    });
})

describe('deleteBasketSuccess', () => {
    test('all product should be delete', () => {        
        let stateBasket = basketReducer(state, deleteBasketSuccess());
        expect(stateBasket.basket.length).toBe(0);
    });
});