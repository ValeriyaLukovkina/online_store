import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { ProductBasketType } from "../../type/type";
import Header from "./header";

type mapStateToPropsType = {
    basket: Array<ProductBasketType>
}

type MapDispatchToPropsType = {

}

export type PropsType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    basket: state.basket.basket
})

export default connect(mapStateToProps, {})(Header)