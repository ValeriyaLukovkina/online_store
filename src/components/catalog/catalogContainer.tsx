import { connect } from "react-redux";
import { setSort } from "../../redux/catalog-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProductType, SortValueType } from "../../type/type";
import Catalog from "./catalog";

type MapStateToPropsType = {
    sortList: Array<string>,
    sortValue: SortValueType,
    productList: Array<ProductType> | null,
    choosenCategory: string | null,
    choosenSubcategory: string | null,
    choosenManufacturer: Array<string> | null,
    minPrice: number | null,
    maxPrice: number | null,
}

type MapDispatchToPropsType = {
    setSort: (sortValue: SortValueType) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => ({
    sortList: state.catalog.sortList,
    sortValue: state.catalog.sort,
    productList: state.catalog.productList,
    choosenCategory: state.filter.category,
    choosenSubcategory: state.filter.subcategory,
    choosenManufacturer: state.filter.manufacturer,
    minPrice: state.filter.minPriceProducts,
    maxPrice: state.filter.maxPriceProducts,
})

export default connect(mapStateToProps, { setSort: setSort })(Catalog)