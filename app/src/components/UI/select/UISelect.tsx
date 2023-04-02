import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
// import { createPortal } from "react-dom";
import style from './UISelect.module.scss';

type PropsType = {
    options: Array<string>,
    value: string,
    chooseValue: any
}

const UISelect: React.FC<PropsType> = ({ options, value, chooseValue, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const optionsBlock = document.getElementById('options') as HTMLElement;

    const showOptions = () => {
        setIsVisible(true)
    }

    const hiddenOptions = () => {
        setIsVisible(false)
    }

    const choose = (option: string) => {
        chooseValue(option);
        hiddenOptions()
    }

    const optionList = options && options.map((option: string) => {
        return (
            <p className={style.select_options_option + ' ' + (value === option && style.select_options_option_choosen)} 
                key={option} onClick={() => choose(option)}>
                {option}
            </p>
        )
    })
    return (
        <div className={style.select}>
            <button className={style.select_btn} onClick={showOptions}>{value}</button>
            {optionsBlock && ReactDOM.createPortal(
                optionList,
                optionsBlock
            )}
            <div id="options" className={`${style.select_options} ${isVisible && style.select_options_visible}`}>
            </div>
        </div>
    )
}

export default UISelect;