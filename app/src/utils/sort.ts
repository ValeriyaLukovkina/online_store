import { SortValueType } from './../type/type';
import { ProductType } from "../type/type";

const sortAscending = (array: Array<ProductType>, field: keyof ProductType) => {
    return array.sort((a: ProductType, b: ProductType) => a[field] > b[field] ? 1 : -1);
}

const sortDescending = (array: Array<ProductType>, field: keyof ProductType) => {
    return array.sort((a: ProductType, b: ProductType) => a[field] < b[field] ? 1 : -1);
}

export const sortArray = (array: Array<ProductType>, field: keyof ProductType | null, sortValue: SortValueType | null) => {
    if (!field) {
        switch (sortValue) {
            case 'Название А-Я':
                return sortAscending(array, 'title');
            case 'Название Я-А':
                return sortDescending(array, 'title');
            case 'По возрастанию цены':
                return sortAscending(array, 'price');
            case 'По убыванию цены':
                return sortDescending(array, 'price');
            default:
                return array
        }
    }
    return sortAscending(array, field)
}