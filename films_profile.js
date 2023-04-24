// Description: JavaScript file for the film profile page.
// The film profile page displays the details of a film, including the title, episode ID, director, producer, release date, and opening crawl.
// The film profile page also displays a list of characters in the film, which are links to the character profile page.

const apiUrl = 'https://swapi.dev/api';
const filmId = window.location.search.split('=')[1];
const filmUrl = `${apiUrl}/films/${filmId}`;

fetch(filmUrl)
  .then(response => response.json())
  .then(filmData => {
    document.getElementById('title').textContent = filmData.title;
    document.getElementById('episode-id').textContent = `${filmData.episode_id}`;
    document.getElementById('director').textContent = `${filmData.director}`;
    document.getElementById('producer').textContent = `${filmData.producer}`;
    document.getElementById('release-date').textContent = `${filmData.release_date}`;

    const openingCrawl = document.getElementById('opening-crawl');
    openingCrawl.textContent = filmData.opening_crawl;

    // Display list of characters in film
    const charactersList = document.getElementById('characters');
    filmData.characters.forEach(characterUrl => {
      fetch(characterUrl)
        .then(response => response.json())
        .then(characterData => {
          const characterItem = document.createElement('li');
          const characterLink = document.createElement('a');
          characterLink.textContent = characterData.name;

          if (characterData.url.includes('people')) {
            characterLink.href = `character_profile.html?id=${characterData.url.split('/')[5]}`;
          } 
          characterItem.appendChild(characterLink);
          charactersList.appendChild(characterItem);
        });
    });
  });
// Display list of planets in film
    const planetsList = document.getElementById('planets');
    const planetNames = [];
    filmData.planets.forEach(planetUrl => {
      fetch(planetUrl)
        .then(response => response.json())
        .then(planetData => {
          planetNames.push(planetData.name);
          planetsList.textContent = planetNames.join(', ');
        });
      });
    
// Display list of starships in film
    const starshipsList = document.getElementById('starships');
    const starshipNames = [];
    filmData.starships.forEach(starshipUrl => {
      fetch(starshipUrl)
        .then(response => response.json())
        .then(starshipData => {
          starshipNames.push(starshipData.name);
          starshipsList.textContent = starshipNames.join(', ');
        });
    });

// Display list of vehicles in film
    const vehiclesList = document.getElementById('vehicles');
    filmData.vehicles.forEach(vehicleUrl => {
      fetch(vehicleUrl)
        .then(response => response.json())
        .then(vehicleData => {
          const vehicleItem = document.createElement('li');
          vehicleItem.textContent = vehicleData.name;
          vehiclesList.appendChild(vehicleItem);
        });
    });

// Display list of species in film
    const speciesList = document.getElementById('species');
    filmData.species.forEach(speciesUrl => {
      fetch(speciesUrl)
        .then(response => response.json())
        .then(speciesData => {
          const speciesItem = document.createElement('li');
          speciesItem.textContent = speciesData.name;
          speciesList.appendChild(speciesItem);
        });
    });
  