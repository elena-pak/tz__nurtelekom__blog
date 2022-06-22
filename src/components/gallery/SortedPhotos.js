import {useMemo} from "react";


export const SortedPhotos = (photos, query) => {

   const sortedPhotos =useMemo(() => {
        return [...photos].filter(photo => photo.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, photos])

    return sortedPhotos;
}