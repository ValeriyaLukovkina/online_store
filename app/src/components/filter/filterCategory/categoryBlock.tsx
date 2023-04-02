import React from "react";
import style from "./filterCategory.module.scss"

type PropsType = {
    categoryTitle: string,
    subcategoryList: Array<string>,
    choosenCategory: string | null,
    choosenSubcategory: string | null,
    chooseCategory: (category: string) => void,
    chooseSubcategory: (category: string, subcategory: string) => void
}

const CategoryBlock: React.FC<PropsType> = ({ categoryTitle, subcategoryList, choosenCategory, choosenSubcategory, chooseCategory, chooseSubcategory }) => {
    const subcategories = subcategoryList.map((subcategory: string) => {
        return <button className={style.categories_category_subcategory + ' ' + (choosenSubcategory === subcategory && style.choosen)}
            onClick={() => chooseSubcategory(categoryTitle, subcategory)}>
            {subcategory}
        </button>
    });

    return (
        <div className={style.categories_category}>
            <h3 className={style.categories_category_title + ' ' + (choosenCategory === categoryTitle && style.choosen)}
                onClick={() => chooseCategory(categoryTitle)}>
                {categoryTitle}
            </h3>
            {subcategories}
        </div>

    )
}

export default CategoryBlock;