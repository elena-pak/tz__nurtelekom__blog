import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const ImgForm = ({create}) => {
    const [photo, setPhoto] = useState({title:'', body:''})

    const addPhoto = (e) =>{
        e.preventDefault()
        const newPhoto ={
            ...photo, id: Date.now()
        }
        create(newPhoto)
        setPhoto({title: '', body: ''})
    }

    return (
        <form className='form'>
            <MyInput type='text' placeholder='Title' value={photo.title}
                     onChange={e => setPhoto({...photo, title: e.target.value})}/>
            <MyInput type="file" accept="image/*" placeholder='Add photo' value={photo.url} onChange={e => setPhoto({...photo, url: e.target.value})} />
            <MyButton  onClick={addPhoto} >Add post</MyButton>
        </form>
    );
};

export default ImgForm;