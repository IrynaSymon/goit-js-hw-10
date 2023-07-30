const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = "live_RUHwtj6wJJPnfFBmE65IS36q7PEOstT78pnlAp1aYc9k725uK7f5gZKHvOy4kflo";

export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  

};
// console.log(fetchBreeds())
export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};
// console.log(fetchCatByBreed(breedId))













// import axios from "axios";
// const BASE_URL = 'https://api.thecatapi.com/v1';
// // axios.defaults.headers.common["x-api-key"] = API_KEY;
// // const API_KEY = "live_RUHwtj6wJJPnfFBmE65IS36q7PEOstT78pnlAp1aYc9k725uK7f5gZKHvOy4kflo";
// export function fetchBreeds() {
//    axios.get(`https://api.thecatapi.com/v1/breeds`)
//         .then(response => {
//         console.log(response.data)
//         })
//     .catch (error=> {
//         console.error(error);
        
//     });
// };

// export function fetchCatByBreed(breedId) {
    
//     axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
//         .then(response => {
//             console.log(response.data)
//         })
//         .catch(error => {
//             console.error(error);
//         });

// }

