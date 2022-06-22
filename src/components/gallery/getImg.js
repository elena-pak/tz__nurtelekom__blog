import axios from "axios";

export default class getApiPhoto {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

}