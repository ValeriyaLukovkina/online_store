export const filteredProducts = (products, category, subcategory, manufacturer, minPrice, maxPrice) => {
    let result = products;
    if (category) {
        result = result.filter(product => {
            let isInclude = false;
            product.type_product.map(type => {
                isInclude = Object.keys(type)[0] === category
            })
            return isInclude
        })
    }
    if (subcategory) {
        result = result.filter(product => {
            let isInclude = false;
            product.type_product.map(type => {
                isInclude = type[category] && type[category].some(subtype => {
                    return subtype === subcategory
                })
            })
            return isInclude

        })
    }
    if (manufacturer && manufacturer.length > 0) {
        result = result.filter(product => {
            return manufacturer.includes(product.manufacturer)
        })
    }
    if (minPrice) {
        result = result.filter(product => {
            return product.price >= minPrice
        })
    }
    if (maxPrice) {
        result = result.filter(product => {
            return product.price <= maxPrice
        })
    }
    return result;
}