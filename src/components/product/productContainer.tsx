import { connect } from "react-redux";
import { addToBasket, decreaseCountProduct, increaseCountProduct } from "../../redux/basket-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProductType } from "../../type/type";
import Product from "./product";


type MapStateToPropsType = {
    productList: Array<ProductType> | null,
}

type MapDispatchToPropsType = {
    addToBasket: (product: ProductType, countProduct: number) => void,
    increaseCountProduct: (barcode: number) => void,
    decreaseCountProduct: (barcode: number) => void,
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => ({
    productList: state.catalog.productList,
})

export default connect(mapStateToProps, { addToBasket, increaseCountProduct, decreaseCountProduct })(Product)