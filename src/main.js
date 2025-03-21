// Імпорт бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт бібліоткеки Axios
import axios from "axios";

// Імпорт модулів
import responseData from './js/pixabay-api';
import { makeGallery, initLightbox, createImageCard } from './js/render-functions';


const searchForm = document.querySelector('.form');
const input = document.querySelector('.js-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
const lightbox = initLightbox();

let currentSearchQuery = '';
let page = 1;

// Показати loader
function showLoader() {
    loader.classList.remove('visually-hidden');
}

// Приховати loader
function hideLoader() {
    loader.classList.add('visually-hidden');
}

// Показати кнопку додаткової загрузки
function showLoadMoreBtn() {
    loadMoreBtn.classList.remove('visually-hidden');
}

// Призовати кнопку додаткової загрузки
function hideLoadMoreBtn() {
    loadMoreBtn.classList.add('visually-hidden');
}

// Повідомлення
const errorMessage = {
    message: 'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
}

const warning = {
    message: 'Enter your search request!',
    messageColor: '#000',
    backgroundColor: '#f5c386',
    position:'topRight',
}

const info = {
    message: `We're sorry, but you've reached the end of search results.`,
    messageColor: '#000',
    backgroundColor: '#78afe0',
    position:'topRight',
}

// Обробка пошуку
searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    
    const request = input.value.trim();
    if (request === "") {
        gallery.innerHTML = ""; 
        hideLoader();
        hideLoadMoreBtn();
        iziToast.warning(warning)
        return;
    }

    // Новий запит пошуку / скидування сторінки
    currentSearchQuery = request;
    page = 1;

    gallery.innerHTML = "";
    hideLoadMoreBtn();
    showLoader();

    try {
        const data = await responseData(request, {page});
        const images = data.hits;

        if (images.length === 0) {
            iziToast.error(errorMessage);
            hideLoadMoreBtn();
            return;
        }
        else {
            makeGallery(images, gallery, lightbox);
            showLoadMoreBtn();
        }
    }
    catch (error) {
        iziToast.error(errorMessage);
        console.log('Error request:', error);
    }
    finally {
        hideLoader();
        input.value = '';
    }
});

// Завантаження додаткових зображеть
loadMoreBtn.addEventListener('click', async () => {
    page += 1;
    showLoader();

    try {
        const data = await responseData(currentSearchQuery, {page});
        const images = data.hits;

        if (images.length === 0) {
            hideLoadMoreBtn();
            iziToast.info({
                message: 'No more images found.',
                position: 'topRight',
            });
            return;
        }

        // Додаємо нові зображення до галереї
        const markUp = images.map(image => createImageCard(image)).join('');
        gallery.insertAdjacentHTML('beforeend', markUp);
        lightbox.refresh();

        // Приховуємо кнопку, якщо зображень більше немає
        const totalLoaded = page * 3;
        if (totalLoaded > data.totalHits) {
            hideLoadMoreBtn();
            iziToast.info(info);
        }
    }
    catch (error) {
        iziToast.error(errorMessage);
        console.log('Error loading more:', error);
    }
    finally {
        hideLoader();
    }
})