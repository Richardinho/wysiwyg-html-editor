class Editor {


    constructor (filePicker, indexedDB) {
        this.filePicker = filePicker;
        this.indexedDB = indexedDB;

        this.editorPane = document.querySelector('#editor-pane textarea');
        this.displayPane = document.getElementById('display-pane');

        this.editorPane.addEventListener('input', () => {

            let text = event.target.value;


            if (text.substring(text.length - 5) == '<img ') {

                this.createImageTag(text);
            } else {
                this.displayPane.innerHTML = text;
            }
        });

    }

    createImageTag(text) {

        this.editorPane.disabled = true;

        this.filePicker.open().then((data) => {

            let url = `/img/${data.fileName}`;
            this.indexedDB.putImage(url, data.image).then(() => {
                text = text + ` src="${url}" alt="${data.altText}">`;
                this.editorPane.value = text;
                this.displayPane.innerHTML = text;
                this.editorPane.disabled = false;
            })

        });

    }

}