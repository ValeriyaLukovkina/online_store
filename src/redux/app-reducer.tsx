// import productData from './../catalog.json';
// import categoryData from './../category.json';
import { ThunkAction } from "redux-thunk";
import { getCatalog, setCatalogReducer } from "./catalog-reducer";
import { getCategory, setCategoryList } from './category-reducer';
import { CategoryType, ProductType } from "../type/type";
import { setBasket } from "./basket-reducer";

const INITIALIZE_APP = 'INITIALIZE_APP';

type InintalStateType = {
    inintialized: boolean
}

let initialState: InintalStateType = {
    inintialized: false
}

const appReducer = (state = initialState, action: ActionsType): InintalStateType => {
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

type ActionsType = initializedSuccessActionType

export const initializedSuccess = () => ({ type: INITIALIZE_APP });

export const initializeApp = (): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {
    let catalogLS = localStorage.getItem('catalog');
    let categoryLS = localStorage.getItem('category');

    let catalog: Array<ProductType> = catalogLS && await JSON.parse(catalogLS)
    let category: Array<CategoryType> = categoryLS && await JSON.parse(categoryLS)

    let promiseCategory;
    let promiseCatalog;
    dispatch(setBasket())

    if (catalog && catalog.length > 0 && category) {

        promiseCatalog = dispatch(setCatalogReducer(catalog));

        promiseCategory = dispatch(setCategoryList(category))

    } 
    if (!category) {
        promiseCategory = dispatch(getCategory())
    }
    if (!catalog || catalog.length === 0) {
        promiseCatalog = dispatch(getCatalog());
    } 
    Promise.all([promiseCategory, promiseCatalog])
    .then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;