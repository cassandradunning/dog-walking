import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()

    export const CityList = () => {
        let citiesHTML = "<ul>"

        // for (const walker of walkers) {
        //     citiesHTML += `<li>${walker.city}</li>`
        // }
        for (const city of cities){
            citiesHTML += `<li> ${city.name}</li>`
        }

        citiesHTML += "</ul>"

        return citiesHTML
    }

/* First, define a function that will get all objects in the walkerCities array 
that are for the walker that was clicked on. It should return an array of all 
matching objects. */

    // the func needs the walker info to read it, so define a parameter
   export const filterWalkerCitiesByWalker = (walker) => {
        // define an empty array to store all objects walkers are being assigned
        const filterByWalker = []

        //iterate the value of the array from walkerCities
        for (const walkerCity of walkerCities) {
            // check if the primary key of the walker = the foreign key on the filterByWalker
            if (walker.id === filterByWalker.walkerId){
                // if yes, add the current obj to the array of filterByWalker
                filterByWalker.push(walkerCity)
            }
        }
        // after the loop finishes, return the filterByWalker array
        return filterByWalker

    }
/* Then, define a function that take in the array of matching objects, and use 
the cityId property on each one to find the matching city name. It should return 
a string containing all the city names. */

    //  define a func that makes a string of city names
    //  needs a parament for filterByWalker array
   export const assignedCityNames = () => {
        // define an empty string that will get added w/ matching cities
        let cityNames = ""
        // iterate the array of filerByWalker objs
        for (const walkerCity of walkerCities) {
        // for each walkerCity, iterate the cities array to find the match
            for (const city of cities){
        // add the name of the matching city to the string of city names
                if (city.id === walkerCity.cityId) {
                cityNames = `${cityNames} ${city.name}`
                }
            }
        }
        // after the loop is done, return the string
        return cityNames
    }