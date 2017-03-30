class  Overlay {

    constructor (el) {
        this.el = el;
    }

    open () {

        this.el.style.display = 'flex';
        document.body.offsetHeight;
        document.body.style.overflow = 'hidden';
        this.el.classList.add('show');
    }

    close () {

        let endTransition = event => {
            this.el.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        this.el.addEventListener('transitionend', endTransition, { once : true });
        this.el.classList.remove('show');

    }
}