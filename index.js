import{a as b,S as $,i as a}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();b.defaults.baseURL="https://pixabay.com/api/";async function w(e,o={}){const r={key:"49159303-69e39ecdcc21e97a7866413fa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,...o};try{return(await b.get("",{params:r})).data}catch(i){throw i}}let p;function E(){return p=new $(".gallery a",{captions:!0,captionsData:"alt",captionType:"attr",captionDelay:250,animationSpeed:350,captionPosition:"bottom"}),p.on("show.simplelightbox",function(){}),p.on("error.simplelightbox",function(e){console.log(e)}),p}function q(e){const{webformatURL:o,largeImageURL:r,tags:i,likes:t,views:n,comments:d,downloads:T}=e;return`<li class="gallery-item">
          <a href="${r}">
            <img src="${o}" alt="${i}" />
          </a>
          <div class="img-info">
            <div>
              <p class="info-name">Likes</p>
              <p class="info-data">${t}</p>
            </div>
            <div>
              <p class="info-name">Views</p>
              <p class="info-data">${n}</p>
            </div>
            <div>
              <p class="info-name">Comments</p>
              <p class="info-data">${d}</p>
            </div>
            <div>
              <p class="info-name">Downloads</p>
              <p class="info-data">${T}</p>
            </div>
          </div>
        </li>`}function H(e,o,r){o.innerHTML=e.map(q).join(""),r&&typeof r.refresh=="function"&&r.refresh()}const R=document.querySelector(".form"),v=document.querySelector(".js-input"),c=document.querySelector(".gallery"),u=document.querySelector(".initial-loader"),f=document.querySelector(".aditional-loader"),y=document.querySelector(".load-more-btn"),S=E();let M="",l=1,C=3;function P(e){e.classList.remove("visually-hidden")}function s(e){e.classList.add("visually-hidden")}function g(){y.classList.remove("visually-hidden")}function m(){y.classList.add("visually-hidden")}const h={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"},x={message:"Enter your search request!",messageColor:"#000",backgroundColor:"#f5c386",position:"topRight"},L={message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",backgroundColor:"#78afe0",position:"topRight"};R.addEventListener("submit",async e=>{e.preventDefault();const o=v.value.trim();if(o===""){c.innerHTML="",s(u),m(),a.warning(x);return}M=o,l=1,c.innerHTML="",m(),P(u);try{const r=await w(o,{page:l}),i=r.hits;setTimeout(()=>{if(i.length===0){a.error(h),m(),s(u);return}H(i,c,S),r.totalHits>i.length&&l<C&&g(),s(u)},1e3)}catch(r){a.error(h),console.log("Error request:",r),s(u)}finally{v.value=""}});y.addEventListener("click",async()=>{l+=1,m(),P(f);try{const e=await w(M,{page:l}),o=e.hits;setTimeout(()=>{if(o.length===0){m(),a.info(L),s(f);return}const r=o.map(n=>q(n)).join("");c.insertAdjacentHTML("beforeend",r),S.refresh();const{height:i}=c.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"});const t=c.querySelectorAll(".gallery-item").length;if(l>=C||t>=e.totalHits){s(f),a.info(L);return}g(),s(f)},1e3)}catch(e){a.error(h),console.log("Error loading more:",e),s(f),g()}});
//# sourceMappingURL=index.js.map
