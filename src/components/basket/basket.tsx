import React from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import { PropsType } from "./basketContainer";
import style from "./basket.module.scss";
import { ProductBasketType } from "../../type/type";
import BasketProduct from "./basketProduct";
import UIButton from "../UI/button/UIButton";
import { countTotalPrice } from "../../utils/helpWithBasket";
import { useState } from "react";
import BreadCrumbs from "../UI/breadCrumbs/breadCrumbs";

const Basket: React.FC<PropsType> = ({ basket, increaseCountProduct, decreaseCountProduct, deleteFromBasket, deleteBasket }) => {
    const [showModal, setShowModal] = useState(false)
    const basketPrice = countTotalPrice(basket);
    const basketBlock = basket.map((product: ProductBasketType) => {
        return <BasketProduct key={product.barcode} product={product} increaseCountProduct={increaseCountProduct} decreaseCountProduct={decreaseCountProduct} deleteFromBasket={deleteFromBasket} />
    })
    return <div className={style.basket}>
        <BreadCrumbs>
            <NavLink className='breadCrumbs_name' to="/catalog">
                Главная
            </NavLink>
            <NavLink className='breadCrumbs_name' to="/basket">
                Корзина
            </NavLink>
        </BreadCrumbs>
        <h2 className={style.basket_title}>Корзина</h2>
        <div>
            {basketBlock}
        </div>
        <div className={style.basket_footer}>
            <UIButton disabled={basket.length > 0 ? false : true} onClick={() => {
                setShowModal(true)
                setInterval(() => {
                    deleteBasket()
                    setShowModal(false)
                }, 1000)
                }} style={{ 'padding': '21px 37.5px' }}
                data-testid='btn-order-complete'>
                Оформить заказ
            </UIButton>
            <p className={style.basket_footer_price}>{basketPrice} &#8381;</p>
        </div>
        {showModal &&
            ReactDOM.createPortal(
                <div className="modal" data-testid='modal-order-complete'>
                    <p className="modal_txt">Спасибо за заказ</p>
                </div>,
                document.body 
            )}
    </div>
}

export default Basket;