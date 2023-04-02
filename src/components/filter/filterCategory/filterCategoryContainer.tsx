import { connect } from "react-redux";
import { setCategory, setSubcategory } from "../../../redux/filter-reducer";
import { AppStateType } from "../../../redux/redux-store";
import { CategoryType } from "../../../type/type";
import FilterCategory from "./filterCategory";

type MapStateToPropsType = {
    categoryList: Array<CategoryType> | null,
    choosenCategory: string | null,
    choosenSubcategory: string | null,
    whereShow: 'header' | 'aside' | 'mobile'
}

type MapDispatchToPropsType = {
    setCategory: (category: string) => void,
    setSubcategory: (subcategory: string | null) => void,
}

type OwnPropsType = {
    whereShow: 'header' | 'aside' | 'mobile'
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStateToPropsType => ({
    categoryList: state.category.categoryList,
    choosenCategory: state.filter.category,
    choosenSubcategory: state.filter.subcategory,
    whereShow: ownProps.whereShow
})



export default connect(mapStateToProps, { setCategory, setSubcategory })(FilterCategory)