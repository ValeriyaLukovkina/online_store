import React from "react";
import style from './headerDesctop.module.scss';
import logomail from './../../../assests/svg/logomail.svg';
import logolocation from './../../../assests/svg/logolocation.svg';
import Nav from "./../nav";

const HeaderTop = () => {
    return (
        <div className={style.top}>
            <div className={style.top_contacts}>
                <div className={style.top_contacts_block}>
                    <img src={logolocation} alt='location' />
                    <div className={style.top_contacts_block_txt}>
                        <p className={style.top_contacts_block_txt_main}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                        <span className={style.top_contacts_block_txt_ad}>(Рынок Восточный)</span>
                    </div>
                </div>
                <span className={style.top_contacts_line}></span>
                <div className={style.top_contacts_block}>
                    <img src={logomail} alt='mail' />
                    <div className={style.top_contacts_block_txt}>
                        <a className={style.top_contacts_block_txt_link} href='mailto:opt.sultan@mail.ru'>opt.sultan@mail.ru</a>
                        <span className={style.top_contacts_block_txt_ad}>На связи в любое время</span>
                    </div>
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default HeaderTop;