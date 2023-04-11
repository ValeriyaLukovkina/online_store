import React from "react";
import { useMemo } from "react";
import { useResize } from "../../hooks/use-resize";
import { countTotalPrice } from "../../utils/helpWithBasket";
import HeaderInfo from "./desctop/headerInfo";
import HeaderTop from "./desctop/headerTop";
import style from './header.module.scss'
import { PropsType } from "./headerContainer";
import HeaderInfoSmall from "./mobile/headerInfoSmall";
import HeaderTopSmall from "./mobile/headerTopSmall";

const Header: React.FC<PropsType> = ({ basket }) => {

    const basketPrice = useMemo(() => {
        return countTotalPrice(basket);
    }, [basket])

    const basketLength = useMemo(() => {
        return basket.length
    }, [basket]);

    const screen = useResize();

    return (
        <div className={style.header}>
            {screen.isScreenMd
                ? <HeaderTop />
                : <HeaderTopSmall basketLength={basketLength} />}
            <div className={style.line}></div>
            {screen.isScreenMd
                ? <HeaderInfo basketLength={basketLength} basketPrice={basketPrice} />
                : <HeaderInfoSmall />}
            <div className={style.line}></div>
        </div>
    )
}

export default Header;