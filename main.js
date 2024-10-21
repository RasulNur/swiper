import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

new Swiper(".swiper", {
    autoplay: { delay: 5000 },

    slidesPerView: auto,
    // slidesPerView: 3,
    // breakpoints: {
    //     1279: { slidesPerView: 4 },
    //     1535: { slidesPerView: 5 },
    // },
    navigation: {
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
    },
    modules: [Autoplay, Navigation],
});
