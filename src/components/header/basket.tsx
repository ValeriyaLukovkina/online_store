import React from "react";
import style from './header.module.scss';
import logoBasket from './../../assests/svg/logoBasket.svg';

type PropsType = {
    basketLength: number
}
const BasketIcon: React.FC<PropsType> = ({ basketLength }) => {
    return (
        <div className={style.basket_icon}>
        <img className={style.basket_icon_img} src={logoBasket} alt='basket' />
        <span className={style.basket_icon_count}>{basketLength}</span>
    </div>
    )
}

export default BasketIcon;