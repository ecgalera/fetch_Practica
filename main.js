
const items = document.getElementById("items")
const templateCard =document.getElementById("template-card").content
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", ()=> fetchData())



// capturo los datos de la API
const dataApi = "https://hp-api.herokuapp.com/api/characters"

const fetchData = async() =>{
    try{
        const response = await fetch(dataApi);
        const data = await response.json();
        // console.log(data)
        pintarCards(data)
   // invoco la función de abajo
    } catch(error){
        console.log(error)
    }
    
}

const pintarCards = data => {
   console.log(data)
    data.forEach(element => {
        templateCard.querySelector("h2").textContent = element.name
        templateCard.querySelector("h3").textContent = element.house
        templateCard.getElementById("image").src = element.image
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    });
    items.appendChild(fragment)
}

