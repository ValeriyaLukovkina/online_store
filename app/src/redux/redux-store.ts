import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";
import adminReducer from './admin-reducer';
import appReducer from './app-reducer';
import basketReducer from './basket-reducer';
import catalogReducer from './catalog-reducer';
import categoryReducer from './category-reducer';
import filterReducer from './filter-reducer';

let reducers = combineReducers({
    app: appReducer,
    catalog: catalogReducer,
    category: categoryReducer,
    filter: filterReducer,
    basket: basketReducer,
    admin: adminReducer
})

type ReducersType = typeof reducers;

export type AppStateType = ReturnType<ReducersType>;

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

// @ts-ignore
window.store = store