import React, {useState} from 'react';
import classes from './Paginator.module.css';

let Paginator = (props) => {


    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = props.portionSize;

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1); 

    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={classes.pageNumbersContainer}>
            {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>Back</button>
            }
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                  .map((page) => {
                return <span className={props.currentPage === page && classes.selectedPage} onClick={(e) => {
                    props.onPageChanged(page)
                }}>{page}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Forward</button>
        }

        </div>
    )
        
}

export default Paginator;