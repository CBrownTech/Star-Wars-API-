// Description: This file contains the code to display the character profile page.

const apiUrl = 'https://swapi.dev/api';
const characterId = window.location.search.split('=')[1];
const characterUrl = `${apiUrl}/people/${characterId}`;
// Make an API call to get the character data
fetch(characterUrl)
  .then(response => response.json())
  .then(characterData => {
    document.getElementById('name').textContent = characterData.name;
    document.getElementById('birth-year').textContent = characterData.birth_year;
    document.getElementById('gender').textContent = characterData.gender.charAt(0).toUpperCase() + characterData.gender.slice(1);
    document.getElementById('height').textContent = characterData.height;
    document.getElementById('mass').textContent = characterData.mass;
    document.getElementById('hair-color').textContent = characterData.hair_color.charAt(0).toUpperCase() + characterData.hair_color.slice(1);
    document.getElementById('eye-color').textContent = characterData.eye_color.charAt(0).toUpperCase() + characterData.eye_color.slice(1);
    const speciesList = document.getElementById('species');
// Make an API call to get the species data
    characterData.species.forEach(speciesUrl => {
      fetch(speciesUrl)
        .then(response => response.json())
        .then(speciesData => {
          const speciesItem = document.createElement('a');
          speciesItem.textContent = speciesData.name;
            speciesList.appendChild(speciesItem);
        });
    });

// Make an API call to get the homeworld data
const homeworldElement = document.getElementById('homeworld');
fetch(characterData.homeworld)
  .then(response => response.json())
  .then(homeworldData => {
    homeworldElement.textContent = homeworldData.name;
  })
  .catch(error => console.error('Error:', error));

// Make an API call to get the films data
const filmsList = document.getElementById('films');
characterData.films.forEach(filmUrl => {
  fetch(filmUrl)
    .then(response => response.json())
    .then(filmData => {
      const filmItem = document.createElement('li');
      const filmLink = document.createElement('a');
      filmLink.textContent = filmData.title;
      filmLink.setAttribute('href', `films_profile.html?id=${filmData.url.split('/').slice(-2, -1)[0]}`);
      filmItem.appendChild(filmLink);
      filmsList.appendChild(filmItem);
    })
    .catch(error => console.error('Error:', error));
}); 

// Make an API call to get the vehicles data
const vehiclesList = document.getElementById('vehicles');
const vehicleNames = [];
characterData.vehicles.forEach(vehicleUrl => {
  fetch(vehicleUrl)
    .then(response => response.json())
    .then(vehicleData => {
      const vehicleItem = document.createElement('a');
        vehicleNames.push(vehicleData.name);
        vehiclesList.textContent = `${vehicleNames.join(', ')}`;
    })
    .catch(error => console.error('Error:', error));
}); 

// Make an API call to get the starships data
const starshipsList = document.getElementById('starships');
const starshipNames = [];
characterData.starships.forEach(starshipUrl => {
  fetch(starshipUrl)
    .then(response => response.json())
    .then(starshipData => {
        starshipNames.push(starshipData.name);
        starshipsList.textContent = `${starshipNames.join(', ')}`;
      })
    })
    .catch(error => console.error('Error:', error));
});


