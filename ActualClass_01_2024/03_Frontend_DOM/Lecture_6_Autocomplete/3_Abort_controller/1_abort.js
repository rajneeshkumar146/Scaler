// inbuilt API.
// First, Create a instance of abort controller.
const abortController = new AbortController();

(async function() {

    try{
        // attach signal to fetch request.
        const responsePromise = fetch("https://restcountries.com/v3.1/name/India", {signal: abortController.signal});
        console.log("request is send.")

        // call abort
        abortController.abort();

        const response  = await responsePromise;
        const responseJson = await response.json();

        console.log("ans: " +   responseJson);

    }catch(err){
        console.log("Fetched error: ", err);
    }

})();