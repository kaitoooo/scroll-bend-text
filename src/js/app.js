import '../style/style.scss';
import picturefill from 'picturefill';
picturefill();
import scrollText from './components/scrollText';
import Slider from './components/slider';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
    }
    init() {
        new scrollText();
        new Slider();
    }
}
new App();
