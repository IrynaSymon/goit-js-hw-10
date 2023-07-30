import axios from "axios";
const BASE_URL = "https://api.thecatapi.com/v1";
function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw new Error("Request  Error:", error.message);
        });
}

function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw newError("Request Error:", error.message);
        });
}
export { fetchBreeds, fetchCatByBreed };

// --2--variant
    
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = "live_RUHwtj6wJJPnfFBmE65IS36q7PEOstT78pnlAp1aYc9k725uK7f5gZKHvOy4kflo";

// export function fetchBreeds() {
//     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });  

// };
// export function fetchCatByBreed(breedId) {
//     return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });  
// };
// // console.log(fetchCatByBreed(breedId))











