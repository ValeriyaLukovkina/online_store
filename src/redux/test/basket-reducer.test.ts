import basketReducer, { addToBasket, addToBasketSuccess, decreaseCountProductSuccess, deleteBasket, deleteBasketSuccess, deleteFromBasketSuccess, increaseCountProductSuccess, InintalStateTypeBasket, initialStateBasket, setBasketSuccess } from "../basket-reducer";

let state: InintalStateTypeBasket = initialStateBasket;

let product = {
    "image_url": "https://drive.google.com/uc?export=view&id=1dPqjyb3oC8R62WPnsTr91yftNzAbSHXJ",
    "title": "DIOR dissolvant abricot",
    "type_product": [
        { "Подарочные наборы": ["Для женщин"] }
    ],
    "type_size": "size",
    "size": 700,
    "article": 14035400099,
    "barcode": 14035400099,
    "manufacturer": "DIOR",
    "brand": "DIOR",
    "description": "Жидкость для снятия лака, не содержащая ацетона, быстро и эффективно удаляет лак, ухаживая за вашими ногтями. Это средство насыщено компонентами ухода, которые питают, увлажняют и мгновенно возвращают ногтям белизну и блеск.",
    "price": 2300,
}

describe('addToBasketSuccess', () => {
    let stateAddToBasket: any;
    beforeEach(() => {
        stateAddToBasket = basketReducer(state, addToBasketSuccess(product, 1));
    })

    test('new product should be added', () => {
        expect(stateAddToBasket.basket.length).toBe(1);
    });

    test('if product is in a basket, new product should not be added', () => {
        let stateAddSameProduct = basketReducer(stateAddToBasket, addToBasketSuccess(product, 1));
        expect(stateAddSameProduct.basket.length).toBe(1);
    })
});

describe('deleteFromBasketSuccess', () => {
    test('if product is in a basket, product should be delete', () => {
        let stateAddToBasket = basketReducer(state, addToBasketSuccess(product, 1));
        expect(stateAddToBasket.basket.length).toBe(1);

        let stateDeleteProduct = basketReducer(stateAddToBasket,
            deleteFromBasketSuccess(stateAddToBasket.basket[0].barcode));

        expect(stateDeleteProduct.basket.length).toBe(0);
    });

    test('if product is not in a basket, product should not be delete', () => {
        let stateDeleteProduct = basketReducer(state, deleteFromBasketSuccess(1));
        expect(stateDeleteProduct.basket.length).toBe(0);
    })
})

describe('increaseCountProductSuccess', () => {
    let stateAddToBasket: any;
    beforeEach(() => {
        stateAddToBasket = basketReducer(state, addToBasketSuccess(product, 1));
    })

    test('count of product should be increase', () => {
        let stateIncreaseCount = basketReducer(stateAddToBasket,
            increaseCountProductSuccess(stateAddToBasket.basket[0].barcode));

        expect(stateIncreaseCount.basket[0].count).toBe(2);
    });
})

describe('decreaseCountProductSuccess', () => {
    let stateAddToBasket: any;
    beforeEach(() => {
        stateAddToBasket = basketReducer(state, addToBasketSuccess(product, 1));
    })

    test('count of product should be decrease', () => {
        let stateIncreaseCount = basketReducer(stateAddToBasket,
            increaseCountProductSuccess(stateAddToBasket.basket[0].barcode));
        expect(stateIncreaseCount.basket[0].count).toBe(2);

        let stateDecreaseCount = basketReducer(stateIncreaseCount,
            decreaseCountProductSuccess(stateAddToBasket.basket[0].barcode));

        expect(stateDecreaseCount.basket[0].count).toBe(1);
    });

    test('if product count equal 1, count of product should not be decrease', () => {
        let stateDecreaseCount = basketReducer(stateAddToBasket,
            decreaseCountProductSuccess(stateAddToBasket.basket[0].barcode));

        expect(stateDecreaseCount.basket[0].count).toBe(1);
    });
})

describe('deleteBasketSuccess', () => {
    test('all product should be delete', () => {
        let stateAddToBasket = basketReducer(state, addToBasketSuccess(product, 1));
        
        let stateDeleteBasket = basketReducer(stateAddToBasket,
            deleteBasketSuccess());
        expect(stateDeleteBasket.basket.length).toBe(0);
    });
})