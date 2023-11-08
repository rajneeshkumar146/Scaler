/**   make HTTP request fromm browser -> it is an promise based API*/


/***
 * Fetch API request ->
 * *  GET request  -> response object 
 * * response = header (metadata)+body(actual data)
 *      * extarct actual -> call response.json() and 
 *       this fn is also promise based 
 * * This  route -> should be public , or you should auth
 * */


// fetch('https://restcountries.com/v3.1/name/ind')
//     .then(function (response) {
//         // response = header (metadata)+body(actual data)
//         console.log("My Response: ", response);
//         return response.json();
//     }).then(console.log).catch(err => {
//         console.log("There is a error: ", err);
//     });


async function getCountries(keyword) {
    try {
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const reponse = await rawResponse.json();

        if (rawResponse.status === 404) {
            console.log("Page not found");
            return [];
        } else if (rawResponse.status === 500) {
            console.log("Internal Server error");
            return [];
        } else {
            console.log("Data found");  // it is a 200ok status.
        }

        return reponse;
    } catch (err) {
        console.log("err: ", err);
    }
}


// getCountries("ind").then(console.log).catch(console.log);

export default getCountries;