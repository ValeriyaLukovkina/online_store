import { ThunkAction } from 'redux-thunk';
import { includeInArray, increaseDecreaseCount } from '../utils/helpWithBasket';
import { ProductBasketType, ProductType } from './../type/type';
import { AppStateType } from './redux-store';
const SET_BASKET = 'SET_BASKET';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET';
const INCREASE_COUNT_PRODUCT = 'INCREASE_COUNT_PRODUCT';
const DECREASE_COUNT_PRODUCT = 'DECREASE_COUNT_PRODUCT';
const DELETE_BASKET_SUCCESS = 'DELETE_BASKET_SUCCESS';

export type InintalStateTypeBasket = {
    basket: Array<ProductBasketType>
}

export let initialStateBasket: InintalStateTypeBasket = {
    basket: []
}

const basketReducer = (state = initialStateBasket, action: ActionsType): InintalStateTypeBasket => {
    switch (action.type) {
        case SET_BASKET:
            return {
                ...state,
                basket: action.basket
            }
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: includeInArray(action.product.barcode, state.basket) ? state.basket : [...state.basket, { ...action.product, count: action.countProduct }]
            }
        case DELETE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(product => product.barcode !== action.barcode)
            }
        case INCREASE_COUNT_PRODUCT:
            debugger
            return {
                ...state,
                basket: [...increaseDecreaseCount('increase', action.barcode, state.basket)]
            }
        case DECREASE_COUNT_PRODUCT:
            return {
                ...state,
                basket: [...increaseDecreaseCount('decrease', action.barcode, state.basket)]
            }
        case DELETE_BASKET_SUCCESS:
            return {
                ...state,
                basket: []
            }

        default:
            return state;
    }
}

type setBasketSuccessActionType = {
    type: typeof SET_BASKET,
    basket: Array<ProductBasketType>
}

type addToBasketActionType = {
    type: typeof ADD_TO_BASKET,
    product: ProductType,
    countProduct: number
}

type deleteFromBasketActionType = {
    type: typeof DELETE_FROM_BASKET,
    barcode: number
}

type increaseCountProductActionType = {
    type: typeof INCREASE_COUNT_PRODUCT,
    barcode: number
}

type decreaseCountProductActionType = {
    type: typeof DECREASE_COUNT_PRODUCT,
    barcode: number
}

type deleteBasketSuccessActionType = {
    type: typeof DELETE_BASKET_SUCCESS,
}

type ActionsType = setBasketSuccessActionType | addToBasketActionType | deleteFromBasketActionType
    | decreaseCountProductActionType | increaseCountProductActionType | deleteBasketSuccessActionType;

export const setBasket = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let basketLS = localStorage.getItem('basket');
    if (basketLS) {
        dispatch(setBasketSuccess(JSON.parse(basketLS)));
    }
}

export const addToBasket = (product: ProductType, countProduct: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let basketLS = localStorage.getItem('basket');
    if (basketLS) {
        let basket: Array<ProductBasketType> = JSON.parse(basketLS)
        !includeInArray(product.barcode, basket) && localStorage.setItem('basket', JSON.stringify([...basket, { ...product, count: countProduct }]));
    } else {
        localStorage.setItem('basket', JSON.stringify([{ ...product, count: countProduct }]));
    }
    dispatch(addToBasketSuccess(product, countProduct));
}

export const deleteFromBasket = (barcode: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let basketLS = localStorage.getItem('basket');
    if (basketLS) {
        let basket: Array<ProductBasketType> = JSON.parse(basketLS);
        localStorage.setItem('basket', JSON.stringify(basket.filter(product => product.barcode !== barcode)));
    }
    dispatch(deleteFromBasketSuccess(barcode));
}

export const increaseCountProduct = (barcode: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let basketLS = localStorage.getItem('basket');
    if (basketLS) {
        let basket: Array<ProductBasketType> = JSON.parse(basketLS);
        localStorage.setItem('basket', JSON.stringify(increaseDecreaseCount('increase', barcode, basket)));
    }
    dispatch(increaseCountProductSuccess(barcode));
}

export const decreaseCountProduct = (barcode: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let basketLS = localStorage.getItem('basket');
    if (basketLS) {
        let basket: Array<ProductBasketType> = JSON.parse(basketLS);
        localStorage.setItem('basket', JSON.stringify(increaseDecreaseCount('decrease', barcode, basket)));
    }
    dispatch(decreaseCountProductSuccess(barcode));
}

export const deleteBasket = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    localStorage.setItem('basket', JSON.stringify([]));
    dispatch(deleteBasketSuccess());
}

export const setBasketSuccess = (basket: Array<ProductBasketType>): setBasketSuccessActionType => ({ type: SET_BASKET, basket });

export const addToBasketSuccess = (product: ProductType, countProduct: number): addToBasketActionType => ({ type: ADD_TO_BASKET, product, countProduct });

export const deleteFromBasketSuccess = (barcode: number): deleteFromBasketActionType => ({ type: DELETE_FROM_BASKET, barcode });

export const increaseCountProductSuccess = (barcode: number): increaseCountProductActionType => ({ type: INCREASE_COUNT_PRODUCT, barcode })

export const decreaseCountProductSuccess = (barcode: number): decreaseCountProductActionType => ({ type: DECREASE_COUNT_PRODUCT, barcode })

export const deleteBasketSuccess = (): deleteBasketSuccessActionType => ({ type: DELETE_BASKET_SUCCESS })

export default basketReducer;