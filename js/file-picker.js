class FilePicker {

    constructor (el, overlay) {

        this.el = el;

        this.overlay = overlay;

        this.fileInput = this.el.querySelector('input[type=file]');
        this.thumbnail = this.el.querySelector('#thumbnail');
        this.form = this.el.querySelector('#form');

        this.fileInput.addEventListener('change', event => {
            let image = event.target.files[0];
            this.addImagePreview(image);
        });

    }

    addImagePreview (image) {

        let reader = new FileReader();

        reader.onload = function (e) {
            this.thumbnail.src = e.target.result;
        }.bind(this);

        reader.readAsDataURL(image);

    }


    open () {

        let once = { once : true };

        this.el.style.display = 'block';
        document.body.offsetHeight;
        this.overlay.open();
        this.el.classList.add('show');

        return new Promise(resolve => {

            this.el.querySelector('[data-command=close-file-picker]').addEventListener('click', event => {

                this.el.classList.remove('show');
                this.overlay.close();
                this.el.addEventListener('transitionend', event => {
                    this.el.style.display = 'none';
                    this.thumbnail.src = '';
                }, once);

                resolve({
                    image : this.fileInput.files[0],
                    fileName : this.form.fileName.value,
                    altText : this.form.altText.value
                });
            }, once);
        })
    }

}