import React from "react";
import { useMemo } from "react";
import style from "./filterPrice.module.scss"
import { PropsType } from "./filterPriceContainer";

const FilterPrice: React.FC<PropsType> = ({ minPriceProducts, maxPriceProducts, setMinPrice, setMaxPrice }) => {

    const minPrice = useMemo(() => {
        return minPriceProducts ? minPriceProducts : 0
    }, [minPriceProducts])

    const maxPrice = useMemo(() => {
        return maxPriceProducts ? maxPriceProducts : 10000
    }, [maxPriceProducts])


    const inputMinPrice = (val: number) => {
        if (isFinite(val)) {
            setMinPrice(val)
        }
        return;
    }

    const inputMaxPrice = (val: number) => {
        if (isFinite(val)) {
            setMaxPrice(val)
        }
        return;
    }
    return (
        <div className={style.price}>
            <p className={style.price_title}>
                Цена
                <span className={style.price_title_currency}>
                    &#8381;
                </span>
            </p>
            <div className={style.price_block}>
                <input className={style.price_block_input} value={minPrice} onChange={(event) => inputMinPrice(+event.target.value)} />
                <span className={style.price_block_span}>-</span>
                <input className={style.price_block_input} value={maxPrice} onChange={(event) => inputMaxPrice(+event.target.value)} />
            </div>
        </div>
    )
}

export default FilterPrice;