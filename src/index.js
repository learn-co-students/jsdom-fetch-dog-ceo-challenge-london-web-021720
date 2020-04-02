console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function renderPhotos(obj)
{
    const imageContainer = document.querySelector("#dog-image-container")
    
    obj.message.forEach(element => {
        const image = document.createElement("img")
        image.src = element
        image.width = 300
        image.height = 230
        imageContainer.appendChild(image)
    });
}

function renderList(obj)
{
    const breedList = document.querySelector("#dog-breeds")

    breedList.innerText = ''

    for (const breed of obj){
        const li = document.createElement('li')
        li.innerText = breed
        li.addEventListener("click", () => li.style.color = "green")
                    
        breedList.appendChild(li)
    }
}

function filterBreeds(selectedBreed) 
{
    renderList(listOfBreeds.filter(e => e[0].includes(selectedBreed)))
}

function transformBreedsObjectToArray(obj)
{
    const dogBreeds = []

    for(const breed in obj) {
        if (obj[breed].length > 0)
        {
            for (const init of obj[breed])
            {
                dogBreeds.push(`${init} ${breed}`)
            }
        }
        else
        {
            dogBreeds.push(breed)
        }
    }
    return dogBreeds
}

const fetchDogs = () => fetch(imgUrl).then(response => response.json()).then(dogs => renderPhotos(dogs));
let listOfBreeds = {}
const fetchBreeds = (url) => fetch(url).then(response => response.json()).then(breeds => {listOfBreeds = transformBreedsObjectToArray(breeds.message); renderList(listOfBreeds)})


document.addEventListener("DOMContentLoaded", function() {
    fetchDogs()
    fetchBreeds(breedUrl)


    const breedSelectorElement = document.querySelector("#breed-dropdown")

    breedSelectorElement.addEventListener("change", () => {
        filterBreeds(breedSelectorElement.value)
    })
})