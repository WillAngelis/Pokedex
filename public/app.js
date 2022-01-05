// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Pokemon Img
const pokemon = document.querySelector('.pokemon img');
const input = document.querySelector('.pokename');


// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  pokemon.style.transform = `scale(1.1) rotateX(${xAxis}deg)`;
});

container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  // Popback
  pokemon.style.transform = 'translateZ(0px)';
});
