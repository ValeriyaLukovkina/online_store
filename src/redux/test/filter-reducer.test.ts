import filterReducer, { initialStateFilter, InitialStateTypeFilter, setCategory, setManufacturer, setMaxPrice, setMinPrice, setSubcategory } from "../filter-reducer";

let state: InitialStateTypeFilter = initialStateFilter;

describe('minPriceProducts', () => {

    test('setMinPrice at start should be 0', () => {
        expect(state.minPriceProducts).toBe(0);
    })

    test('setMinPrice with value 1000 should be return 1000', () => {
        let action = setMinPrice(1000);
        let newState = filterReducer(state, action);
        expect(newState.minPriceProducts).toBe(1000);
    });
})

describe('maxPriceProducts', () => {

    test('setMaxPrice at start should be 10000', () => {
        expect(state.maxPriceProducts).toBe(10000);
    })

    test('setMaxPrice with value 10000 should be return 10000', () => {
        let action = setMaxPrice(10000);
        let newState = filterReducer(state, action);
        expect(newState.maxPriceProducts).toBe(10000);
    });
})

describe('setCategory', () => {
    test('category should be set', () => {
        let action = setCategory('111');
        let newState = filterReducer(state, action);

        expect(newState.category).not.toBeNaN();
    });
});

describe('setSubcategory', () => {
    test('subcategory should be set', () => {
        let action = setSubcategory('111');
        let newState = filterReducer(state, action);

        expect(newState.subcategory).not.toBeNaN();
    });
})

describe('setManufacturer', () => {
    test('manufacturer should be set', () => {
        let action = setManufacturer(['1', '2', '3']);
        let newState = filterReducer(state, action);

        expect(newState.manufacturer).toEqual(['1', '2', '3']);
    });
})
