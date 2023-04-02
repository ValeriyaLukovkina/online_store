import { connect } from "react-redux";
import { setManufacturer } from "../../../redux/filter-reducer";
import { AppStateType } from "../../../redux/redux-store";
import FilterManufacturer from "./filterManufacturer";

type MapStateToPropsType = {
    manufacturerList: { [index: string]: number } | null,
}

type MapDispatchToPropsType = {
    setManufacturer: (manufacturer: Array<string>) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    manufacturerList: state.catalog.manufacturerList
})



export default connect(mapStateToProps, { setManufacturer })(FilterManufacturer)