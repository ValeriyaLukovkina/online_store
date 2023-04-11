import React from "react";
import style from './footer.module.scss';
import logoSultan from './../../assests/svg/logoSultanWhite.svg';
import logoArrow from './../../assests/svg/logoArrow.svg';
import logoDownload from './../../assests/svg/logoDownload.svg';
import logoWhatsApp from './../../assests/svg/logoWhatsApp.svg';
import logoTelegram from './../../assests/svg/logoTelegram.svg';
import logoVisa from './../../assests/svg/logoVisa.svg';
import logoMastrcard from './../../assests/svg/logoMastrcard.svg';
import UIInput from "../UI/input/UIInput";
import UIButton from "../UI/button/UIButton";
import UIButtonRound from "../UI/buttonRound/UIButtonRound";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.footer_wrp}>
            <div className={style.footer}>
                <div className={style.footer_block}>
                    <img src={logoSultan} alt='logoSultan' />
                    <p className={style.footer_description}>
                        Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <span className={style.footer_span}>Подпишись на скидки и акции</span>
                    <div className={style.footer_mail}>
                        <UIInput nameValue={null} />
                        <div className={style.footer_mail_btn}>
                            <UIButtonRound >
                                <img className={style.search_btn_svg} src={logoArrow} alt='logoArrow' />
                            </UIButtonRound>
                        </div>
                    </div>
                </div>
                <div className={style.footer_block}>
                    <p className={style.footer_title}>Меню сайта:</p>
                    <ul className={style.footer_list}>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                О компании
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Доставка и оплата
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Возврат
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.footer_block}>
                    <p className={style.footer_title}>Категории:</p>
                    <ul className={style.footer_list}>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Бытовая химия
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='/catalog'>
                                Косметика и гигиена
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Товары для дома
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Товары для детей и мам
                            </Link>
                        </li>
                        <li className={style.footer_list_item}>
                            <Link className={style.footer_list_item_link} to='#'>
                                Посуда
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.footer_block}>
                    <p className={style.footer_title}>Скачать прайс-лист:</p>
                    <UIButton disabled>
                        Прайс-лист
                        <img src={logoDownload} alt='logoDownload' />
                    </UIButton>
                    <p className={style.footer_messange}>Связь в мессенджерах:</p>
                    <div>
                        <img src={logoWhatsApp} alt='WhatsApp' />
                        <img src={logoTelegram} alt='Telegram' />
                    </div>
                </div>
                <div className={style.footer_block}>
                    <p className={style.footer_title}>Контакты:</p>
                    <div className={style.contacts}>
                        <a className={style.contacts_info_tel} href='tel:+77774900091'>+7 (777) 490-00-91</a>
                        <p className={style.contacts_info_txt}>время работы: 9:00-20:00</p>
                        <button className={style.contacts_info_btn}>Заказать звонок</button>
                    </div>
                    <div className={style.mail}>
                        <a className={style.mail_link} href='mailto:opt.sultan@mail.ru'>opt.sultan@mail.ru</a>
                        <span className={style.mail_ad}>На связи в любое время</span>
                    </div>
                    <div className={style.payment}>
                        <img src={logoVisa} alt='Visa' />
                        <img src={logoMastrcard} alt='Mastrcard' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;