// inbuilt API.
// First, Create a instance of abort controller.
const abortController = new AbortController();

(async function () {

    try {
        // attach signal to fetch request.
        const responsePromise = fetch("https://restcountries.com/v3.1/name/India", { signal: abortController.signal });
        console.log("request is send.")

        setTimeout(() => {
            try {
                console.log("abort is called");
                // call abort
                abortController.abort();
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch request was aborted due to some reason, Debugging is required here.");
                    return err.name;
                } else {
                    console.log("Fetched error: ", err)
                }
            }
        }, 2000);

        const response = await responsePromise;
        const responseJson = await response.json();

        console.log("ans: " + responseJson);
        
    } catch (err) {
        console.log("Fetched error: ", err);
    }

})();