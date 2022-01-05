// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title'); // title with name of pokemon
const url = 'https://pokeapi.co/api/v2/pokemon/'; // api for pokemons
const input = document.querySelector('.input'); // input to search pokemons

// Pokemon Img
const pokemon = document.querySelector('.pokemon img'); // img from pokemon

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  pokemon.style.transform = `scale(1.1) rotateX(${xAxis}deg)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  // Reset Animation
  pokemon.style.transform = 'translateZ(0px)';
});
// Cathing Poke Api
async function apiPokemon() {
  try {
    const response = await fetch(`${url}${id}`);
    const poke = await response.json();
  } catch (error) {
    const errorMsg = document.createElement('div');
    errorBox.appendChild(errorMsg);
    errorMsg.classList.add('invalid');
    errorMsg.textContent = 'Pokemon Not Found try again';
    setTimeout(() => {
      errorMsg.remove(); // Waiting 1500ms to remove error message
    }, 1500);
  }
}
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value != '') {
    e.preventDefault();
    id = input.value.toLowerCase();
    apiPokemon(id); // Sending id of pokemon to api
    input.value = '';
  }
});
