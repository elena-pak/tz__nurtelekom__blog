import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addPost = (e) =>{
        e.preventDefault()
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form className='form'>
            <MyInput type='text' placeholder='Title' value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type='text' placeholder='Description' value={post.body} onChange={e => setPost({...post, body: e.target.value})} />
            <MyButton  onClick={addPost} >Add post</MyButton>
        </form>
    );
};

export default PostForm;