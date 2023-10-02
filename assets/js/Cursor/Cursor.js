export default class Cursor {
    constructor(options) {
        this.options = options;
        this.init();
        document.addEventListener('mousemove', (e) => this.setPos(e.clientX, e.clientY))
    }

    init() {
        const body = document.querySelector('body');
        this.cursorElement = document.createElement('div');
        this.cursorElement.classList.add('cursor');
        this.cursorElement.style.display = 'none';
        body.appendChild(this.cursorElement);
        this.setStyle(this.options);
    }

    setStyle(style) {
        this.cursorElement.style.display = 'block';
        this.cursorElement.style.position = 'fixed';
        this.cursorElement.style.top = '0';
        this.cursorElement.style.left = '0';
        this.cursorElement.style.width = this.options.size + 'px';
        this.cursorElement.style.height = this.options.size + 'px';
        this.cursorElement.style.borderRadius = '50%';
        this.cursorElement.style.backgroundColor = this.options.color;
    }

    setPos(x, y) {
        this.cursorElement.style.left = (x + 15) + 'px';
        this.cursorElement.style.top = (y + 15) + 'px';
    }

    destroy() {
        this.cursorElement.remove();
    }
}