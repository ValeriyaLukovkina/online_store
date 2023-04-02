import { ThunkAction } from "redux-thunk";
import { categoryAPI } from "../api/api";
import { CategoryType } from "../type/type";

const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST'

type InitialStateType = {
    categoryList: Array<CategoryType> | null
}

let initialState: InitialStateType = {
    categoryList: null
}

let categoryReducer = (state = initialState, action: ActionsType) => {
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

type SetCategoryListActionType = {
    type: typeof SET_CATEGORY_LIST,
    categoryList: Array<CategoryType>
}

type ActionsType = SetCategoryListActionType;

export const getCategory = (): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {

    let promise = await categoryAPI.getCategory();

    if (promise) {
        localStorage.setItem('category', JSON.stringify(promise));
        dispatch(setCategoryList(promise))
    }
}


export const setCategoryList = (categoryList: Array<CategoryType>): SetCategoryListActionType => ({ type: SET_CATEGORY_LIST, categoryList })

export default categoryReducer;