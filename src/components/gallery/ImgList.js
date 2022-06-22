import React, {useState} from 'react';
import ImgItem from "./ImgItem";

const ImgList = ({photos, title}) => {
    return (
        <div className='imgList'>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <div className='imgList__item'>
            { photos.map(photo =>
                <ImgItem photo={photo} key={photo.id}/>
            )}
            </div>

        </div>
    );
};

export default ImgList;