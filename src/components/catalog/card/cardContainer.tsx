import { connect } from "react-redux"
import { addToBasket } from "../../../redux/basket-reducer";
import { AppStateType } from "../../../redux/redux-store"
import { ProductType, SortValueType } from "../../../type/type";
import CatalogCard from "./card";

type MapStateToPropsType = {
    sort: SortValueType,
    productsFiltered: Array<ProductType>
}

type OwnPropsType = {
    productsFiltered: Array<ProductType>
}

type MapDispatchToPropsType = {
    addToBasket: (product: ProductType, countProduct: number) => void,
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStateToPropsType => ({
    sort: state.catalog.sort,
    productsFiltered: ownProps.productsFiltered
})

export default connect(mapStateToProps, { addToBasket })(CatalogCard)