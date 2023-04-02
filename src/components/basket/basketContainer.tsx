import { connect } from "react-redux";
import { decreaseCountProduct, deleteBasket, deleteFromBasket, increaseCountProduct } from "../../redux/basket-reducer";
import { AppStateType } from "../../redux/redux-store";
import { ProductBasketType } from "../../type/type";
import Basket from "./basket";

type mapStateToPropsType = {
    basket: Array<ProductBasketType>,
}

type MapDispatchToPropsType = {
    increaseCountProduct: (barcode: number) => void,
    decreaseCountProduct: (barcode: number) => void,
    deleteFromBasket: (barcode: number) => void,
    deleteBasket: () => void
}

export type PropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    basket: state.basket.basket
})

export default connect(mapStateToProps, { increaseCountProduct, decreaseCountProduct, deleteFromBasket, deleteBasket })(Basket)