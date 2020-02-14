const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

// this is CALLING the fetchBreedDescription fn, with the breedname, and the callback we define here.
// the parameters to pass to the callback are determined in the definition of fetchBreedDesc function
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});