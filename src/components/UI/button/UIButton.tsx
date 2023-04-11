import React from "react";
import style from './UIButton.module.scss';

const UIButton: React.FC<any> = ({ children, ...props }) => {
    return (
        <button {...props} className={style.btn}>
            {children}
        </button>
    )
}

export default UIButton;