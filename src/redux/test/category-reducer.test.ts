import { categoryAPI } from "../../api/api";
import { mockLocalStorage } from "../../utilsTest/mockLocalStorage";
import categoryReducer, { getCategory, InitialStateCategoryType, setCategoryList } from "../category-reducer";
import { testCategoryList, testStateCategoryEmpty } from "./inintialValue";

let stateEmpty: InitialStateCategoryType = testStateCategoryEmpty


describe('getCatalog', () => {
    beforeEach(() => {
        jest.spyOn(categoryAPI, 'getCategory').mockImplementation( () => {
            return Promise.resolve(testCategoryList)
           });
    });
    
    test('If promise has, dispatch should be called once', async () => {
        const thunk = getCategory();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        getCategory();
        expect(dispatchMock).toBeCalledTimes(1); 
    });

    test('If promise has, localStorage should not be NaN', async () => {
        mockLocalStorage();
        const thunk = getCategory();
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();

        await thunk(dispatchMock, getStateMock, {});
        getCategory();

        let categoryLS = localStorage.getItem('category');
        expect(categoryLS).not.toBeNaN(); 
    });
}); 

describe('setCategoryList', () => {
    test('Category list after setting should be equal adding product list', () => {
        let stateCatalog = categoryReducer(stateEmpty, setCategoryList(testCategoryList));
        expect(stateCatalog.categoryList).toEqual(testCategoryList);
    });

    test('length category list after setting should be equal length adding category list', () => {
        let stateCatalog = categoryReducer(stateEmpty, setCategoryList(testCategoryList));
        expect(stateCatalog.categoryList?.length).toBe(testCategoryList.length);
    });
}); 