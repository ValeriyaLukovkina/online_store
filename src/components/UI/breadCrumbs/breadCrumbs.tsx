import React from "react";

type PropsType = {
    children: React.ReactNode
}

const BreadCrumbs: React.FC<PropsType> = ({ children, ...props }) => {
    return (
        <div {...props} className='breadCrumbs'>
            {children}
        </div>
    )
}
export default BreadCrumbs