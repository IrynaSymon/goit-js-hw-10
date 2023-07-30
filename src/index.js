import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { Notify } from "notiflix";
import SlimSelect from 'slim-select'
import "slim-select/dist/slimselect.css"
const API_KEY = "live_RUHwtj6wJJPnfFBmE65IS36q7PEOstT78pnlAp1aYc9k725uK7f5gZKHvOy4kflo";
axios.defaults.headers.common["x-api-key"] = API_KEY;
const select = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
catInfo.classList.add("is-hidden");
loader.classList.remove("is-hidden");
select.classList.add("is-hidden");
error.classList.add("is-hidden");
catInfo.classList.add("is-hidden");
    //backend//
    let arr = [];
    fetchBreeds()
        .then(data => {
            data.forEach(element => {
                arr.push({text: element.name, value: element.id});
            });
            new SlimSelect({
                select: select,
                data: arr
            });
    loader.classList.add("is-hidden");
            select.classList.remove("is-hidden");

            
        })
        .catch(error => {
            Notify.failure("Oops! Something went wrong! Try reloading the page!")
        });

select.addEventListener("change", onBreedSelect);
function onBreedSelect(evt) {
    loader.classList.remove("is-hidden");
    catInfo.classList.add("is-hidden");
    const breedId = evt.currentTarget.value;
    fetchCatByBreed(breedId)
        .then(data => {
            wrapperCatInfo(data);
            loader.classList.add("is-hidden");
            catInfo.classList.remove("is-hidden");
            wrapperCatInfo(data);
    })
        .catch(error => {
        loader.classList.add("is-hidden");
            Notify.failure("Oops! Something went wrong! Try reloading the page!")
        });
}
function wrapperCatInfo(data) {
     const { url, breeds } = data[0];
    const deskrCardCat = `<div class="container">
  <img src="${url}" alt="${breeds[0].name}" width ="400px">
</div><div class="box"><h1>${breeds[0].name}</h1>
<p>${breeds[0].description}</p>
<p><span class="temperament">Temperament:</span>${breeds[0].temperament}</p></div>`
catInfo.innerHTML = deskrCardCat; 
    
}