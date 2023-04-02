import React from "react";
import { useNavigate } from "react-router-dom";
import style from './headerDesctop.module.scss';
import UIButton from "./../../UI/button/UIButton";
import logoSultan from './../../../assests/svg/logoSultan.svg';
import logoCatalog from './../../../assests/svg/logoCatalog.svg';
import Search from "./../../search/search";
import logoCall from './../../../assests/svg/call.svg';
import logoDownload from './../../../assests/svg/logoDownload.svg';
import BasketIcon from "../basket";

type PropsType = {
    basketLength: number,
    basketPrice: number
}

const HeaderInfo: React.FC<PropsType> = ({ basketLength, basketPrice }) => {
    const navigate = useNavigate();

    return (
        <div className={style.info}>
            <img className={style.info_img} src={logoSultan} alt='logo' onClick={() => navigate('/')} />

            <div className={style.info_catalog}>
                <UIButton disabled>
                    Каталог
                    <img src={logoCatalog} alt='logoCatalog' />
                </UIButton>
            </div>

            <div className={style.info_search}>
                <Search nameValue={null} />
            </div>

            <div className={style.contacts}>
                <div className={style.contacts_info}>
                    <a className={style.contacts_info_tel} href='tel:+77774900091'>+7 (777) 490-00-91</a>
                    <p className={style.contacts_info_txt}>время работы: 9:00-20:00</p>
                    <button className={style.contacts_info_btn}>Заказать звонок</button>
                </div>
                <img src={logoCall} alt='call' />
            </div>

            <div className={style.info_price}>
                <UIButton disabled style={{ 'padding': '21px 45px' }}>
                    Прайс-лист
                    <img src={logoDownload} alt='logoCatalog' />
                </UIButton>
            </div>

            <div className={style.basket} onClick={() => navigate('/basket')}>
                <BasketIcon basketLength={basketLength} />
                <div className={style.basket_info}>
                    <p className={style.basket_info_txt}>Корзина</p>
                    <span className={style.basket_info_price}>{basketPrice} &#8381;</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo;