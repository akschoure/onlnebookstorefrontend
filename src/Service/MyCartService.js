import axios from 'axios';

const MYCART_API_BASE_URL = 'http://localhost:7070/mycart';


class ApiService {



    fetchAllCart(cid) {
        return axios.get(MYCART_API_BASE_URL + '/allcart/'+cid);
    }
    addToCart(cid, bid) {
        return axios.get(MYCART_API_BASE_URL + '/allcart/'+cid+'/'+bid);
    }

  
}

export default new ApiService();