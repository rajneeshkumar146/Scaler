/**   make HTTP request fromm browser -> it is an promise based API*/

/***
 * Fetch API request ->
 * *  GET request  -> response object 
 * * response = header (metadata)+body(actual data)
 *      * extarct actual -> call response.json() and 
 *       this fn is also promise based 
 * * This  route -> should be public , and doesn't required any authentication.
 * */


// fetch('https://restcountries.com/v3.1/name/zzz').then(function (response) {
//     console.log("My response: ", response);
//     return response.json();
// }).then(console.log).catch((err) => {
//     console.log("There is an error: ", err);
// })


async function getCountries(keyword){
    try{
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const response = await rawResponse.json();

        if(rawResponse.status === 404){
            console.log("Page Not Found");
            return [];
        }else if(rawResponse.status === 500){
            console.log("Internal server Error");
            return [];
        }else{
            console.log("Data found"); // It is a 200ok status.
        }

        return response;
    }catch(err){
        console.log("err: ", err);
    }

}

// getCountries("india").then(console.log).catch(console.log);

export default getCountries;



