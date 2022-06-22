import React from 'react';
import MyInput from "../UI/input/MyInput";

const ImgFilter = ({filter, setFilter}) => {
    return (
        <div className='postFilter'>
            <MyInput placeholder='Search...' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} />
        </div>
    );
};

export default ImgFilter;