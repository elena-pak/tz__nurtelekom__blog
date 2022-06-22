import '../App.css';
import {useEffect, useRef, useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import {getPageCount} from "../components/usePagination";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../components/useObserver";
import {useFetching} from "../components/useFetching";
import getApiPhoto from "../components/gallery/getImg";
import ImgList from "../components/gallery/ImgList";
import ImgForm from "../components/gallery/ImgForm";
import ImgFilter from "../components/gallery/ImgFilter";
import {SortedPhotos} from "../components/gallery/SortedPhotos";

function Gallery() {
    const [photos, setPhotos] = useState([])
    const [filter, setFilter] = useState({query: ''})
    const [modal, setModal] = useState(false)
    const sortedPhotos = SortedPhotos(photos, filter.query);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPhotos, isPhotosLoading] = useFetching(async (limit, page) => {
        const response = await getApiPhoto.getAll(limit, page);
        setPhotos([...photos, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPhotosLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPhotos(limit, page)
    }, [page, limit])
    console.log(photos)

    const createPhoto = (newPhoto) => {
        setPhotos([...photos, newPhoto])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)

    }

    return (
        <div className="App">
            <ImgFilter filter={filter} setFilter={setFilter}/>
            <div className='posts__myButton'>
                <MyButton onClick={() => setModal(true)}>Add new photo</MyButton>
            </div>

            <MyModal visible={modal} setVisible={setModal}>
                <ImgForm create={createPhoto}/>
            </MyModal>

            <ImgList photos={sortedPhotos} title='Photos'/>
            <div ref={lastElement}></div>

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Gallery;
