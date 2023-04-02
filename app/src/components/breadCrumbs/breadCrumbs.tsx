import React from "react";

const BreadCrumbs: React.FC<any> = ({children, ...props}) => {
    return (
        <div {...props} className='breadCrumbs'>
            {children}
        </div>
    )
}
export default BreadCrumbs