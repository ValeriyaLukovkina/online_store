import React from "react";
import { ProductBasketType } from "../../type/type";
import UIButtonRound from "../UI/buttonRound/UIButtonRound";
import SizeProduct from "../UI/sizeProduct/sizeProduct";
import style from "./basket.module.scss";
import logoDelete from "./../../assests/svg/logoDelete.svg"

type PropsType = {
    product: ProductBasketType,
    increaseCountProduct: (barcode: number) => void,
    decreaseCountProduct: (barcode: number) => void,
    deleteFromBasket: (barcode: number) => void
}
const BasketProduct: React.FC<PropsType> = ({ product, increaseCountProduct, decreaseCountProduct, deleteFromBasket }) => {
    return (
        <div data-testid='product-basket' className={style.product}>
            <div className={style.product_img}>
                <img className={style.product_img_img} src={product.image_url} alt={product.title} />
            </div>
            <div className={style.product_about}>
                <SizeProduct type={product.type_size} size={product.size} />
                <h2 className={style.product_about_title}>{product.title}</h2>
                <p className={style.product_about_description}>
                    {product.description.length > 200 ? product.description.slice(0, 200) + '...' : product.description}
                </p>
            </div>
            <div className={style.product_extra}>
                <div className={style.product_extra_counter}>
                    <button className={style.product_extra_counter_btn} onClick={() => decreaseCountProduct(product.barcode)}>
                        -
                    </button>
                    <span className={style.product_extra_counter_count}>{product.count}</span>
                    <button className={style.product_extra_counter_btn} onClick={() => increaseCountProduct(product.barcode)}>
                        +
                    </button>
                </div>
                <span className={style.product_extra_line}></span>
                <p className={style.product_extra_price}>{product.count * product.price} &#8381;</p>
                <span className={style.product_extra_line}></span>
                <div className={style.product_extra_btn}>
                    <UIButtonRound data-testid='btn-delete-from-basket' onClick={() => deleteFromBasket(product.barcode)}>
                        <img className={style.product_extra_btn_svg} src={logoDelete} alt='logoBasket' />
                    </UIButtonRound>
                </div>
            </div>
        </div>
    )
}

export default BasketProduct;