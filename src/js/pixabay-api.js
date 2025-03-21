// Імпорт бібліотеки Axios для роботи з HTTP-запитами
import axios from "axios";

// Встановлення базової URL-адреси для всіх запитів
axios.defaults.baseURL = 'https://pixabay.com/api/';

// Отримання даних із Pixabay API на основі запиту користувача
export default async function responseData (requestWord, additionalParams ={}) {

    // Формування параметрів запиту
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
    // Прокидування помилки для обробки в основному коді
    catch (error) {
        throw error;
    }
}