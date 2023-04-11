import { Form, Formik } from "formik";
import React, { useState } from "react";
import Search from "../../search/search";
import { PropsType } from "./filterManufacturerContainer";
import style from "./filterManufacturer.module.scss"
import ManufacturerCheckbox from "./manufacturerCheckbox";
import { useEffect } from "react";


const FilterManufacturer: React.FC<PropsType> = ({ manufacturerList, setManufacturer }) => {
    const [chekedManufacturer, setChekedManufacturer] = useState([]);
    const [searchManufacturer, setSearchManufacturer] = useState('')

    useEffect(() => {
        setManufacturer(chekedManufacturer)
    }, [chekedManufacturer, setManufacturer])

    const [isShowFull, setIsFullList] = useState(false);

    const checkbboxList: any = manufacturerList ? Object.entries(manufacturerList).map(([titleManufacturer, countProduct]) => {
        if (titleManufacturer.toLowerCase().includes(searchManufacturer.toLowerCase())) {
            return <ManufacturerCheckbox key={titleManufacturer} titleManufacturer={titleManufacturer} countProduct={countProduct} />
        } 
    }) : null

    const showMore = () => {
        setIsFullList(true)
    }

    return (
        <div className={style.manufacturer}>
            <h3 className={style.manufacturer_title}>Производитель</h3>
            <Formik
                initialValues={{
                    chekedManufacturer: [],
                    searchManufacturer: '' 
                }}
                onSubmit={values => setManufacturer(values.chekedManufacturer)}
            >
                {({ values }) => (
                    <>
                        <Search nameValue='searchManufacturer' />
                        <Form className={style.manufacturer_form} >
                            {!isShowFull && checkbboxList ? checkbboxList.slice(0, 4) : checkbboxList}
                            {values.chekedManufacturer !== chekedManufacturer && setChekedManufacturer(values.chekedManufacturer)}
                            {values.searchManufacturer !== searchManufacturer && setSearchManufacturer(values.searchManufacturer)}
                        </Form>
                        {checkbboxList && checkbboxList.length > 4 && !isShowFull &&
                            <button className={style.manufacturer_more}
                                onClick={showMore}>
                                Показать все
                            </button>
                        }
                    </>
                )}
            </Formik>
        </div>
    )
}

export default FilterManufacturer;