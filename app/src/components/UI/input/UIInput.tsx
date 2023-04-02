import { Field, Form, Formik } from "formik";
import React from "react";
import style from './UIInput.module.scss'

type PropsType = {
    nameValue: string | null,
}

const UIInput: React.FC<PropsType> = ({ nameValue, ...props }) => {
    return (
        <>
        {nameValue && <Field {...props} placeholder='Поиск...' className={style.input} name={nameValue} />}
        {!nameValue && <input placeholder='Поиск...' className={style.input}/>}
        </>
    )
}

export default UIInput;