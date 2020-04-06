document.addEventListener("DOMContentLoaded", (event) => {

  console.log('%c HI', 'color: firebrick')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const imageContainer = document.querySelector("#dog-image-container");
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  var breedsList = document.querySelector("#dog-breeds")
  let aArray = []



  function addImage(images) {
      
      const imageArray = images.message
      imageArray.forEach(element => {
      const image = document.createElement("IMG")
      image.src = element
    
      imageContainer.append(image)
      });
  }

   function addBreeds(breeds) {
      console.log(breedsList)
      
      while (breedsList.hasChildNodes()) {  
        breedsList.removeChild(breedsList.childNodes[0]);
      }
 
     
      console.log(breedsList)
  
      console.log(breeds)
      
      for(const breed in breeds ){
        aArray = []
        const breedName = document.createElement("li")
      
        
        if (breeds[breed].length === 0) { 
          breedName.innerText = breed;
          breedsList.append(breedName)
        }
        else {
          for (const element of breeds[breed]) {
            console.log(aArray.length)
            
            aArray.push(element)
            if (breeds[breed].length === aArray.length) {
              
              aArray.join(" ")
              breedName.innerText = `${breed}(${aArray})` 
              breedsList.append(breedName)
            }
            
          }
        }
        breedName.addEventListener("click", event => {
          breedName.style.color = "blue";
        })
      }
      
   }


   function filterDogs(data) { 
       
       
      //  console.log(data)
       const dropDown = document.querySelector("#breed-dropdown")
       dropDown.addEventListener("change", event => {
        let newdog = {}
        const filteredDog = {}
         if (dropDown.value === "a") {
          for(const element in data.message) {
          if (element[0]=== "a")
          {
           
            //  console.log(element)
             
            newdog =  Object.assign(filteredDog,{[element]:data.message[element]} )
            // console.log(newdog)
          }
         }
         addBreeds(newdog)
        }
         else if (dropDown.value === "b"){
          for(const element in data.message) {
            if (element[0]=== "b")
            {
             
               console.log(element)
               
              newdog =  Object.assign(filteredDog,{[element]:data.message[element]} )
              // console.log(newdog)
            }
           }
           addBreeds(newdog)
         }
         else if (dropDown.value === "c"){
          for(const element in data.message) {
            if (element[0]=== "c")
            {
             
               console.log(element)
               
              newdog =  Object.assign(filteredDog,{[element]:data.message[element]} )
              // console.log(newdog)
            }
           }
           addBreeds(newdog)
        }
         else if (dropDown.value === "d"){
          for(const element in data.message) {
            if (element[0]=== "d")
            {
             
               console.log(element)
               
             newdog = Object.assign(filteredDog,{[element]:data.message[element]} )
            //  console.log(newdog)
            }
           
           }
           addBreeds(newdog)
        }
       
       })

        
       
  }




  
  fetch(imgUrl)
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
   
    addImage(data)
    })
  
  fetch(breedUrl)
    .then(response => { 
      return response.json()
    })
    .then(data => {
      //add breeds to ul
      filterDogs(data)
      
    })
    

})
