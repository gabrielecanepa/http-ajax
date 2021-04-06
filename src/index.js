// Select elements
// by id
const button = document.getElementById('button');
console.log(button);

// by query (same as css)
const blueButton = document.querySelector('.btn-primary');
console.log(blueButton);

const buttons = document.querySelectorAll('.btn'); // this is a node list (basically an array)
buttons.forEach((button) => { // if I want to change the elements I have to loop!
  button.classList.add('text-italic'); // other methods to apply on classList are remove and toggle
});

// DOM manipulation
button.innerText = "I've changed!";
blueButton.innerHTML = '<strong>I am bold now!</strong>';
// and many other methods, also depending on the type of element (an input, for example, doesn't have an inner text, but just a value!)

// Event listeners
button.addEventListener('click', (event) => {
  // This function is the callback!
  event.preventDefault(); // -> prevent the default behaviour (reloading the page)
  event.currentTarget.innerText = 'Loading...';
  event.currentTarget.disabled = true;
});

const form = document.querySelector('.form');
const input = form.querySelector('input');
const table = document.querySelector('.table');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // same as before
  fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then((data) => {
      const tableRow = `
        <tr>
          <td><img src="${data.avatar_url}" alt=""/></td>
          <td>${data.name}</td>
          <td>${data.url}</td>
          <td>${data.location}</td>
        </tr>
      `;
      table.insertAdjacentHTML('beforeend', tableRow);
    });
});
