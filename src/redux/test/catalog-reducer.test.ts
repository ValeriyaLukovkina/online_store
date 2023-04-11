import { addProductSuccess, changeProductSuccess, deleteProductSuccess, getCatalog, setSort } from './../catalog-reducer';
import catalogReducer, { InitialStateTypeCatalog, setManufacturerList, setProductList } from "../catalog-reducer";
import { manufacturerList, product, productList, sort, sortList } from "./inintialValue";
import { ProductType } from '../../type/type';

 
export let stateCatalog: InitialStateTypeCatalog = {
    productList: null,
    manufacturerList: null,
    sortList: sortList,
    sort: sort,
};

describe('setProductList', () => {
    test('product list should be set', () => {
        let newState = catalogReducer(stateCatalog, setProductList(productList));
        expect(newState.productList).toEqual(productList);
    })
}); 

describe('setManufacturerList', () => {
    test('manufacturer list should be set correct', () => {
        let newState = catalogReducer(stateCatalog, setManufacturerList(productList));
        expect(newState.manufacturerList).toEqual(manufacturerList);
    })
});

describe('setSort', () => {
    test('sort should be change', () => {
        let newState = catalogReducer(stateCatalog, setSort('Название Я-А'));
        expect(newState.sort).toBe('Название Я-А');
    })
});

describe('addProductSuccess', () => {
    let state: InitialStateTypeCatalog;
    beforeEach(() => {
        state = catalogReducer(stateCatalog, setProductList(productList));
    })

    test('product should be add', () => {
        let newState = catalogReducer(state, addProductSuccess(product));
        expect(newState.productList?.length).toBe(4);
    })

});

describe('changeProductSuccess', () => {
    let state: InitialStateTypeCatalog;
    beforeEach(() => {
        state = catalogReducer(stateCatalog, setProductList(productList));
    })

    test('product lenght after changed should be the same', () => {
        let existProduct = {
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
        }

        let newState = catalogReducer(state, changeProductSuccess(existProduct));
        expect(newState.productList?.length).toBe(3);
    })
});

describe('deleteProductSuccess', () => {
    let state: InitialStateTypeCatalog;
    beforeEach(() => {
        state = catalogReducer(stateCatalog, setProductList(productList));
    })

    test('product lenght after delete product should be decrement', () => {
        let newState = catalogReducer(state, deleteProductSuccess(30330300004));
        expect(newState.productList?.length).toBe(2);
    })

    test(`if product don't have, product lenght after delete product don't change`, () => {
        let newState = catalogReducer(state, deleteProductSuccess(0));
        expect(newState.productList?.length).toBe(3);
    })
});