import { ProductType } from "../type/type";

export const countValueInArray = (array: Array<ProductType>, whatcount: keyof ProductType) => {
    const obj: { [index: string]: number } = {}
    array.map((el: ProductType) => {
        const mean = el[whatcount];
        // @ts-ignore
        if (!obj[mean]) {
            // @ts-ignore
            obj[mean] = 1
        } else {
            // @ts-ignore
            obj[mean]++
        }
    })
    return obj;
}