import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AdminInput from "./adminInput/adminInput";
import style from "./admin.module.scss";
import { CategoryType, ProductAdminType, ProductType } from "../../type/type";
import AdminCategories from "./adminCheckbox/adminCategories";
import { useMemo } from "react";
import UIButton from "../UI/button/UIButton";

type PropsType = {
    categoryList: Array<CategoryType> | null,
    addProduct: (newProduct: ProductAdminType) => void,
    productEdit: ProductType | null,
    changeProduct: (product: ProductAdminType) => void,
    setIsAdding: (bool: boolean) => void
}

const FormSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Минимальная длина 3 символов')
        .max(50, 'Максимальная длина 100 символов')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Минимальная длина 10 символов')
        .max(1024, 'Максимальная длина 1024 символов')
        .required('Required'),
    image_url: Yup.string()
        .required('Required')
        .matches(/(\.png|\.jpeg)$/, 'Формат png или jpeg'),
    subtype: Yup.array().min(1, 'Required'),
    typeSize: Yup.string().required('Required'),
    size: Yup.number().required('Required'),
    barcode: Yup.number()
        .required('Required')
        .positive('Только положительное число'),
    brand: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
});

const FormAdmin: React.FC<PropsType> = ({ categoryList, productEdit, addProduct, changeProduct, setIsAdding }) => {

    const initial = useMemo(() => {
        let subtypeArr: Array<string> = []

        productEdit?.type_product.forEach((type: any) => {
            let category: string = Object.keys(type)[0]
            type[category].forEach((subtype: Array<string>) => {
                subtypeArr.push(`${category}+++${subtype}`)
            })
        })

        return productEdit ? {
            title: productEdit.title,
            description: productEdit.description,
            image_url: productEdit.image_url,
            subtype: subtypeArr,
            typeSize: productEdit.type_size,
            size: productEdit.size,
            barcode: productEdit.barcode,
            brand: productEdit.brand,
            price: productEdit.price
        } : {
            title: '',
            description: '',
            image_url: '',
            subtype: [],
            typeSize: 'Volume',
            size: 0,
            barcode: 0,
            brand: '',
            price: 0
        }
    }, [productEdit])

    return (
        <div>
            <Formik
                initialValues={initial}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                    let product: ProductAdminType = values
                    if (productEdit) {
                        changeProduct(product)
                    } else {
                        addProduct(product);
                    }
                    setIsAdding(false)
                }}
            >
                {({ touched, errors, values }) => {
                    console.log(values)
                    return (
                        <Form className={style.form}>
                            <Field name="title" component={AdminInput} placeholder="Введите название" txtLabel='Название товара' type='text' />
                            <Field name="description" component={AdminInput} placeholder="Введите описание" txtLabel='Описание' type='text' style={{ 'height': '100px' }} />
                            <Field name="image_url" component={AdminInput} placeholder="Введите URL картинки" txtLabel='URL' type='text' />

                            <div>
                                <p className={style.form_block_label}>
                                    Выберите категорию
                                </p>
                                {categoryList && categoryList.map((category: CategoryType) => {
                                    return <AdminCategories category={category} />
                                })}
                            </div>

                            <label className={style.form_block_label} htmlFor="typeSize"> Выберете тип размера</label>
                            <Field name="typeSize" as="select">
                                <option value="volume">Volume</option>
                                <option value="size">Size</option>
                            </Field>
                            <Field name="size" component={AdminInput} placeholder="Введите размер" txtLabel='Размер' type='number' />
                            <Field name="barcode" component={AdminInput} placeholder="Введите штрихкод" txtLabel='Штрихкод' type='number' disabled={productEdit ? true : false} />
                            <Field name="brand" component={AdminInput} placeholder="Введите производителя" txtLabel='Производитель' type='text' />
                            <Field name="price" component={AdminInput} placeholder="Введите цену" txtLabel='Цена' type='number' />
                            <div className={style.admin_btn}>
                                <UIButton type="submit">
                                    Добавить
                                </UIButton>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default FormAdmin;