// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title'); // title with name of pokemon
const url = 'https://pokeapi.co/api/v2/pokemon/'; // api for pokemons
const input = document.querySelector('.input_poke'); // input to search pokemons
const type = document.querySelector('.typeOne'); // type of pokemons
const typeTwo = document.querySelector('.typeTwo');
const box = document.querySelector('.info');
let id;

const color = {
  fire: '#FF4B2B',
  electric: '#f8e323',
  normal: '#e2e2e2',
  dragon: '#4568DC',
  ghost: '#7F00FF',
  ice: '#82f0f2',
  grass: '#38ef7d',
  poison: '#f749b1',
  bug: '#a8ff78',
  dark: '#434343',
  psychic: '#ee9ca7',
  steel: '#D3CCE3',
  ground: '#9a8478',
  water: '#1CB5E0',
  fighting: '#EB5757',
  rock: '#3C3B3F',
  flying: '#FFEDBC',
  fairy: '#FFAFBD',
};
// Pokemon Img
const pokemon = document.querySelector('.pokemon img'); // img from pokemon
const pokeImg = document.querySelector('.pokeImg');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  pokemon.style.transform = `scale(1.1) rotateX(${xAxis}deg)`;
});

container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  // Reset Animation
  pokemon.style.transform = 'translateZ(0px)';
});
function changeName(poke) {
  title.textContent = poke.name;
}
function changeImg(poke) {
  pokeImg.src = poke.sprites.front_default;
}
function changeType(poke) {
  type.textContent = poke.types[0].type.name;
  const typePoke = type.textContent;
  document.body.style.setProperty('--main-bg-color', color[typePoke]); // Change colors based on pokemon type
}
function changeStats(poke) {
  const div = document.querySelectorAll('section div');
  Object.keys(poke.stats).forEach((key) => {
    const statsPoke = ((poke.stats[key]));
    const width = (`${statsPoke.base_stat}px`);
    Object.keys(div).forEach((stat) => {
      div[stat].style.width = width;
    });
  });
}
// Cathing Poke Api
async function apiPokemon() {
  try {
    const response = await fetch(`${url}${id}`);
    const poke = await response.json();
    changeName(poke);
    changeImg(poke);
    changeType(poke);
    changeStats(poke);
    typePoke(poke);
  } catch (error) {
    const errorMsg = document.createElement('div');
    box.appendChild(errorMsg);
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
function typePoke(poke) {
  const [firstPokeType, secondPokeType] = poke.types;
  const { type: type1 } = firstPokeType;
  const firstType = type1.name;
  if (secondPokeType === undefined) {
    changeType(firstType);
    changeColor(firstType);
  } else {
    const { type: type2 } = secondPokeType;
    const secondType = type2.name;
    changeType(firstType);
    changeType2(secondType);
    changeColor(firstType, secondType);
  }
}
