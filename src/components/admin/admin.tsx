import React from "react";
import { PropsType } from "./adminContainer";
import FormAdmin from "./formAdmin";
import style from "./admin.module.scss";
import { ProductType } from "../../type/type";
import UIButtonRound from "../UI/buttonRound/UIButtonRound";
import logoDelete from "./../../assests/svg/logoDelete.svg"
import { useState } from "react";
import UIButton from "../UI/button/UIButton";

const Admin: React.FC<PropsType> = ({ categoryList, productList, addProduct, deleteProduct, changeProduct }) => {
    const [isAdding, setIsAdding] = useState(false);
    // const [isEdit, setIsEdit] = useState(false);
    const [productEdit, setProductEdit] = useState<ProductType | null>(null)


    const productBlock = productList && productList.map((product: ProductType) => {
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
    })
    return <div className={style.admin}>
        {!isAdding &&
            <div className={style.table}>
                <h2 className={style.table_title}>Товары</h2>
                <div className={style.table_header}>
                    <p className={style.table_header_block}>Фото</p>
                    <p className={style.table_header_block}>Название</p>
                    <p className={style.table_header_block}>Бренд</p>
                    <p className={style.table_header_block}>Цена</p>
                </div>
                {productBlock}
                <div className={style.admin_btn}>
                <UIButton onClick={() => setIsAdding(true)} type="submit">
                                Добавить
                            </UIButton>
                </div>
            </div>
        }
        {isAdding &&
            <FormAdmin categoryList={categoryList} addProduct={addProduct} productEdit={productEdit} changeProduct={changeProduct} setIsAdding={setIsAdding}/>
        }
    </div>
}

export default Admin;