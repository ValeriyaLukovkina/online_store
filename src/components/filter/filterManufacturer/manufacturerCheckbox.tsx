import { Field } from "formik";
import React from "react";
import style from "./filterManufacturer.module.scss";

type PropsType = {
    titleManufacturer: string,
    countProduct: number,
    setManufacturer: (manufacturer: Array<string>) => void,
}

const ManufacturerCheckbox: React.FC<PropsType> = ({ titleManufacturer, countProduct, setManufacturer }) => {
    return (
        <label className={style.manufacturer_form_label}>
            <Field className={style.manufacturer_form_checkbox} type='checkbox' name='chekedManufacturer' value={titleManufacturer} />
            {titleManufacturer}
            <span className={style.manufacturer_form_count}>
                ({countProduct})
            </span>
        </label>
    )
}

export default ManufacturerCheckbox;