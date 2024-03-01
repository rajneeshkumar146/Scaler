/**   make HTTP request fromm browser -> it is an promise based API*/

/***
 * Fetch API request ->
 * *  GET request  -> response object 
 * * response = header (metadata)+body(actual data)
 *      * extarct actual -> call response.json() and 
 *       this fn is also promise based 
 * * This  route -> should be public , and doesn't required any authentication.
 * */


// fetch('https://restcountries.com/v3.1/name/ind').then(function (response) {
//     console.log("My response: ", response);
//     return response.json();
// }).then(console.log).catch((err) => {
//     console.log("There is an error: ", err);
// })


async function getCoutries(keyword){

}

getCountries("ind").then(console.log).catch(console.log);

export default getCoutries;



