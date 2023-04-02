import { connect } from "react-redux"
import { addToBasket, decreaseCountProduct, increaseCountProduct } from "../../../redux/basket-reducer";
import { AppStateType } from "../../../redux/redux-store"
import { ProductType, SortValueType } from "../../../type/type";
import CatalogCard from "./card";

type mapStateToPropsType = {
    // productList: Array<ProductType> | null,
    // choosenCategory: string | null,
    // choosenSubcategory: string | null,
    // choosenManufacturer: Array<string> | null,
    sort: SortValueType,
    productsFiltered: any
    // minPrice: number | null,
    // maxPrice: number | null,
}

type MapDispatchToPropsType = {
    addToBasket: (product: ProductType, countProduct: number) => void,
    // increaseCountProduct: (barcode: number) => void,
    // decreaseCountProduct: (barcode: number) => void,
}

export type PropsType = mapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType, ownProps: any): mapStateToPropsType => ({
    // productList: state.catalog.productList,
    // choosenCategory: state.filter.category,
    // choosenSubcategory: state.filter.subcategory,
    // choosenManufacturer: state.filter.manufacturer,
    sort: state.catalog.sort,
    productsFiltered: ownProps.productsFiltered
    // minPrice: state.filter.minPriceProducts,
    // maxPrice: state.filter.maxPriceProducts,
})

export default connect(mapStateToProps, { addToBasket })(CatalogCard)