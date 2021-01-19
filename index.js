(function($) {
    if ("serviceWorker" in navigator) {console.log('ding');
        navigator.serviceWorker
            .register("sw.js")
            .then(() => console.log("registered service worker!"));
    }
})();