import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function responseData (requestWord, additionalParams ={}) {

    const requestedParams = {
        key: '49159303-69e39ecdcc21e97a7866413fa',
        q: requestWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        ...additionalParams,
    };

    try {
        const response = await axios.get('', {
            params: requestedParams,
        });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}