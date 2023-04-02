import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ProductType } from "../../type/type";
import { filteredProducts } from "../../utils/filterProduct";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import FilterCategoryContainer from "../filter/filterCategory/filterCategoryContainer";
import FilterContainer from "../filter/filterContainer";
import UIPaginator from "../UI/paginator/UIPaginator";
import UISelect from "../UI/select/UISelect";
import CardContainer from "./card/cardContainer";
import style from "./catalog.module.scss";
import { PropsType } from "./catalogContainer";

const Catalog: React.FC<PropsType> = ({ sortList, sortValue, setSort, productList, choosenCategory, choosenSubcategory, choosenManufacturer, minPrice, maxPrice }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const productsFiltered: Array<ProductType> = productList ? filteredProducts(productList, choosenCategory, choosenSubcategory,
        choosenManufacturer, minPrice, maxPrice) : null;
    return (
        <div>
                        <BreadCrumbs>
                <NavLink className='breadCrumbs_name' to="/catalog">
                    Главная
                </NavLink>
                <NavLink className='breadCrumbs_name' to="/catalog">
                    Косметика и гигиена
                </NavLink>
            </BreadCrumbs>
        <div className={style.catalog}>
            <div className={style.catalog_header}>
                <h2 className={style.catalog_header_title}>Косметика и гигиена</h2>
                <FilterCategoryContainer whereShow='header' />
                <div className={style.catalog_header_sort}>
                    <span className={style.catalog_header_sort_title}>Сортировка:</span>
                    <UISelect options={sortList} value={sortValue} chooseValue={setSort} />
                </div>
            </div>
            <div className={style.catalog_filter}>
                <FilterContainer />
            </div>
            <div className={style.catalog_products}>
                <CardContainer productsFiltered={productsFiltered && productsFiltered.slice(12 * (currentPage - 1), 12 * currentPage)} />
            </div>
            {productsFiltered && <div className={style.catalog_paginator}>
                <UIPaginator totalCount={productsFiltered.length} pageSize={12} onPageChanged={setCurrentPage} currentPage={currentPage} portionSize={5} />
            </div>}
        </div>
        </div>
    )
}

export default Catalog; 