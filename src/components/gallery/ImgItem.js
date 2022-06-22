import React from 'react';

const ImgItem = (props) => {
    return (
        <div className='imgItem'>
                {/*<strong> {props.photo.title}</strong>*/}
                <img className='imgItem__img' src={props.photo.url}  />
        </div>
    );
};

export default ImgItem;