import { ProductBasketType } from "../type/type";

type whatDoType = 'decrease' | 'increase';

export const includeInArray = (barcode: number, basket: Array<ProductBasketType>) => {
    return basket.some((product: ProductBasketType) => {
        return product.barcode === barcode
    })
}

export const isChangeCount = (barcode: number, basket: Array<ProductBasketType>, countProduct: number) => {
    return basket.filter((product: ProductBasketType) => product.barcode === barcode)[0].count === countProduct
}

export const increaseDecreaseCount = (whatDo: whatDoType, barcode: number, basket: Array<ProductBasketType>) => {
    return basket.map((product: ProductBasketType) => {
        if (product.barcode === barcode) {
            if (whatDo === 'increase') {
                product.count++
            } else if (whatDo === 'decrease') {
                if (product.count > 1) {
                    product.count--;
                }
            }
        }
        return product
    })
}

export const countTotalPrice = (basket: Array<ProductBasketType>) => {
    return basket.reduce((total: number, product: ProductBasketType): number => {
        return total + (product.price * product.count)
    }, 0)
} 