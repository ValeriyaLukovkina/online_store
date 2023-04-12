// import productData from './../catalog.json';
// import categoryData from './../category.json';
import { ThunkAction } from "redux-thunk";
import { getCatalog, setCatalogReducer } from "./catalog-reducer";
import { getCategory, setCategoryList, SetCategoryListActionType } from './category-reducer';
import { CategoryType, ProductType } from "../type/type";
import { setBasket } from "./basket-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZE_APP = 'INITIALIZE_APP';

export type InitialStateAppType = {
    inintialized: boolean
}

export let initialStateApp: InitialStateAppType = {
    inintialized: false
}

const appReducer = (state = initialStateApp, action: ActionsType): InitialStateAppType => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                inintialized: true
            }
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZE_APP
}

type ActionsType = initializedSuccessActionType | SetCategoryListActionType;

export const initializedSuccess = (): initializedSuccessActionType => ({ type: INITIALIZE_APP });

export const initializeApp = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let catalogLS = localStorage.getItem('catalog');
    let categoryLS = localStorage.getItem('category');

    let catalog: Array<ProductType> = catalogLS && await JSON.parse(catalogLS)
    let category: Array<CategoryType> = categoryLS && await JSON.parse(categoryLS)

    let promiseCategory: any;
    let promiseCatalog: any;
    dispatch(setBasket())

    if (catalog && catalog.length > 0 && category) {

        promiseCatalog = await dispatch(setCatalogReducer(catalog));

        promiseCategory = await dispatch(setCategoryList(category))

    } 
    if (!category) {
        promiseCategory = await dispatch(getCategory())
    }
    if (!catalog || catalog.length === 0) {
        promiseCatalog = await dispatch(getCatalog());
    } 
    Promise.all([promiseCategory, promiseCatalog])
    .then(() => {
        // if (promiseCategory && promiseCatalog) {
        dispatch(initializedSuccess());

        // }
        // dispatch(initializedSuccess());
    })
}

export default appReducer;