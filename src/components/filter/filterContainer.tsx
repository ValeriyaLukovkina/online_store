import { connect } from "react-redux";
import { setProductList } from "../../redux/catalog-reducer";
import { AppStateType } from "../../redux/redux-store";
import Filter from "./filter";


type MapStateToPropsType = {
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({

})

export default connect(mapStateToProps, { setProductList })(Filter)