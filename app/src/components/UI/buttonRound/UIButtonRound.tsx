import React from "react";
import style from './UIButtonRound.module.scss'

const UIButtonRound: React.FC<any> = ({children, ...props}) => {
    return (
        <button {...props} className={style.btn}>
            {children}
        </button>
    )
}

export default UIButtonRound;