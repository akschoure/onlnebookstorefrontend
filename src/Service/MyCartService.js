import axios from 'axios';

const MYCART_API_BASE_URL = 'http://localhost:7070/mycart';


class ApiService {



    // fetchAllCart(cid) {
    //     return axios.get(MYCART_API_BASE_URL + '/allcart/'+cid);
    // }

    fetchAllCart() {
        return axios.get(MYCART_API_BASE_URL + '/allcart');
    }

    addToCart(adcrt) {
        // console.log(adcrt)
        return axios.post(""+MYCART_API_BASE_URL + '/addcart/',adcrt);
    }

  
}      

export default new ApiService();