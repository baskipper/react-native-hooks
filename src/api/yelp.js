import axios from 'axios';
import apiKey from '../../apiKey'

const key = apiKey.key;

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ' + key

    }
})
