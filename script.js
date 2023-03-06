const container = document.getElementById('pokemon');
const newPokemonButton = document.getElementById('new-pokemon')

const messages = [
  "May your day be filled with lots of treats and adventures!",
  "Wishing you a very happy birthday filled with all the Pokeballs you can carry!",
  "May your special day be full of surprises, just like a wild Pokemon encounter!",
  "Happy Birthday, trainer! May your journey be filled with lots of new Pokemon to catch and train!",
  "On your birthday, may all your Poke-dreams come true!",
  "Happy Birthday! May your journey as a Pokemon trainer be filled with adventure, friendship, and lots of rare and powerful Pokemon!",

  "Wishing you a very happy birthday filled with love, laughter, and lots of Pokemon battles! May your skills as a trainer continue to grow with each passing year!",
  
  "Happy Birthday! May your day be as amazing as catching your first legendary Pokemon and your year be filled with all the rarest Pokemon in the world!",
  
  "Wishing you a birthday as wonderful as a Pikachu's thunderbolt and as magical as a Charizard's flame! May your day be filled with lots of Pokemon cards, games, and fun!",
  
  "Happy Birthday! May you catch every single Pokemon you've ever dreamed of and have the most epic battles with your friends! Keep being an awesome Pokemon trainer!"
];

//function to generate random message

function generateMessage(){
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function getNewPokemon(){
  const randomId = Math.floor(Math.random() * 898) + 1;

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(response => response.json())
    .then(data => {

      container.innerHTML = '';

      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = data.sprites.front_default;

      const name = document.createElement('h2');
      name.textContent = data.name;

      const message = document.createElement('p');
      message.textContent = generateMessage();

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(message);

      container.appendChild(card);
    });


}

getNewPokemon();

newPokemonButton.addEventListener('click', getNewPokemon);