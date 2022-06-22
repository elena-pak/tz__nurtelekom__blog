import React from 'react';
import {getPagesArray} from "../../usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div>
            {pagesArray.map(p =>
                <span key={p} onClick={()=> changePage(p)}>{p}</span>)}
        </div>
    );
};

export default Pagination;