import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import store, { reducers } from '../../../redux/redux-store';
import { stateCatalog } from '../../../redux/test/catalog-reducer.test';

const state = {
    app: {
        inintialized: false,
    },
    catalog: {
        productList: [
            {
                "image_url": "https://drive.google.com/uc?export=view&id=1rtENZ2vlFGhSLO5Qfa4ZVyQflRUJItTz",
                "title": "DEPILTOUCH PROFESSIONAL azulen",
                "type_product": [
                    { "Уход за телом": ["Эпиляция и депиляция"] }
                ],
                "type_size": "volume",
                "size": 100,
                "article": 39510200006,
                "barcode": 39510200006,
                "manufacturer": "DEPILTOUCH PROFESSIONAL",
                "brand": "DEPILTOUCH PROFESSIONAL",
                "description": "Принадлежит к серии восков Vegetal, созданных на основе натурального пчелиного воска с добавлением натуральных растительных масел, благодаря чему оказывают дополнительный уход, питают и увлажняют кожу. При нанесении образуют воздухонепроницаемый (однородный) слой и плотно охватывают волоски по всей длине. Классический воск темно-синего цвета с азуленом обладает смягчающими и успокаивающими свойствами. Содержит натуральный пчелиный воск, смягчающий кожу. Эффективно удаляет волосы, экономично наносится, а также легко снимается, не оставляя следов на коже.",
                "price": 972
            }
        ],
        manufacturerList:
            { "DEPILTOUCH PROFESSIONAL": 1, },
        sortList: ['Название А-Я', 'Название Я-А', 'По возрастанию цены', 'По убыванию цены'],
        sort: 'Название А-Я',
    },
    category: {
        categoryList: [
            {
                "id": 1,
                "category": "Уход за телом",
                "subcategory": [
                    "Эпиляция и депиляция",
                    "Средства для ванны и душа",
                    "Скрабы, пилинги и пр.",
                    "Мочалки и губки для тела",
                    "Кремы, лосьоны, масла",
                    "Интимный уход",
                    "Дезодоранты, антиперспиранты",
                    "Гели для душа"
                ]
            },
            {
                "id": 2,
                "category": "Уход за руками",
                "subcategory": [
                    "Увлажнение и питание",
                    "Средства для ногтей",
                    "Мыло твердое",
                    "Мыло жидкое",
                    "Крем для рук",
                    "Защита рук",
                    "Жидкость для снятия лака"
                ]
            }
        ],
    },
    filter: {
        category: 'Уход за телом',
        subcategory: 'Эпиляция и депиляция',
        minPriceProducts: 0,
        maxPriceProducts: 10000,
        manufacturer: 'DEPILTOUCH PROFESSIONAL',
    },
    basket: {
        basket: [
            {
                "image_url": "https://drive.google.com/uc?export=view&id=1rtENZ2vlFGhSLO5Qfa4ZVyQflRUJItTz",
                "title": "DEPILTOUCH PROFESSIONAL azulen",
                "type_product": [
                    { "Уход за телом": ["Эпиляция и депиляция"] }
                ],
                "type_size": "volume",
                "size": 100,
                "article": 39510200006,
                "barcode": 39510200006,
                "manufacturer": "DEPILTOUCH PROFESSIONAL",
                "brand": "DEPILTOUCH PROFESSIONAL",
                "description": "Принадлежит к серии восков Vegetal, созданных на основе натурального пчелиного воска с добавлением натуральных растительных масел, благодаря чему оказывают дополнительный уход, питают и увлажняют кожу. При нанесении образуют воздухонепроницаемый (однородный) слой и плотно охватывают волоски по всей длине. Классический воск темно-синего цвета с азуленом обладает смягчающими и успокаивающими свойствами. Содержит натуральный пчелиный воск, смягчающий кожу. Эффективно удаляет волосы, экономично наносится, а также легко снимается, не оставляя следов на коже.",
                "price": 972,
                "count": 1
            }
        ]
    }
    ,
}

const stateEmty = {
    app: {
        inintialized: false,
    },
    catalog: {
        productList: [
            {
                "image_url": "https://drive.google.com/uc?export=view&id=1rtENZ2vlFGhSLO5Qfa4ZVyQflRUJItTz",
                "title": "DEPILTOUCH PROFESSIONAL azulen",
                "type_product": [
                    { "Уход за телом": ["Эпиляция и депиляция"] }
                ],
                "type_size": "volume",
                "size": 100,
                "article": 39510200006,
                "barcode": 39510200006,
                "manufacturer": "DEPILTOUCH PROFESSIONAL",
                "brand": "DEPILTOUCH PROFESSIONAL",
                "description": "Принадлежит к серии восков Vegetal, созданных на основе натурального пчелиного воска с добавлением натуральных растительных масел, благодаря чему оказывают дополнительный уход, питают и увлажняют кожу. При нанесении образуют воздухонепроницаемый (однородный) слой и плотно охватывают волоски по всей длине. Классический воск темно-синего цвета с азуленом обладает смягчающими и успокаивающими свойствами. Содержит натуральный пчелиный воск, смягчающий кожу. Эффективно удаляет волосы, экономично наносится, а также легко снимается, не оставляя следов на коже.",
                "price": 972
            },
            {
                "image_url": "https://drive.google.com/uc?export=view&id=1dkd0ts_RmLbr6IjsK-pRS99DvUDTaVav",
                "title": "ECOLATIER argan & vanil",
                "type_product": [
                    { "Уход за телом": ["Средства для ванны и душа", "Гели для душа"] }
                ],
                "type_size": "volume",
                "size": 600,
                "article": 30330300004,
                "barcode": 30330300004,
                "manufacturer": "ECOLATIER",
                "brand": "ECOLATIER",
                "description": "Гель для душа ECOLATIER®, благодаря натуральным экстрактам и маслам в составе, нежно очищает и питает кожу. Оставляет на коже приятный аромат, снимает усталость. Продукт содержит более 98% ингредиентов растительного происхождения.",
                "price": 265
            },
            {
                "image_url": "https://drive.google.com/uc?export=view&id=1lgXcRZpMSZgvBwvUch0R_hOzvQ-hbka0",
                "title": "DR IRENA ERIS spa resort tahiti",
                "type_product": [
                    { "Уход за телом": ["Скрабы, пилинги и пр.", "Средства для ванны и душа"] }
                ],
                "type_size": "volume",
                "size": 125,
                "article": 15082200006,
                "barcode": 15082200006,
                "manufacturer": "DR IRENA ERIS",
                "brand": "DR IRENA ERIS",
                "description": "Скраб для тела Dr Irena Eris с экзотическим ароматом мягко очищает кожу, возвращает ей гладкость и превращает уход в расслабляющий ритуал. Средство содержит золотистые частицы, которые нежно отшелушивают кожу и придают ей сияние. Черный таитянский жемчуг, экстракт орхидеи и бетаин эффективно питают и смягчают кожу, делают её бархатистой и повышают упругость.",
                "price": 2295
            }],
        manufacturerList: { 'DEPILTOUCH PROFESSIONAL': 1, 'ECOLATIER': 1, 'DR IRENA ERIS': 1 },
        sortList: ['Название А-Я', 'Название Я-А', 'По возрастанию цены', 'По убыванию цены'],
        sort: 'Название А-Я',
    },
    category: {
        categoryList: [
            {
                "id": 1,
                "category": "Уход за телом",
                "subcategory": [
                    "Эпиляция и депиляция",
                    "Средства для ванны и душа",
                    "Скрабы, пилинги и пр.",
                    "Мочалки и губки для тела",
                    "Кремы, лосьоны, масла",
                    "Интимный уход",
                    "Дезодоранты, антиперспиранты",
                    "Гели для душа"
                ]
            },
            {
                "id": 2,
                "category": "Уход за руками",
                "subcategory": [
                    "Увлажнение и питание",
                    "Средства для ногтей",
                    "Мыло твердое",
                    "Мыло жидкое",
                    "Крем для рук",
                    "Защита рук",
                    "Жидкость для снятия лака"
                ]
            }
        ],
    },
    filter: {
        category: null,
        subcategory: null,
        minPriceProducts: 0,
        maxPriceProducts: 10000,
        manufacturer: null,
    },
    basket: {
        basket: []
    }
    ,
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