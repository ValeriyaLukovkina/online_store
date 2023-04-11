import { ThunkAction } from "redux-thunk";
import { categoryAPI } from "../api/api";
import { CategoryType } from "../type/type";
import { AppStateType } from "./redux-store";

const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST'

export type InitialStateCategoryType = {
    categoryList: Array<CategoryType> | null
}

export let initialStateCategory: InitialStateCategoryType = {
    categoryList: null
}

let categoryReducer = (state = initialStateCategory, action: ActionsType): InitialStateCategoryType => {
    switch (action.type) {
        case SET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.categoryList
            }
        default:
            return state;
    }
}

export type SetCategoryListActionType = {
    type: typeof SET_CATEGORY_LIST,
    categoryList: Array<CategoryType>
}

type ActionsType = SetCategoryListActionType;

export const getCategory = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {

    let promise = await categoryAPI.getCategory();

    if (promise) {
        localStorage.setItem('category', JSON.stringify(promise));
        dispatch(setCategoryList(promise))
    }
}

export const setCategoryList = (categoryList: Array<CategoryType>): SetCategoryListActionType => ({ type: SET_CATEGORY_LIST, categoryList })

export default categoryReducer;