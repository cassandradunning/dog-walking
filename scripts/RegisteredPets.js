/*
1.) Update the code in RegisteredPets module so that the <li> for each pet has an 
    id attribute with the following format id="pet--1". The primary key should be correct for each element.
2.) Add a click event listener to your HTML document.
3.)Store the target HTML element of the click event in a variable.
4.)Check if the id property of the element starts with the string of "pet".
5.)If it does, use the split() method on the id property to get an array of two string (e.g. ["pet", "4"])
6.)Use array deconstruction to assign the primary key to a variable named petPrimaryKey.
7.)Find the whole pet object by iterating the array of pet objects and comparing each primary key 
    to the integer value of the petPrimaryKey variable.
8.)As soon as a match is found, display a message that the dog barks at you - "Rocket barks at you"
*/

/*
In this chapter, you will write code that will iterate two arrays of data to find the information you need. 
When you click on a pet name, you want to display the name of the pet, and the name of the person who walks the pet.
Since those two bits of information are in different arrays, you will need to find the pet object, 
and then find the related walker object based on the foreign key.
*/


import { getPets, getWalkers } from "./database.js"


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
     
        const itemClicked = clickEvent.target

       // the class of "pet" can be seen in the debugger on the Registered Pet column
        if (itemClicked.id.startsWith("pet")) {
             // will get the pet with the corresponding id (i.e. id: 4, is Ebony. See database)
            const [,petPrimaryKey] = itemClicked.id.split("--") 
            
            let matchingPet = null
            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                }
            }
          // now we need to look inside our walkers 
          let matchingWalker = null
          for (const walker of walkers){
            if (matchingPet.walkerId === walker.id) {
                // matchingWalker has too low of a scope, so we defined it about the for loop
                matchingWalker = walker
            }
          }
    
            
        window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
        }
    }
)
const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}"> ${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}
