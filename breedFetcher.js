const request = require('request');

const breedSearch = "https://api.thecatapi.com/v1/breeds/search";


// This is DEFINING the fetchBreedDescription, it only figures out what parameters to give to the callback
const fetchBreedDescription = function(breedName, cb) {
  request(`${breedSearch}?q=${breedName}`, (error, response, body) => {
    if (error) {
      cb(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        cb(`Breed ${breedName} not found!`, null);
        // console.log(`Breed ${breedName} not found!`)
      } else {
        cb(null, data[0].description);
        // console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };