import { catalogAPI } from "../../api/api";
import { mockLocalStorage } from "../../utilsTest/mockLocalStorage";
import catalogReducer, { addProductSuccess, changeProductSuccess, deleteProductSuccess, getCatalog, InitialStateTypeCatalog, setCatalogReducer, setManufacturerList, setProductList, setSort } from "../catalog-reducer";
import { testBarcodeProductInBasket, testChangedProduct, testManufacturerList, testProduct, testProductList, testStateCatalog, testStateCatalogEmpty } from "./inintialValue";

let state: InitialStateTypeCatalog = testStateCatalog;

let stateEmpty: InitialStateTypeCatalog = testStateCatalogEmpty


describe('getCatalog', () => {
    beforeEach(() => {
        jest.spyOn(catalogAPI, 'getCatalog').mockImplementation( () => {
            return Promise.resolve(testProductList)
           });
    });
    
    test('If promise has, dispatch should be called once', async () => {
        const thunk = getCatalog();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        getCatalog();
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    test('If promise has, localStorage should not be NaN', async () => {
        mockLocalStorage();
        const thunk = getCatalog();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        getCatalog();

        let catalogLS = localStorage.getItem('catalog');
        expect(catalogLS).not.toBeNaN(); 
    });
}); 

describe('setCatalogReducer', () => {
    
    test('If setCatalogReducer was called, dispatch should be called 4 times', async () => {
        const thunk = setCatalogReducer(testProductList);
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        setCatalogReducer(testProductList);
        expect(dispatchMock).toBeCalledTimes(4); 
    })
}); 

describe('setProductList', () => {
    test('Product list after setting should be equal adding product list', () => {
        let stateCatalog = catalogReducer(stateEmpty, setProductList(testProductList));
        expect(stateCatalog.productList).toEqual(testProductList);
    });

    test('length product list after setting should be equal length adding product list', () => {
        let stateCatalog = catalogReducer(stateEmpty, setProductList(testProductList));
        expect(stateCatalog.productList?.length).toBe(testProductList.length);
    });
});


describe('setManufacturerList', () => {
    test('manufacturer list should be set correct', () => {
        let stateCatalog = catalogReducer(state, setManufacturerList(testProductList));
        expect(stateCatalog.manufacturerList).toEqual(testManufacturerList);
    });
});

describe('setSort', () => {
    test('sort should be change correct', () => {
        let stateCatalog = catalogReducer(state, setSort('Название Я-А'));
        expect(stateCatalog.sort).toBe('Название Я-А');
    });
});

describe('addProductSuccess', () => {

    test('If product list length was 3, after adding product product list length should be equal 4', () => {
        let stateCatalog = catalogReducer(state, addProductSuccess(testProduct));
        expect(stateCatalog.productList?.length).toBe(4);
    });

});

describe('changeProductSuccess', () => {

    test('If product list length was 3, after change product product list length should not change', () => {
        let stateCatalog = catalogReducer(state, changeProductSuccess(testChangedProduct));
        expect(stateCatalog.productList?.length).toBe(3);
    });

    test('After change product product should be equal new product', () => {
        let stateCatalog = catalogReducer(state, changeProductSuccess(testChangedProduct));
        expect(stateCatalog.productList?.[2]).toEqual(testChangedProduct);
    }); 
});

describe('deleteProductSuccess', () => {

    test('product length after delete product should be decrement', () => {
        let stateCatalog = catalogReducer(state, deleteProductSuccess(testBarcodeProductInBasket));
        expect(stateCatalog.productList?.length).toBe(2);
    });

    test(`if product don't have, product lenght after delete product don't change`, () => {
        let stateCatalog = catalogReducer(state, deleteProductSuccess(0));
        expect(stateCatalog.productList?.length).toBe(3);
    });
});