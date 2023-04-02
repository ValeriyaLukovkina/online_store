import React from "react";
// import UIButtonRound from "../../UI/buttonRound/UIButtonRound";
import style from './headerMobile.module.scss';
// import UIButton from "../../UI/button/UIButton";
// import logoSultan from './../../assests/svg/logoSultan.svg';
import logoCatalogDark from './../../../assests/svg/logoCatalogDark.svg';
import logoSearchDark from './../../../assests/svg/logoSearchDark.svg';
// import Search from "../../search/search";
// import logoCall from './../../assests/svg/call.svg';
// import logoDownload from './../../assests/svg/logoDownload.svg';
// import logoBasket from './../../assests/svg/logoBasket.svg';

type PropsType = {

}

const HeaderInfoSmall: React.FC<PropsType> = ({ }) => {
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