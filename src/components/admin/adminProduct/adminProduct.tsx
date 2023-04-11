import React from "react";
import { ProductType } from "../../../type/type";
import UIButtonRound from "../../UI/buttonRound/UIButtonRound";
import style from "./../admin.module.scss";
import logoDelete from "./../../../assests/svg/logoDelete.svg"

type PropsType = {
    product: ProductType,
    setIsAdding: (bool: boolean) => void,
    setProductEdit: (product: ProductType) => void,
    deleteProduct: (barcode: number) => void
}

const AdminProduct: React.FC<PropsType> = ({ product, setIsAdding, setProductEdit, deleteProduct }) => {
    return (
        <div className={style.table_product}>
            <div className={style.table_product_img}>
                <img className={style.table_product_img_img} src={product.image_url} alt={product.title} />
            </div>
            <h5 className={style.table_product_title}>{product.title}</h5>
            <p className={style.table_product_brand}>{product.brand}</p>
            <p className={style.table_product_price}>{product.price}</p>
            <button className={style.table_product_edit} onClick={() => {
                setIsAdding(true)
                setProductEdit(product)
            }}>
                Edit
            </button>
            <div className={style.table_product_delete}>
                <UIButtonRound onClick={() => deleteProduct(product.barcode)}>
                    <img className={style.table_product_delete_svg} src={logoDelete} alt='logoBasket' />
                </UIButtonRound>
            </div>
        </div>
    )
}

export default AdminProduct