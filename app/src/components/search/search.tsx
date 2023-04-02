import React from "react";
import UIInput from "../UI/input/UIInput";
import style from './search.module.scss';
import logoSearch from './../../assests/svg/logoSearch.svg'
import UIButtonRound from "../UI/buttonRound/UIButtonRound";

type PropsType = {
    nameValue: string | null,
}

const Search: React.FC<PropsType> = ({ nameValue, ...props }) => {
    return (
        <div className={style.search}>
            <UIInput nameValue={nameValue} {...props}/>
            <div className={style.search_btn}>
                <UIButtonRound >
                    <img className={style.search_btn_svg} src={logoSearch} alt='logoSearch' />
                </UIButtonRound>
            </div>
        </div>
    )
}

export default Search;