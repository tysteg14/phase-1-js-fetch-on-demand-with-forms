const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID')

    console.log(input.value);

    const movieURL = 'http://localhost:3000/movies'

    fetch(`${movieURL}/${input.value}`)
       .then((response) => response.json())
       .then((data) => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;

        inputForm.reset()
       });
  })
};

document.addEventListener('DOMContentLoaded', init);