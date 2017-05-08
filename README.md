# WYSIWYG editor with Service Worker and IndexedDB

A GUI consisting of an editor pane and a display pane side by side. A user can type html into the editor pane and see the rendered result in the display pane. For images, the user can select an image from the file system to be displayed even without the image existing on a server! This could be useful in a content management system where you want to provide a preview of the users content but you don't want to have to upload an image to a server before the user has confirmed that they want to save their edit.

This works through the magic of service workers. Service workers have the power to act like a proxy server sitting on the browser, able to intercept http requests and serve up whatever response the developer wishes. When the user selects an image from a file picker widget, the image is stored in an IndexedDB database. The editor automatically creates the mark up for the image from user supplied parameters. When the browser then requests the image from the server, the service worker fetches it from the database and returns it.

### Technologies used
* HTML5
* IndexedDB
* Service worker


[demonstration app](https://richardinho.github.io/wysiwyg-html-editor/)

