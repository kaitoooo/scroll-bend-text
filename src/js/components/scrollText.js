const imagesLoaded = require('imagesloaded');
import { map } from './utils/utils';
import LocomotiveScroll from 'locomotive-scroll';
import Splitting from 'splitting';

export default class scrollText {
    constructor() {
        // 前と現在のスクロール値を追跡する
        this.scroll = {
            cache: 0,
            current: 0,
        };
        this.init();
    }
    init() {
        // 画像の読み込み開始
        const preloadImages = () => {
            return new Promise((resolve) => {
                imagesLoaded(
                    document.querySelectorAll('img'),
                    {
                        background: true,
                    },
                    resolve
                );
            });
        };
        preloadImages().then(() => {
            // 画像を全て読み込んだら実行
            this.scrollEvent();
        });
    }
    scrollEvent() {
        const splitting = Splitting();

        // Locomotive Scroll 初期化
        const lscroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
        });

        // locomotive scroll 更新
        lscroll.update();

        // Locomotive Scroll event
        lscroll.on('scroll', (obj) => {
            this.scroll.current = obj.scroll.y;
            const distance = this.scroll.current - this.scroll.cache;
            this.scroll.cache = this.scroll.current;
            // 変換値は、[150、-150]のスクロール距離に対して[-50,50]の間隔でマップされます。
            const translateY = map(distance, 150, -150, -50, 50);
            // 分割オブジェクトからのすべての単語に対して
            for (const [i, word] of splitting.entries()) {
                // この単語の合計文字数
                const charsTotal = word.chars.length;
                // 各単語のすべての文字に対して...
                for (const [j, char] of word.chars.entries()) {
                    //真ん中の文字のtranslationY値を高くして、単語が曲がっているような錯覚を表現する
                    const factor = j < Math.ceil(charsTotal / 2) ? j : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - j) - 1;
                    char.style.transform = `translate3d(0,${factor * translateY}px,0)`;
                }
            }
        });
    }
}
