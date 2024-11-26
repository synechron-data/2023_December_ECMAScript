const url = 'https://jsonplaceholder.typicode.com/posts';

const postApiClient = {
    getAllPostsUsingCallbacks: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(err => {
                errorCB("JSON Parse Error...");
            });
        }).catch(err => {
            errorCB("Communication Error...");
        });
    },

    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject("JSON Parse Error...");
                });
            }).catch(err => {
                reject("Communication Error...");
            });
        });
    },

    getAllPostsUsingPromiseWithRetry: function (maxAttempts = 3, delay = 1000) {
        return new Promise((resolve, reject) => {
            let attempts = 0;

            function attemptCall() {
                attempts++;
                fetch(url).then(response => {
                    response.json().then(data => {
                        resolve(data);
                    }).catch(err => {
                        if (attempts < maxAttempts) {
                            setTimeout(attemptCall, delay);
                        } else {
                            reject("JSON Parse Error...");
                        }
                    });
                }).catch(err => {
                    if (attempts < maxAttempts) {
                        setTimeout(attemptCall, delay);
                    } else {
                        reject("Communication Error...");
                    }
                });
            }

            attemptCall();
        });
    },

    getAllPostsAsync: async function () {
        try {
            var response = await fetch(url);
            return await response.json();
        } catch (err) {
            throw err;
        }
    },

    getAllPosts: async function* () {
        try {
            var response = await fetch(url);
            yield await response.json();
        } catch (err) {
            throw err;
        }
    }
};

export default Object.freeze(postApiClient);