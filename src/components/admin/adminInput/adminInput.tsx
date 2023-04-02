import { Field } from "formik";
import React from "react";
import { useState } from "react";
import style from "./../admin.module.scss";

const AdminInput: React.FC<any> = ({
  field,
  txtLabel,
  error,
  type,
  // touched,
  form: { touched, errors },
  ...props
}) => {
  return (
    <div className={style.form_block}>
      <label className={style.form_block_label} htmlFor={field.name}>{txtLabel}</label>
      <Field className={style.form_block_input + ' ' + (touched[field.name] && errors[field.name] && style.form_block_input_error)} type={type} {...field} {...props} />
      {touched[field.name] && errors[field.name] ? <div className={style.form_block_error}>{errors[field.name]}</div> : null}
      {errors && console.log(errors)}
    </div>
  )
};

export default AdminInput;