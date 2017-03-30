class IndexedDBService {

    constructor () {

        this.databaseName = 'images-db';
    }

    putImage(name, image) {

        return new Promise(resolve => {

            let request = indexedDB.open(this.databaseName);

            request.onerror = function(event) {
                console.log('error occurred');
            };

            request.onupgradeneeded = function(event) {
                let db = event.target.result;
                db.createObjectStore("images");
            };

            request.onsuccess = function (event) {

                console.log('onsuccess');

                let db = event.target.result;

                let customerObjectStore =
                    db.transaction(['images'], 'readwrite')
                        .objectStore('images');

                customerObjectStore.put(image, name);

                customerObjectStore.transaction.oncomplete = function () {
                    console.log('on complete');
                    resolve();
                };
            };

        });


    }
}