!function(){const e=document.querySelector(".brand-promotion"),t=document.querySelector(".brand-promotion__headline");document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("scroll",(()=>{window.innerHeight/1.25+window.scrollY>=e.offsetTop+e.offsetHeight/40&&t.classList.add("brand-promotion__headline_visible")}))})),new Swiper(".carousel",{slidesPerView:1,loop:!0,speed:600,pagination:{el:".swiper-pagination",type:"bullets"},autoplay:{delay:3400,stopOnLastSlide:!1,disableOnInteraction:!1}}),new Swiper(".swiper-block__swiper",{slidesPerView:4,spaceBetween:40,breakpoints:{320:{slidesPerView:1,spaceBetween:0},450:{slidesPerView:1.25,spaceBetween:0},500:{slidesPerView:1.45,spaceBetween:0},600:{slidesPerView:1.75,spaceBetween:0},800:{slidesPerView:2.35,spaceBetween:20},1200:{slidesPerView:3.5,spaceBetween:40},1500:{slidesPerView:4,spaceBetween:40}}}),new Swiper(".brands-swiper",{slidesPerView:7.5,loop:!0,speed:2e3,autoplay:{delay:0,stopOnLastSlide:!1,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:3,spaceBetween:20},500:{slidesPerView:4.5,spaceBetween:20},800:{slidesPerView:6,spaceBetween:20}}}),document.querySelector(".load-block");const s=document.querySelectorAll("img[data-src], source[data-srcset]"),n=document.documentElement.clientHeight;let i=[];function a(){let e=i.findIndex((e=>pageYOffset>e-n));e>=0&&(s[e].dataset.src?(s[e].src=s[e].dataset.src,s[e].removeAttribute("data-src")):s[e].dataset.srcset&&(s[e].srcset=s[e].dataset.srcset,s[e].removeAttribute("data-srcset")),delete i[e])}s.length>0&&s.forEach((e=>{(e.dataset.src||e.dataset.srcset)&&(i.push(e.getBoundingClientRect().top+pageYOffset),a())})),window.addEventListener("scroll",(function(){document.querySelectorAll("img[data-src], source[data-srcset]").length>0&&a()}))}();