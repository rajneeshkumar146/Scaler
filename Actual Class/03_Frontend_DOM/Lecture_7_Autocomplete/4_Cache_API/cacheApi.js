/***
 * Problem statement -> cachedFetch(timer);
 * */

function cachedFetch(expirey) {
    // Cached data storage.
    const cache = {};

    return async function cachedFetch(url) {
        if (cache[url]) {
            const cachedData = cache[url];
            cacheTime = cachedData.timestamp;
            const currenTime = new Date().getTime();
            if (currenTime - cacheTime < expirey * 60 * 1000) {
                return cachedData.data;
            }
        }

        // data not in cache or cache expired, fetch and cache.
        try {
            const response = await fetch(url);
            const responseResult = await response.json();

            // stpre data in cache.
            cache[url] = {
                data: responseResult,
                timestamp: new Date().getTime()
            };

            return responseResult;
        } catch (error) {
            console.log('fetch error: ', error);
            throw error;
        }
    }
}


const cachedFetchMethod = cachedFetch(5000);

// Example Usage.
let values = ["ind", "aus", "ind"];

for (let i = 0; i < 3; i++) {
    let value = values[i];
    cachedFetchMethod(`https://restcountries.com/v3.1/name/${value}`)
        .then(data => {
            console.log("results are: ", data);
        })
        .catch(err => {
            console.log("error is: " + err);
        });
}


// Cacheing optimal solution.

function cacheing() {
    let queue = [];
    let map = {};

    function add(req, res, time) {
        clearExpiredInfo(time);

        // add in queue.
        // add in hashmap with req -> {res, time};

    }

    function clearExpiredInfo(time) {

        /// check for every front request if it is out from expired time remove from queue and hashmap. 

    }

    function get(req, time) {
        clearExpiredInfo(time);

        if (/**request is present*/ ) {
            return map[req];
        } else {
            return undefined;
        }
    }
}
