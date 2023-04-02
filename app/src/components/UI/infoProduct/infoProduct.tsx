import React from "react";
import { ProductType } from "../../../type/type";
import style from "./infoProduct.module.scss";

type PropsType = {
    name: string,
    mean: string | number
}

const InfoProduct: React.FC<PropsType> = ({ name, mean }) => {
    return (
        <p className={style.card}>
            <span className={style.card_name}>{name}:</span>
            <span className={style.card_mean}>{mean}</span>
        </p>
    )
}

export default InfoProduct;