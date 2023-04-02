import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom"
import style from "./product.module.scss";
import { PropsType } from "./productContainer";
import { ProductType } from "../../type/type";
import logoBottle from "./../../assests/svg/logoBottle.svg";
import logoBox from "./../../assests/svg/logoBox.svg";
import logoBasketWhite from "./../../assests/svg/logoBasketWhite.svg";
import logoShare from "./../../assests/svg/logoShare.svg";
import logoDownloadDark from "./../../assests/svg/logoDownloadDark.svg";
import UIButton from "../UI/button/UIButton";
import { useState } from "react";
import SizeProduct from "../UI/sizeProduct/sizeProduct";
import InfoProduct from "../UI/infoProduct/infoProduct";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";

const Product: React.FC<PropsType> = ({ productList, addToBasket, increaseCountProduct, decreaseCountProduct }) => {
    const params = useParams();
    const [isShowDescription, setIsShowDescription] = useState(false);
    const [isShowFeature, setIsShowFeature] = useState(false);
    const [countProduct, setCountProduct] = useState(1);

    const increaseCount = () => {
        setCountProduct(countProduct + 1)
    }

    const decreaseCount = () => {
        if (countProduct > 1) {
            setCountProduct(countProduct - 1)
        }
    }

    let product: ProductType | undefined = productList?.filter((product: ProductType) => {
        return product.barcode === Number(params.barcode)
    })[0]
    return (
        <>
            <BreadCrumbs>
                <NavLink className='breadCrumbs_name' to="/catalog">
                    Главная
                </NavLink>
                <NavLink className='breadCrumbs_name' to="/catalog">
                    Косметика и гигиена
                </NavLink>
                {product &&
                    <NavLink className='breadCrumbs_name' to={`/catalog/${product.barcode}`}>
                        {product.title}
                    </NavLink>}
            </BreadCrumbs>
            {product &&
                <div className={style.product}>
                    <div className={style.product_img}>
                        <img className={style.product_img_img} src={product.image_url} alt={product.title} />

                    </div>
                    <div className={style.info}>
                        <p className={style.info_stock}>В наличии</p>
                        <h3 className={style.info_title}>
                            {product.title}
                        </h3>
                        <div className={style.info_size}>
                            <SizeProduct type={product.type_size} size={product.size} />
                        </div>
                        <div className={style.info_basket}>
                            <div className={style.info_basket_block}>
                                <p className={style.info_basket_price}>{product.price} &#8381;</p>
                                <div className={style.info_basket_counter}>
                                    <button className={style.info_basket_counter_btn} onClick={decreaseCount}>
                                        -
                                    </button>
                                    <span className={style.info_basket_counter_count}>{countProduct}</span>
                                    <button className={style.info_basket_counter_btn} onClick={increaseCount}>+</button>
                                </div>
                            </div>
                            <div className={style.info_basket_btn}>
                                <UIButton style={{ 'padding': '21px 40px' }} onClick={() => (product && addToBasket(product, countProduct))}>
                                    В корзину
                                    <img className={style.info_basket_btn_logo} src={logoBasketWhite} alt='logoBasket' />
                                </UIButton>
                            </div>
                            <button className={style.info_share}>
                                <img src={logoShare} alt='logoShare' />
                            </button>
                            <div className={style.info_delivery}>
                                <p className={style.info_delivery_txt}>
                                    При покупке от <span>10 000 &#8381;</span> бесплатная доставка по Кокчетаву и области

                                </p>                    </div>
                            <button className={style.info_price}>
                                Прайс-лист
                                <img src={logoDownloadDark} alt='logoDownloadDark' />
                            </button>
                        </div>
                        <div className={style.info_about}>
                            <InfoProduct name='Производитель' mean={product.manufacturer} />
                            <InfoProduct name='Бренд' mean={product.manufacturer} />
                            <InfoProduct name='Артикул' mean={product.article} />
                            <InfoProduct name='Штрихкод' mean={product.barcode} />
                        </div>
                        <div className={style.info_description}>
                            <button className={style.info_showmore + ' ' + (isShowDescription && style.info_showmore_open)}
                                onClick={() => setIsShowDescription(!isShowDescription)}>
                                Описание
                            </button>
                            {isShowDescription && <p className={style.info_description_txt}>{product.description}</p>}
                        </div>
                        <div className={style.info_feature}>
                            <button className={style.info_showmore + ' ' + (isShowFeature && style.info_showmore_open)}
                                onClick={() => setIsShowFeature(!isShowFeature)}>
                                Характеристики
                            </button>
                            {isShowFeature &&
                                <div>
                                    <div className={style.info_about_block}>
                                        <p className={style.info_about_block_title}>Назначение:</p>
                                        <p className={style.info_about_block_mean}>{product.type_product.map((type: any) => {
                                            Object.keys(type).map(el => {
                                                return el
                                            })
                                        })}</p>
                                    </div>
                                    <InfoProduct name='Тип' mean={product.article} />
                                    <InfoProduct name='Производитель' mean={product.manufacturer} />
                                    <InfoProduct name='Бренд' mean={product.brand} />
                                    <InfoProduct name='Артикул' mean={product.article} />
                                    <InfoProduct name='Штрихкод' mean={product.barcode} />
                                    {product.type_size === 'volume' && <InfoProduct name='Объем' mean={product.size} />}
                                    {product.type_size === 'size' && <InfoProduct name='Вес' mean={product.size} />}
                                </div>}
                        </div>
                    </div>
                </div>}
            {!product && <h2>Товар не найден</h2>}
        </>
    )
}

export default Product; 