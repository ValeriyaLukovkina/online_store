import React from "react";
import { useState } from "react";
import { useResize } from "../../hooks/use-resize";
import UIButtonRound from "../UI/buttonRound/UIButtonRound";
import style from "./filter.module.scss"
import FilterCategoryContainer from "./filterCategory/filterCategoryContainer";
import FilterManufacturerContainer from "./filterManufacturer/filterManufacturerContainer";
import FilterPriceContainer from "./filterPrice/filterPriceContainer";

const Filter: React.FC<any> = ({ setProductList }) => {
    const [isShowOptions, setIsShowOptions] = useState(false);

    const screen = useResize();

    return (
        <div className={style.filter}>
            <div className={style.filter_options}>
                <h3 className={style.filter_options_title}>
                    Подбор по параметрам
                </h3>
                <div className={style.filter_options_btn} onClick={() => setIsShowOptions(!isShowOptions)}>
                    <UIButtonRound style={{ 'backgroundColor': 'rgba(255, 202, 101, 0.5)' }}>
                        <span className={style.filter_options_btn_arrow + ' ' + (isShowOptions && style.filter_options_btn_arrow_hidden)}></span>
                    </UIButtonRound>
                </div>
            </div>
            {screen.isScreenMd && <FilterPriceContainer />}
            {screen.isScreenMd && <FilterManufacturerContainer />}
            {screen.isScreenMd && <FilterCategoryContainer whereShow='aside' />}
            {!screen.isScreenMd && <FilterCategoryContainer whereShow='mobile' />}
        </div>
    )
}

export default Filter;