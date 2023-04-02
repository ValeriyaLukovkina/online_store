import { Form, Formik } from "formik";
import React from "react";
import { CategoryType } from "../../../type/type";
import CategoryBlock from "./categoryBlock";
import style from "./filterCategory.module.scss"
import { PropsType } from "./filterCategoryContainer";


const FilterCategory: React.FC<PropsType> = ({ categoryList, whereShow, choosenCategory, choosenSubcategory, setCategory, setSubcategory }) => {
    const chooseCategory = (category: string) => {
        setCategory(category)
        setSubcategory(null)
    }

    const chooseSubcategory = (category: string, subcategory: string) => {
        setCategory(category)
        setSubcategory(subcategory)
    }

    const categoriesAside = whereShow === 'aside' && categoryList?.map((category: CategoryType) => {
        return <CategoryBlock key={category.id} categoryTitle={category.category} subcategoryList={category.subcategory}
            choosenCategory={choosenCategory} choosenSubcategory={choosenSubcategory} chooseCategory={chooseCategory} chooseSubcategory={chooseSubcategory} />
    })

    const categoriesHeader = whereShow === 'header' && categoryList?.map((category: CategoryType) => {
        return (
            <div className={style.categories_header_category + ' ' + (choosenCategory === category.category && style.choosen)} key={category.id}
                onClick={() => chooseCategory(category.category)}>
                {category.category}
            </div>
        )
    })

    const categoriesMobile = whereShow === 'mobile' && categoryList?.map((category: CategoryType) => {
        return (
            <p className={style.categories_mobile_category + ' ' + (choosenCategory === category.category && style.choosen)} key={category.id}
                onClick={() => chooseCategory(category.category)}>
                {category.category}
            </p>
        )
    })

    return (
        <>
            {whereShow === 'header' && <div className={style.categories_header}>{categoriesHeader}</div>}
            {whereShow === 'aside' && <div className={style.categories}>{categoriesAside}</div>}
            {whereShow === 'mobile' && <div className={style.categories_mobile}>{categoriesMobile}</div>}
        </>
    )
}

export default FilterCategory;