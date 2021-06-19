const jokeBtn = document.getElementById("get-joke");
const jokeBox = document.getElementById("joke-box");
const beardBox = document.getElementById("beard-box");

// fetch a random joke from https://icanhazdadjoke.com/
const getJoke = () => {

    // add context to request
    // TODO: add user agent
    const init = {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
    };

    // fetch a random joke and write to page
    fetch("https://icanhazdadjoke.com", init)
    .then(response => response.json())
    .then(data => jokeBox.textContent = data.joke);
}

// add event listener to button
// maybe change to refresh page on click to fetch new image and quote?
jokeBtn.addEventListener("click", getJoke);

getJoke();