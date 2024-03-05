


function cachedFetch(expirey) {
    const cache = {};

    return async function cachedFetch(url) {
        if (cache[url]) {
            const cachedData = cache[url];
            cacheTime = cachedData.timestamp;
            const currentTime = new Date().getTime();
            if (currentTime - cacheTime < expirey * 1000 * 60) {
                return cachedData.data;
            }
        }


        // data not is cache or cache expired, fetch the request again.
        try {
            const response = await fetch(url);
            const responseResult = await response.json();

            cache[url] = {
                data: responseResult,
                timestamp: new Date().getTime()
            }

            return responseResult;
        } catch (error) {
            console.log("fetch error: ", error);
            throw error;
        }
    }
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

const cachedFetchMethod = cachedFetch(5000);

// Example Usage.
let values = ["ind", "aus", "ind"];

for (let i = 0; i < 3; i++) {
    let start = new Date().getTime();
    let value = values[i];
    cachedFetchMethod(`https://restcountries.com/v3.1/name/${value}`)
        .then(data => {
            console.log("results are: " +  data);
            let end = new Date().getTime();
            console.log("execution time: ", (end - start));

            console.log("--------------------------------------------------------------------------------------");
        })
        .catch(err => {
            console.log("error is: " + err);
        });
}