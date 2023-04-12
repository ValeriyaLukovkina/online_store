import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import store, { AppStateType, reducers } from '../../../redux/redux-store';
import { stateCatalog } from '../../../redux/test/catalog-reducer.test';
import { testStateApp, testStateBasket, testStateCatalog, testStateCatalogEmpty, testStateCategory, testStateCategoryEmpty, testStateFilter } from '../../../redux/test/inintialValue';

const state = {
    app: testStateApp,
    basket: testStateBasket,
    catalog: testStateCatalog,
    category: testStateCategory,
    filter: testStateFilter,
    admin: {}
}

const stateEmty = {
    app: testStateApp,
    basket: {
        basket: []
    },
    catalog: testStateCatalogEmpty,
    category: testStateCategoryEmpty,
    filter: {
        category: null,
        subcategory: null,
        minPriceProducts: 0,
        maxPriceProducts: 10000,
        manufacturer: null,
    }
}


export const renderWithRedux = (component) => {
    const mockStore = configureStore([thunk]);

    const store = mockStore(state);

    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}

export const renderWithReduxEmty = (component) => {
    const mockStore = configureStore();
    const store = mockStore(stateEmty);

    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}  