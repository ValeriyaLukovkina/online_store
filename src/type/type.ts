export type ProductType = {
    image_url: string,
    title: string,
    type_product: any,
    type_size: string,
    size: number,
    article: number,
    barcode: number,
    manufacturer: string,
    brand: string,
    description: string,
    price: number
}

export type CategoryType = {
    id: number,
    category: string,
    subcategory: Array<string>
}

export type SortValueType = 'Название А-Я' | 'Название Я-А' | 'По возрастанию цены' | 'По убыванию цены';

export type ProductBasketType = {
    image_url: string,
    title: string,
    type_product: any,
    type_size: string,
    size: number,
    article: number,
    barcode: number,
    manufacturer: string,
    brand: string,
    description: string,
    price: number,
    count: number
}

export type ProductAdminType = {
    image_url: string,
    title: string,
    subtype: any,
    typeSize: string,
    size: number,
    barcode: number,
    brand: string,
    description: string,
    price: number,
}