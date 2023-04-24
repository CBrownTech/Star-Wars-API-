// Get the films list element
const filmsList = document.getElementById('films');

// Make an API call to get the list of films
fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    // Loop through each films in the list
    data.results.forEach(film => {
      // Create a new list item and anchor element for the films
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      
      // Set the href attribute of the link to the films profile page URL
      link.setAttribute('href', `films_profile.html?id=${film.url.split('/').slice(-2, -1)}`);
      
      // Set the text content of the link to the films' title
      link.textContent = film.title;
      
      // Add a click event listener to the link to redirect to the films profile page
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = event.target.getAttribute('href'); // Redirect to the films profile page URL
      });
      
      // Append the link to the list item, and the list item to the films list
      listItem.appendChild(link);
      filmsList.appendChild(listItem);
    });
  });
