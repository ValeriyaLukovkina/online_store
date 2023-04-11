import React from "react";
// import UIButtonRound from "../../UI/buttonRound/UIButtonRound";
import style from './headerMobile.module.scss';
import logoCatalogDark from './../../../assests/svg/logoCatalogDark.svg';
import logoSearchDark from './../../../assests/svg/logoSearchDark.svg';

const HeaderInfoSmall = () => {
    return (
        <div className={style.info}>
            <button className={style.info_btn}>
                <img src={logoCatalogDark} alt='logoCatalog' />
                <span className={style.info_btn_span}>Каталог</span>
            </button>
            <div className={style.info_line}>

            </div>
            <button className={style.info_btn}>
                <img src={logoSearchDark} alt='logoSearch' />
                <span className={style.info_btn_span}>Каталог</span>
            </button>
        </div>
    )
}

export default HeaderInfoSmall;