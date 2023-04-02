import { addProductSuccess, changeProductSuccess, deleteProductSuccess } from './catalog-reducer';
import { ProductAdminType, ProductType } from './../type/type';
import { ThunkAction } from 'redux-thunk';
import { formTypeProduct } from '../utils/admin';

type InintalStateType = {

}

let initialState: InintalStateType = {

}

const adminReducer = (state = initialState, action: ActionsType): InintalStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

type ActionsType = {
    type: any
}

export const addProduct = (newProduct: ProductAdminType): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {
    const type = formTypeProduct(newProduct.subtype);

    let product: ProductType = {
        image_url: newProduct.image_url,
        title: newProduct.title,
        type_product: type,
        type_size: newProduct.typeSize,
        size: newProduct.size,
        article: newProduct.barcode,
        barcode: newProduct.barcode,
        manufacturer: newProduct.brand,
        brand: newProduct.brand,
        description: newProduct.description,
        price: newProduct.price
    }
    let catalogLS = localStorage.getItem('catalog');
    if (catalogLS) {
        localStorage.setItem('catalog', JSON.stringify([...JSON.parse(catalogLS), product]));
        dispatch(addProductSuccess(product))
    } 
}

export const changeProduct =  (newProduct: ProductAdminType): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {
    const type = formTypeProduct(newProduct.subtype);

    let product: ProductType = {
        image_url: newProduct.image_url,
        title: newProduct.title,
        type_product: type,
        type_size: newProduct.typeSize,
        size: newProduct.size,
        article: newProduct.barcode,
        barcode: newProduct.barcode,
        manufacturer: newProduct.brand,
        brand: newProduct.brand,
        description: newProduct.description,
        price: newProduct.price
    }

    let catalogLS = localStorage.getItem('catalog');
    if (catalogLS) {
        let catalog = JSON.parse(catalogLS).filter((product: ProductType) => product.barcode !== newProduct.barcode)
        localStorage.setItem('catalog', JSON.stringify([...catalog, product]));
        dispatch(changeProductSuccess(product))
    } 
}

export const deleteProduct = (barcode: number): ThunkAction<Promise<void>, any, unknown, any> => async (dispatch) => {
    let catalogLS = localStorage.getItem('catalog');

    if (catalogLS) {
        let catalog: Array<ProductType> = JSON.parse(catalogLS);
        localStorage.setItem('catalog', JSON.stringify(catalog.filter(product => product.barcode !== barcode)));
        dispatch(deleteProductSuccess(barcode))
    } 
}

export default adminReducer;