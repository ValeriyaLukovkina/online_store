import React, { useState } from 'react';
import style from './UIPaginator.module.scss';

type PropsType = {
    totalCount: number,
    pageSize: number,
    onPageChanged: (p: number) => void,
    currentPage: number,
    portionSize: number
}

const UIPaginator: React.FC<PropsType> = ({ totalCount, pageSize, onPageChanged, currentPage, portionSize = 12 }) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button className={style.paginator_btn} onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span
                            key={p}
                            onClick={() => onPageChanged(p)}
                            className={style.paginator_span + ' ' + (currentPage === p && style.paginator_span_selected)}>{p}</span>
                    )
                })}
            {portionCount > portionNumber &&
                <button className={style.paginator_btn} onClick={() => setPortionNumber(portionNumber + 1)}>Вперед</button>}
        </div>
    )
}

export default UIPaginator;