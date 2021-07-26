import Swiper, { Autoplay, Navigation, Parallax } from 'swiper';

export default class Slider {
    constructor() {
        this.elms = {
            col02: document.querySelector('[data-slider="kv"]'),
        };
        this.init();
    }
    init() {
        Swiper.use([Autoplay, Navigation, Parallax]);
        new Swiper(this.elms.col02, {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            grabCursor: true,
            loop: true,
            loopedSlides: 4,
            roundLengths: true,
            speed: 1200,
            parallax: true, //パパラックスさせる
            loopAdditionalSlides: 10,
            navigation: {
                nextEl: '.swiper-button-next',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
