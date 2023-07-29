import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api"
import { Notify } from "notiflix";
import SlimSelect from 'slim-select'
axios.defaults.headers.common["x-api-key"] = "live_RUHwtj6wJJPnfFBmE65IS36q7PEOstT78pnlAp1aYc9k725uK7f5gZKHvOy4kflo";
const select = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
select.addEventListener("change", onBreedSelect);

//loder//
function fetchCatList() {
    loader.classList.remove("is-hidden");
    error.classList.add("is-hidden");
    select.classList.add("is-hidden");

    //backend//
    let arr = [];
    fetchBreeds()
        .then(data => {
            data.forEach(element => {
                arr.push({ text: element.name, value: element.id });
            });
            select.innerHTML = arr;
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
}
fetchCatList();

function onBreedSelect(evt) {
    loader.classList.remove("is-hidden");
catInfo.classList.add("is-hidden");
    const breedId = evt.currentTarget.value;
    fetchCatByBreed(breedId)
        .then(data => {
            catInfo.classList.remove("is-hidden");
            loader.classList.add("is-hidden");
            wrapperCatInfo(data);
    })
        .catch(error => {
        loader.classList.add("is-hidden");
            Notify.failure("Oops! Something went wrong! Try reloading the page!")
        });
}
function wrapperCatInfo(data) {
     const { url, breeds } = data[0];
    // const { name, temperament, description } = breeds[0];
    const deskrCardCat = `<div class="container">
  <img src="${url}" alt="${breeds[0].name}" width ="400px">
</div>
<h1>${breeds[0].name}</h1>
<p>${breeds[0].description}</p>
<p><span class="">Temperament:</span>${breeds[0].temperament}</p>`
catInfo.innerHTML = deskrCardCat; 
    
}