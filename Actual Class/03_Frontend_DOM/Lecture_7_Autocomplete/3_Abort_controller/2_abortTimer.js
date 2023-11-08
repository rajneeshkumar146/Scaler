// inbuilt API 
// 1 create a instance from AbortController
const abortcontroller = new AbortController();

(async function () {
    try {
        // attach signal t fetch request.
        const responsePromise = fetch("https://restcountries.com/v3.1/name/india", { signal: abortcontroller.signal });
        console.log("request is send.");
        // call abort
        setTimeout(() => {
            try {
                console.log("abort is called!");
                abortcontroller.abort();
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch request was aborted due to some reason. Debugging is required here.");
                    return err.name;
                } else {
                    console.log("Fetched error: ", err);
                }
            }
        }, 2000);

        const response = await responsePromise;
        const responseJson = await response.json();
        console.log("ans", ans);

    } catch (err) {
        console.log("outer error: ", err);
    }
})();