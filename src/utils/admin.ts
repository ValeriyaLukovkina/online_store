export const formTypeProduct = (subtypes: Array<string>) => {
    let typeProduct: Array<any> = []

    subtypes.map((subtype: string) => {
        let [category, subcategory] = subtype.split('+++');

        if (!typeProduct.some((el: any) => el[category])) {

            let newObj: any = {};
            let subcategoryArr = [subcategory]
            newObj[category] = subcategoryArr
            typeProduct.push(newObj)
            return typeProduct
        } else {
            return typeProduct.map((el: any) => {
                if (el[category]) {
                    el[category] = [...el[category], subcategory]
                }
                return el;
            })

        }
    })
    return typeProduct
}