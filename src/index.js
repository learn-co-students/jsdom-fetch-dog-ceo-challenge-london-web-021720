console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then( response => response.json())
    .then( images => displayImages(images))

const displayImages = images.forEach(image => {
    const area = document.querySelector("#dog-image-container")
    const listItem = document.createElement("li")
    listItem.innerText = image.src  
    area.append(listItem)   
});

