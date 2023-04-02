import React from "react";
import style from './header.module.scss';

const Nav = () => {
    return (
        <ul className={style.nav}>
            <li className={style.nav_item}><a className={style.nav_item_link} href="#">О компании</a></li>
            <li className={style.nav_item}><a className={style.nav_item_link} href="#">Доставка и оплата</a></li>
            <li className={style.nav_item}><a className={style.nav_item_link} href="#">Возврат</a></li>
            <li className={style.nav_item}><a className={style.nav_item_link} href="#">Контакты</a></li>
        </ul>
    )
}

export default Nav;