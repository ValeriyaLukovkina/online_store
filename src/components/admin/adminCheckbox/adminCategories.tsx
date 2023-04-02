import React from "react";
import { useState } from "react";
import AdminCheckbox from "./adminCheckbox";
import style from "./../admin.module.scss";

const AdminCategories: React.FC<any> = ({ category }) => {
    const [isShowFull, setIsShowFull] = useState(false)
    const cubcategories = category.subcategory.map((subcategory: string) => {
        return <AdminCheckbox name="subtype" category={category.category} subcategory={subcategory} />
    })
    return (
        <div className={style.checkbox}>
            <p className={style.checkbox_title + ' ' + (isShowFull && style.checkbox_title_open)} onClick={() => setIsShowFull(!isShowFull)}>{category.category}</p>
            {isShowFull && cubcategories}
        </div>
    )
}

export default AdminCategories