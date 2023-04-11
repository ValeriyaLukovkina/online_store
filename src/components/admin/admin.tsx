import React from "react";
import { PropsType } from "./adminContainer";
import FormAdmin from "./formAdmin";
import style from "./admin.module.scss";
import { ProductType } from "../../type/type";
import { useState } from "react";
import UIButton from "../UI/button/UIButton";
import { useMemo } from "react";
import AdminProduct from "./adminProduct/adminProduct";

const Admin: React.FC<PropsType> = ({ categoryList, productList, addProduct, deleteProduct, changeProduct }) => {
    const [isAdding, setIsAdding] = useState(false);

    const [productEdit, setProductEdit] = useState<ProductType | null>(null)

    const productBlock = useMemo(() => {
        return productList?.map((product: ProductType) => {
            return (
                <AdminProduct key={product.barcode} product={product} setIsAdding={setIsAdding}
                    setProductEdit={setProductEdit} deleteProduct={deleteProduct} />
            )
        })
    }, [productList, deleteProduct]);

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
            <FormAdmin categoryList={categoryList} addProduct={addProduct} productEdit={productEdit} changeProduct={changeProduct} setIsAdding={setIsAdding} />
        }
    </div>
}

export default Admin;