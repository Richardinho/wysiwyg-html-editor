
self.addEventListener('fetch', function(event) {

    event.respondWith(new Promise(resolve => {

        let url = event.request.url;

        const dbName = "images-db";

        let request = indexedDB.open(dbName);

        request.onupgradeneeded = function(event) {
            let db = event.target.result;
            db.createObjectStore("images");
        };

        request.onsuccess = function (e) {

            let request = e.target
                .result
                .transaction(["images"])
                .objectStore("images")
                .get(new URL(url).pathname);

            request.onsuccess = function(e) {
                if(e.target.result) {
                    resolve(new Response(e.target.result));
                } else {
                    resolve(fetch(event.request));
                }
            };

            request.onerror = function () {
                resolve(fetch(event.request));
            }
        };
    }));
});