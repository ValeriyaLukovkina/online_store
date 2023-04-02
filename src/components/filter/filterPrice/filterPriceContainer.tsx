import { connect } from "react-redux";
import { setMaxPrice, setMinPrice } from "../../../redux/filter-reducer";
import { AppStateType } from "../../../redux/redux-store";
import FilterPrice from "./filterPrice";

type MapStateToPropsType = {
    minPriceProducts: number | null,
    maxPriceProducts: number | null,
}

type MapDispatchToPropsType = {
    setMinPrice: (val: number) => void,
    setMaxPrice: (val: number) => void,
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    minPriceProducts: state.filter.minPriceProducts,
    maxPriceProducts: state.filter.maxPriceProducts
})



export default connect(mapStateToProps, { setMinPrice, setMaxPrice })(FilterPrice)