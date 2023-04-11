import React from "react";
import { Link } from "react-router-dom";
import style from './header.module.scss';

const Nav = () => {

    return (
        <ul className={style.nav}>
            <li className={style.nav_item}>
                <Link className={style.nav_item_link} to="#">
                    О компании
                </Link>
            </li>
            <li className={style.nav_item}>
                <Link className={style.nav_item_link} to="#">
                    Доставка и оплата
                </Link>
            </li>
            <li className={style.nav_item}>
                <Link className={style.nav_item_link} to="#">
                    Возврат
                </Link>
            </li>
            <li className={style.nav_item}>
                <Link className={style.nav_item_link} to="#">
                    Контакты
                </Link>
            </li>
        </ul>
    )
}

export default Nav;