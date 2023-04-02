import { connect } from "react-redux";
import { addProduct, changeProduct, deleteProduct } from "../../redux/admin-reducer";
import { AppStateType } from "../../redux/redux-store";
import { CategoryType, ProductAdminType, ProductType } from "../../type/type";
import Admin from "./admin";

type MapStateToPropsType = {
    categoryList: Array<CategoryType> | null,
    productList: Array<ProductType> | null,
}

type MapDispatchToPropsType = {
    addProduct: (newProduct: ProductAdminType) => void,
    deleteProduct: (barcode: number) => void,
    changeProduct: (product: ProductAdminType) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    categoryList: state.category.categoryList,
    productList: state.catalog.productList
})

export default connect(mapStateToProps, { addProduct, deleteProduct, changeProduct })(Admin)