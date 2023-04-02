import { ThunkAction } from 'redux-thunk';
import { catalogAPI } from '../api/api';
import { ProductType, SortValueType } from '../type/type';
import { countValueInArray } from '../utils/helpFuncWithObj';
import { sortArray } from '../utils/sort';
import { setMaxPrice, setMinPrice } from './filter-reducer';

const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
const SET_MANUFACTURER_LIST = 'SET_MANUFACTURER_LIST';
const SET_SORT = 'SET_SORT';
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
const CHANGE_PRODUCT_SUCCESS = 'CHANGE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';


type InitialStateType = {
    productList: Array<ProductType> | null,
    manufacturerList: { [index: string]: number } | null,
    sortList: Array<string>,
    sort: SortValueType,
}

let initialState: InitialStateType = {
    productList: null,
    manufacturerList: null,
    sortList: ['Название А-Я', 'Название Я-А', 'По возрастанию цены', 'По убыванию цены'],
    sort: 'Название А-Я',
}

const catalogReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.productData
            }
        case SET_MANUFACTURER_LIST:
            return {
                ...state,
                manufacturerList: countValueInArray(action.productData, 'manufacturer')
            }
        case SET_SORT:
            return {
                ...state,
                sort: action.sortValue
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                productList: state.productList && [...state.productList, action.product]
            }
        case CHANGE_PRODUCT_SUCCESS:
            debugger
            return {
                ...state,
                productList: state.productList && [...state.productList.filter(product => product.barcode !== action.product.barcode), action.product]
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                productList: state.productList && state.productList.filter(product => product.barcode !== action.barcode)
            }
        default:
            return state;
    }
}

type SetProductListActionType = {
    type: typeof SET_PRODUCT_LIST
    productData: Array<ProductType>
}

type SetManufacturerListType = {
    type: typeof SET_MANUFACTURER_LIST,
    productData: Array<ProductType>
}

type SetSort = {
    type: typeof SET_SORT,
    sortValue: SortValueType
}

type addProductSuccessActionType = {
    type: typeof ADD_PRODUCT_SUCCESS,
    product: ProductType
}

type changeProductSuccessActionType = {
    type: typeof CHANGE_PRODUCT_SUCCESS,
    product: ProductType
}

type deleteProductSuccessActionType = {
    type: typeof DELETE_PRODUCT_SUCCESS,
    barcode: number
}


type ActionsType = SetProductListActionType | SetManufacturerListType | SetSort | addProductSuccessActionType | deleteProductSuccessActionType | changeProductSuccessActionType;

export const getCatalog = (): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {
    let promise = await catalogAPI.getCatalog();
    console.log(promise)

    if (promise) {
        localStorage.setItem('catalog', JSON.stringify(promise));
        dispatch(setCatalogReducer(promise))
    }
}

export const setCatalogReducer = (promise: any): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {
    let productListSortPrice = sortArray(promise, 'price', null);

    dispatch(setProductList(promise));
    dispatch(setMinPrice(productListSortPrice[0].price));
    dispatch(setMaxPrice(productListSortPrice[productListSortPrice.length - 1].price));
    dispatch(setManufacturerList(promise));
}

export const setProductList = (productData: Array<ProductType>): SetProductListActionType => ({ type: SET_PRODUCT_LIST, productData });

export const setManufacturerList = (productData: Array<ProductType>): SetManufacturerListType => ({ type: SET_MANUFACTURER_LIST, productData });

export const setSort = (sortValue: SortValueType) => ({ type: SET_SORT, sortValue });

export const addProductSuccess = (product: ProductType) => ({ type: ADD_PRODUCT_SUCCESS, product });

export const changeProductSuccess = (product: ProductType) => ({ type: CHANGE_PRODUCT_SUCCESS, product });

export const deleteProductSuccess = (barcode: number) => ({ type: DELETE_PRODUCT_SUCCESS, barcode });

export default catalogReducer;