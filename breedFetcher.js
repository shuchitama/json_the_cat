const request = require('request');
const breed = process.argv.slice(2);
const breedSearch = "https://api.thecatapi.com/v1/breeds/search"

request(`${breedSearch}?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed ${breed} not found!`)
    } else {
      console.log(data[0].description);
    }
  }
});