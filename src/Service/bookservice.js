import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:7070/books';


class ApiService {



    fetchAllBooks() {
        return axios.get(BOOK_API_BASE_URL + '/allbooks');
    }

  
}

export default new ApiService();