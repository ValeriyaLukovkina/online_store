import { ProductType, SortValueType } from "../../type/type";

export let product: ProductType = {
    "image_url": "https://drive.google.com/uc?export=view&id=1peSzqfjzqIVc8P3yaohYcBZYviNu7b40",
    "title": "ZIELINSKI & ROZEN black pepper, vetiver, neroli, amber",
    "type_product": [
        {"Уход за телом": ["Кремы, лосьоны, масла"]},
        {"Уход за руками": ["Увлажнение и питание", "Крем для рук"]}
    ],
    "type_size": "volume",
    "size": 200,
    "article": 19760340606,
    "barcode": 19760340606,
    "manufacturer": "ZIELINSKI & ROZEN",
    "brand": "ZIELINSKI & ROZEN",
    "description": "Крем с легкой текстурой интенсивно увлажняет и питает кожу. Подходит для всех типов кожи.",
    "price": 3660
}

export let productList: Array<ProductType> = [
    {
        "image_url": "https://drive.google.com/uc?export=view&id=1rtENZ2vlFGhSLO5Qfa4ZVyQflRUJItTz",
        "title": "DEPILTOUCH PROFESSIONAL azulen",
        "type_product": [
            { "Уход за телом": ["Эпиляция и депиляция"] }
        ],
        "type_size": "volume",
        "size": 100,
        "article": 39510200006,
        "barcode": 39510200006,
        "manufacturer": "DEPILTOUCH PROFESSIONAL",
        "brand": "DEPILTOUCH PROFESSIONAL",
        "description": "Принадлежит к серии восков Vegetal, созданных на основе натурального пчелиного воска с добавлением натуральных растительных масел, благодаря чему оказывают дополнительный уход, питают и увлажняют кожу. При нанесении образуют воздухонепроницаемый (однородный) слой и плотно охватывают волоски по всей длине. Классический воск темно-синего цвета с азуленом обладает смягчающими и успокаивающими свойствами. Содержит натуральный пчелиный воск, смягчающий кожу. Эффективно удаляет волосы, экономично наносится, а также легко снимается, не оставляя следов на коже.",
        "price": 972
    },
    {
        "image_url": "https://drive.google.com/uc?export=view&id=1dkd0ts_RmLbr6IjsK-pRS99DvUDTaVav",
        "title": "ECOLATIER argan & vanil",
        "type_product": [
            { "Уход за телом": ["Средства для ванны и душа", "Гели для душа"] }
        ],
        "type_size": "volume",
        "size": 600,
        "article": 30330300004,
        "barcode": 30330300004,
        "manufacturer": "ECOLATIER",
        "brand": "ECOLATIER",
        "description": "Гель для душа ECOLATIER®, благодаря натуральным экстрактам и маслам в составе, нежно очищает и питает кожу. Оставляет на коже приятный аромат, снимает усталость. Продукт содержит более 98% ингредиентов растительного происхождения.",
        "price": 265
    },
    {
        "image_url": "https://drive.google.com/uc?export=view&id=1lgXcRZpMSZgvBwvUch0R_hOzvQ-hbka0",
        "title": "DR IRENA ERIS spa resort tahiti",
        "type_product": [
            { "Уход за телом": ["Скрабы, пилинги и пр.", "Средства для ванны и душа"] }
        ],
        "type_size": "volume",
        "size": 125,
        "article": 15082200006,
        "barcode": 15082200006,
        "manufacturer": "DR IRENA ERIS",
        "brand": "DR IRENA ERIS",
        "description": "Скраб для тела Dr Irena Eris с экзотическим ароматом мягко очищает кожу, возвращает ей гладкость и превращает уход в расслабляющий ритуал. Средство содержит золотистые частицы, которые нежно отшелушивают кожу и придают ей сияние. Черный таитянский жемчуг, экстракт орхидеи и бетаин эффективно питают и смягчают кожу, делают её бархатистой и повышают упругость.",
        "price": 2295
    }
]

export let manufacturerList: { [index: string]: number } = { 'DEPILTOUCH PROFESSIONAL': 1, 'ECOLATIER': 1, 'DR IRENA ERIS': 1 }

export let sortList = ['Название А-Я', 'Название Я-А', 'По возрастанию цены', 'По убыванию цены'];

export let sort: SortValueType  = 'Название А-Я';

export let categoryList = [
    {
        "id": 1,
        "category": "Уход за телом",
        "subcategory": [
            "Эпиляция и депиляция",
            "Средства для ванны и душа",
            "Скрабы, пилинги и пр.",
            "Мочалки и губки для тела",
            "Кремы, лосьоны, масла",
            "Интимный уход",
            "Дезодоранты, антиперспиранты",
            "Гели для душа"
        ]
    },
    {
        "id": 2,
        "category": "Уход за руками",
        "subcategory": [
            "Увлажнение и питание",
            "Средства для ногтей",
            "Мыло твердое",
            "Мыло жидкое",
            "Крем для рук",
            "Защита рук",
            "Жидкость для снятия лака"
        ]
    }
]