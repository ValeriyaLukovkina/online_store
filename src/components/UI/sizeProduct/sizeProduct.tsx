import React from "react";
import style from "./sizeProduct.module.scss";
import logoBottle from "./../../../assests/svg/logoBottle.svg";
import logoBox from "./../../../assests/svg/logoBox.svg";

type PropsType = {
    type: string,
    size: number
}

const SizeProduct: React.FC<PropsType> = ({ type, size }) => {
    return (
        <div className={style.card}>
            {type === 'volume' && <img src={logoBottle} alt='logoBottle' />}
            {type === 'size' && <img src={logoBox} alt='logoBox' />}
            <span className={style.card_value}>{size}</span>
        </div>
    )
}

export default SizeProduct;