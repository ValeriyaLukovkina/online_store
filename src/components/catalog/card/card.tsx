import React from "react";
import { useNavigate } from "react-router-dom";
import logoBasketWhite from "./../../../assests/svg/logoBasketWhite.svg";
import { ProductType } from "../../../type/type";
import style from './card.module.scss'
import UIButton from "../../UI/button/UIButton";
import { PropsType } from "./cardContainer";
import { filteredProducts } from "../../../utils/filterProduct";
import { sortArray } from "../../../utils/sort";
import InfoProduct from "../../UI/infoProduct/infoProduct";
import SizeProduct from "../../UI/sizeProduct/sizeProduct";

const CatalogCard: React.FC<PropsType> = ({ 
    sort, addToBasket, productsFiltered}) => {
    const navigate = useNavigate();
    // const productsFiltered: Array<ProductType> = filteredProducts(productList, choosenCategory, choosenSubcategory,
    //     choosenManufacturer, minPrice, maxPrice);
    const productsSorted = productsFiltered ? sortArray(productsFiltered, null, sort) : null
    const productcard = productsSorted && productsSorted.map((product: ProductType) => {
        return (
            <div className={style.card}
                onClick={() => navigate(`/catalog/${product.barcode}`)}>
                <div className={style.card_image}>
                    <img className={style.card_image_img} src={product.image_url} alt={product.title} />
                </div>
                { }
                <SizeProduct type={product.type_size} size={product.size} />
                <h3 className={style.card_title}>
                    {product.title}
                </h3>
                <InfoProduct name='Штрихкод' mean={product.barcode} />
                <InfoProduct name='Производитель' mean={product.manufacturer} />
                <InfoProduct name='Бренд' mean={product.brand} />
                <div className={style.card_buy}>
                    <p className={style.card_buy_price}>
                        {product.price} &#8381;
                    </p>
                    <UIButton style={{ 'padding': '15px 25px' }} onClick={(e: any) => {
                        e.stopPropagation()
                        addToBasket(product, 1)
                    }
                    }>
                        В корзину
                        <img src={logoBasketWhite} alt='logoBasket' />
                    </UIButton>

                </div>
            </div>
        )
    })
    return (
        <div className={style.wrp}>
            {productcard}
            {productsSorted && productsSorted.length < 1 && <p className={style.empty}>Товаров не найдено</p>}
        </div>
    )
}

export default CatalogCard;