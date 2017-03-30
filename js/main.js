

let overlay = new Overlay(document.querySelector('.overlay'));
let filePicker = new FilePicker(document.querySelector('#file-picker'), overlay);
let indexedDBService = new IndexedDBService();

let editor = new Editor(filePicker, indexedDBService);



