import { ThunkAction } from 'redux-thunk';
import { catalogAPI } from '../api/api';
import { ProductType, SortValueType } from '../type/type';
import { countValueInArray } from '../utils/helpFuncWithObj';
import { sortArray } from '../utils/sort';
import { setMaxPrice, SetMaxPriceActionType, setMinPrice, SetMinPriceActionType } from './filter-reducer';
import { AppStateType } from './redux-store';

const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
const SET_MANUFACTURER_LIST = 'SET_MANUFACTURER_LIST';
const SET_SORT = 'SET_SORT';
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
const CHANGE_PRODUCT_SUCCESS = 'CHANGE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';


export type InitialStateTypeCatalog = {
    productList: Array<ProductType> | null,
    manufacturerList: { [index: string]: number } | null,
    sortList: Array<string>,
    sort: SortValueType,
}

export let initialStateCatalog: InitialStateTypeCatalog = {
    productList: null,
    manufacturerList: null,
    sortList: ['Название А-Я', 'Название Я-А', 'По возрастанию цены', 'По убыванию цены'],
    sort: 'Название А-Я',
}

const catalogReducer = (state = initialStateCatalog, action: ActionsType): InitialStateTypeCatalog => {
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

type SetSortType = {
    type: typeof SET_SORT,
    sortValue: SortValueType
}

export type AddProductSuccessActionType = {
    type: typeof ADD_PRODUCT_SUCCESS,
    product: ProductType
}

export type ChangeProductSuccessActionType = {
    type: typeof CHANGE_PRODUCT_SUCCESS,
    product: ProductType
}

export type DeleteProductSuccessActionType = {
    type: typeof DELETE_PRODUCT_SUCCESS,
    barcode: number
}


type ActionsType = SetProductListActionType | SetManufacturerListType | SetSortType | AddProductSuccessActionType | DeleteProductSuccessActionType | ChangeProductSuccessActionType | SetMinPriceActionType | SetMaxPriceActionType;

export const getCatalog = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let promise: Array<ProductType> = await catalogAPI.getCatalog();
    console.log(promise)

    if (promise) {
        console.log(promise)
        localStorage.setItem('catalog', JSON.stringify(promise));
        dispatch(setCatalogReducer(promise))
    }
}

export const setCatalogReducer = (promise: Array<ProductType>): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let productListSortPrice = sortArray(promise, 'price', null);

    dispatch(setProductList(promise));
    dispatch(setMinPrice(productListSortPrice[0].price));
    dispatch(setMaxPrice(productListSortPrice[productListSortPrice.length - 1].price));
    dispatch(setManufacturerList(promise));
}

export const setProductList = (productData: Array<ProductType>): SetProductListActionType => ({ type: SET_PRODUCT_LIST, productData });

export const setManufacturerList = (productData: Array<ProductType>): SetManufacturerListType => ({ type: SET_MANUFACTURER_LIST, productData });

export const setSort = (sortValue: SortValueType): SetSortType => ({ type: SET_SORT, sortValue });

export const addProductSuccess = (product: ProductType): AddProductSuccessActionType => ({ type: ADD_PRODUCT_SUCCESS, product });

export const changeProductSuccess = (product: ProductType): ChangeProductSuccessActionType => ({ type: CHANGE_PRODUCT_SUCCESS, product });

export const deleteProductSuccess = (barcode: number): DeleteProductSuccessActionType => ({ type: DELETE_PRODUCT_SUCCESS, barcode });

export default catalogReducer;