import '../App.css';
import {useEffect, useMemo, useRef, useState} from "react";
import PostList from "../components/posts/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/posts/PostForm";
import PostFilter from "../components/posts/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import {usePosts} from "../components/posts/useSortedPosts";
import {getPageCount} from "../components/usePagination";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../components/useObserver";
import {useFetching} from "../components/useFetching";
import getApi from "../components/posts/getPosts";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading] = useFetching(async (limit, page) => {
        const response = await getApi.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading ,() => {
        setPage(page + 1)
    })


    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)

    }


    return (
        <div className="App">
            <PostFilter filter={filter} setFilter={setFilter}/>
            <div className='posts__myButton'>
            <MyButton onClick={() => setModal(true)}>Create new post</MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostList posts={sortedAndSearchedPosts} title='Posts'/>
            <div ref={lastElement}></div>

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
