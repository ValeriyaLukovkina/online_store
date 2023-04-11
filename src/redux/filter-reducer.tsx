const SET_MIN_PRICE = 'SET_MIN_PRICE';
const SET_MAX_PRICE = 'SET_MAX_PRICE';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_SUBCATEGORY = 'SET_SUBCATEGORY';
const SET_MANUFACTURER = 'SET_MANUFACTURER';

export type InitialStateTypeFilter = {
    category: string | null,
    subcategory: string | null,
    minPriceProducts: number | null,
    maxPriceProducts: number | null,
    manufacturer: Array<string> | null
}

export let initialStateFilter: InitialStateTypeFilter = {
    category: null,
    subcategory: null,
    minPriceProducts: 0,
    maxPriceProducts: 10000,
    manufacturer: null
}

let filterReducer = (state = initialStateFilter, action: ActionsType) => {
    switch (action.type) {
        case SET_MIN_PRICE:
            return {
                ...state,
                minPriceProducts: action.price
            }
        case SET_MAX_PRICE:
            return {
                ...state,
                maxPriceProducts: action.price
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case SET_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.subcategory
            }
        case SET_MANUFACTURER:
            return {
                ...state,
                manufacturer: action.manufacturer
            }
        default:
            return state;
    }
}

export type SetMinPriceActionType = {
    type: typeof SET_MIN_PRICE,
    price: number
}

export type SetMaxPriceActionType = {
    type: typeof SET_MAX_PRICE,
    price: number
}

type setCategoryActionType = {
    type: typeof SET_CATEGORY,
    category: string
}

type setSubcategoryActionType = {
    type: typeof SET_SUBCATEGORY,
    subcategory: string | null
}

type setManufacturerActionType = {
    type: typeof SET_MANUFACTURER,
    manufacturer: Array<string>
}

type ActionsType = SetMinPriceActionType | SetMaxPriceActionType | setCategoryActionType | setSubcategoryActionType | setManufacturerActionType;

export const setMinPrice = (price: number): SetMinPriceActionType => ({ type: SET_MIN_PRICE, price });

export const setMaxPrice = (price: number): SetMaxPriceActionType => ({ type: SET_MAX_PRICE, price });

export const setCategory = (category: string): setCategoryActionType => ({ type: SET_CATEGORY, category });

export const setSubcategory = (subcategory: string | null): setSubcategoryActionType => ({ type: SET_SUBCATEGORY, subcategory });

export const setManufacturer = (manufacturer: Array<string>): setManufacturerActionType => ({ type: SET_MANUFACTURER, manufacturer });

export default filterReducer;