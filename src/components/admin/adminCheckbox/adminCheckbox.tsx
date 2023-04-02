import { Field } from "formik";
import React from "react";
import style from "./../admin.module.scss";

const AdminCheckbox: React.FC<any> = ({
    field,
    txtLabel,
    category,
     subcategory,
    // touched,
    // form: { touched, errors },
    ...props
}) => {
     
    return (
        <label className={style.checkbox_label}>
            <Field className={style.checkbox_input} type="checkbox" value={category + '+++' + subcategory} {...props} />
            {subcategory}
        </label>
        
    )
}

export default AdminCheckbox;