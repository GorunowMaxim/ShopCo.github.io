!function(){const e=document.querySelectorAll(".modal-button"),t=document.querySelectorAll(".modals-overlay"),o=(document.querySelectorAll(".modal"),document.querySelector(".body"));e.forEach((e=>{e.addEventListener("click",(e=>{o.classList.toggle("body_hidden");let t=e.currentTarget.getAttribute("data-path");document.querySelector(`[data-target="${t}"]`).classList.contains("modal_visible")||document.querySelector(`[data-overlay="${t}"]`).classList.contains("modals-overlay_visible")?(document.querySelector(`[data-target="${t}"]`).classList.remove("modal_visible"),document.querySelector(`[data-overlay="${t}"]`).classList.remove("modals-overlay_visible")):(document.querySelector(`[data-target="${t}"]`).classList.add("modal_visible"),document.querySelector(`[data-overlay="${t}"]`).classList.add("modals-overlay_visible"))}))})),t.forEach((e=>{e.addEventListener("click",(e=>{let t=e.currentTarget.getAttribute("data-overlay");e.target===document.querySelector(`[data-overlay="${t}"]`)&&(document.querySelector(`[data-target="${t}"]`).classList.remove("modal_visible"),document.querySelector(`[data-overlay="${t}"]`).classList.remove("modals-overlay_visible"),o.classList.toggle("body_hidden"))}))}));const a=document.querySelectorAll(".site-navigation__block"),s=document.querySelectorAll(".header-sub-row__item"),r=document.querySelector(".header__site-navigation"),l=document.querySelector(".header-sub-wrapper");s.forEach((e=>{e.addEventListener("mouseover",(e=>{let t=e.currentTarget.dataset.path;r.classList.add("header__site-navigation_visible"),o.classList.add("body_hidden"),a.forEach((e=>{e.classList.remove("site-navigation__block_visible"),document.querySelector(`[data-target = ${t}`).classList.contains("site-navigation__block_visible")||document.querySelector(`[data-target = ${t}`).classList.add("site-navigation__block_visible")}))}))})),l.addEventListener("mouseleave",(()=>{r.classList.remove("header__site-navigation_visible"),o.classList.remove("body_hidden")}));const i=document.querySelector(".header");let n=0;const c=()=>window.pageYOffset||document.documentElement.scrollTop,d=()=>i.classList.contains("header_hidden");window.addEventListener("scroll",(()=>{c()>n&&!d()&&c()>150?i.classList.add("header_hidden"):c()<n&&d()&&i.classList.remove("header_hidden"),n=c()}));const u=document.querySelector(".brand-promotion"),m=document.querySelector(".brand-promotion__headline");document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("scroll",(()=>{window.innerHeight/1.25+window.scrollY>=u.offsetTop+u.offsetHeight/40&&m.classList.add("brand-promotion__headline_visible")}))})),new Swiper(".carousel",{slidesPerView:1,loop:!0,speed:600,pagination:{el:".swiper-pagination",type:"bullets"},autoplay:{delay:3400,stopOnLastSlide:!1,disableOnInteraction:!1}}),new Swiper(".swiper-block__swiper",{slidesPerView:4,spaceBetween:40,breakpoints:{320:{slidesPerView:1,spaceBetween:0},450:{slidesPerView:1.25,spaceBetween:0},500:{slidesPerView:1.45,spaceBetween:0},600:{slidesPerView:1.75,spaceBetween:0},800:{slidesPerView:2.35,spaceBetween:20},1200:{slidesPerView:3.5,spaceBetween:40},1500:{slidesPerView:4,spaceBetween:40}}}),new Swiper(".brands-swiper",{slidesPerView:7.5,loop:!0,speed:2e3,autoplay:{delay:0,stopOnLastSlide:!1,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:3,spaceBetween:20},500:{slidesPerView:4.5,spaceBetween:20},800:{slidesPerView:6,spaceBetween:20}}});const _=document.querySelector(".header__burger-menu"),b=document.querySelector(".burger-menu"),v=document.querySelector(".overlay"),y=document.querySelector(".mobile-menu__block"),g=document.querySelector(".body"),p=document.querySelectorAll(".mobile-menu__container"),L=document.querySelector(".mobile-menu__container_main");function w(e){e.addEventListener("click",(()=>{_.classList.toggle("header__burger-menu_open"),b.classList.toggle("burger-menu_active"),v.classList.toggle("overlay_visible"),y.classList.toggle("mobile-menu__block_open"),g.classList.toggle("body_hidden"),y.classList.contains("mobile-menu__block_open")&&(p.forEach((e=>{e.classList.remove("mobile-menu__container_open")})),L.classList.add("mobile-menu__container_open"))}))}w(b),w(v);const S=document.querySelectorAll(".footer-block__headline");document.querySelectorAll(".footer-block"),S.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.path;document.querySelector(`[data-target = ${t}`).classList.toggle("footer-block_active")}))}));const h=document.querySelectorAll(".mobile-menu__container");document.querySelectorAll(".switch-element").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.getAttribute("data-path");h.forEach((e=>{e.classList.remove("mobile-menu__container_open")})),document.querySelector(`[data-list= ${t}`).classList.add("mobile-menu__container_open")}))}));const q=document.querySelectorAll(".mobile-menu__gender-item");q.forEach((e=>{e.addEventListener("click",(()=>{q.forEach((e=>{e.classList.remove("mobile-menu__gender-item_active")})),e.classList.add("mobile-menu__gender-item_active")}))}))}();