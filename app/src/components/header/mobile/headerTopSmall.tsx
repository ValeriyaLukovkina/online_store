import React from "react";
import UIButtonRound from "../../UI/buttonRound/UIButtonRound";
import style from './headerMobile.module.scss';
import logoSultan from './../../../assests/svg/logoSultan.svg';
import BasketIcon from "../basket";

type PropsType = {
    basketLength: number
}

const HeaderTopSmall: React.FC<PropsType> = ({ basketLength }) => {
    return (
        <div className={style.top}>
            <div className={style.top_menu}>
                <UIButtonRound>
                    <span className={style.top_menu_icon}></span>
                </UIButtonRound>
            </div>
            <img className={style.top_logo} src={logoSultan} alt='logo' />

            <BasketIcon basketLength={basketLength} />
        </div>
    )
}

export default HeaderTopSmall;