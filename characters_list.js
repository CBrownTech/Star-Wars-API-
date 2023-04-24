// Get the characters list element
const charactersList = document.getElementById('characters');

// Make an API call to get the list of characters
fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    // Loop through each character in the list
    data.results.forEach(character => {
      
      // Create a new list item and anchor element for the character
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      
      // Set the href attribute of the link to the character profile page URL
      link.setAttribute('href', `character_profile.html?id=${character.url.split('/').slice(-2, -1)}`);
      
      // Set the text content of the link to the character name
      link.textContent = character.name;
      
      // Add a click event listener to the link to redirect to the character profile page
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = event.target.getAttribute('href'); // Redirect to the character profile page URL
      });
      
      // Append the link to the list item, and the list item to the characters list
      listItem.appendChild(link);
      charactersList.appendChild(listItem);
    });
  });


fetch(filmsUrl)
  .then(response => response.json())
  .then(filmsData => {
    filmsData.results.forEach(filmData => {
      const filmItem = document.createElement('li');
      const filmLink = document.createElement('a');
      filmLink.textContent = filmData.title;
      filmLink.href = `film.html?id=${filmData.url.split('/').slice(-2, -1)}`;
      filmItem.appendChild(filmLink);
      filmsList.appendChild(filmItem);
    });
  });

  
// fetch('https://swapi.dev/api/people/')
// .then(response => response.json())
// .then(characterData => {
//   characterData.results.forEach(character => {
//     const characterLink = document.createElement('a');
//     characterLink.textContent = character.name;
//     characterLink.href = '#'; // placeholder for the link
//     characterLink.addEventListener('click', event => {
//       event.preventDefault(); // prevent following the link
//       fetch(character.url)
//         .then(response => response.json())
//         .then(characterProfileData => {
//           // create HTML elements to display the character profile data
//           // ...
//         })
//         .catch(error => console.log('Error fetching character profile data:', error));
//     });
//     const characterListItem = document.createElement('li');
//     characterListItem.appendChild(characterLink);
//     document.body.appendChild(characterListItem);
//   });
// })
// .catch(error => console.log('Error fetching character data:', error));

