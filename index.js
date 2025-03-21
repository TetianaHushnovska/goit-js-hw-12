import{a as h,S as M,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();h.defaults.baseURL="https://pixabay.com/api/";async function y(t,o={}){const r={key:"49159303-69e39ecdcc21e97a7866413fa",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,...o};try{return(await h.get("",{params:r})).data}catch(a){throw a}}let d;function C(){return d=new M(".gallery a",{captions:!0,captionsData:"alt",captionType:"attr",captionDelay:250,animationSpeed:350,captionPosition:"bottom"}),d.on("show.simplelightbox",function(){}),d.on("error.simplelightbox",function(t){console.log(t)}),d}function L(t){const{webformatURL:o,largeImageURL:r,tags:a,likes:e,views:s,comments:i,downloads:S}=t;return`<li class="gallery-item">
          <a href="${r}">
            <img src="${o}" alt="${a}" />
          </a>
          <div class="img-info">
            <div>
              <p class="info-name">Likes</p>
              <p class="info-data">${e}</p>
            </div>
            <div>
              <p class="info-name">Views</p>
              <p class="info-data">${s}</p>
            </div>
            <div>
              <p class="info-name">Comments</p>
              <p class="info-data">${i}</p>
            </div>
            <div>
              <p class="info-name">Downloads</p>
              <p class="info-data">${S}</p>
            </div>
          </div>
        </li>`}function $(t,o,r){o.innerHTML=t.map(L).join(""),r&&typeof r.refresh=="function"&&r.refresh()}const P=document.querySelector(".form"),g=document.querySelector(".js-input"),u=document.querySelector(".gallery"),v=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),b=C();let w="",c=1;function q(){v.classList.remove("visually-hidden")}function f(){v.classList.add("visually-hidden")}function R(){m.classList.remove("visually-hidden")}function l(){m.classList.add("visually-hidden")}const p={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"},x={message:"Enter your search request!",messageColor:"#000",backgroundColor:"#f5c386",position:"topRight"},E={message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",backgroundColor:"#78afe0",position:"topRight"};P.addEventListener("submit",async t=>{t.preventDefault();const o=g.value.trim();if(o===""){u.innerHTML="",f(),l(),n.warning(x);return}w=o,c=1,u.innerHTML="",l(),q();try{const a=(await y(o,{page:c})).hits;if(a.length===0){n.error(p),l();return}else $(a,u,b),R()}catch(r){n.error(p),console.log("Error request:",r)}finally{f(),g.value=""}});m.addEventListener("click",async()=>{c+=1,q();try{const t=await y(w,{page:c}),o=t.hits;if(o.length===0){l(),n.info({message:"No more images found.",position:"topRight"});return}const r=o.map(e=>L(e)).join("");u.insertAdjacentHTML("beforeend",r),b.refresh(),c*3>t.totalHits&&(l(),n.info(E))}catch(t){n.error(p),console.log("Error loading more:",t)}finally{f()}});
//# sourceMappingURL=index.js.map
