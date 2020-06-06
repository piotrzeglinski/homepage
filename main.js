const firstName = "Piotr";
const age = 37;

function createContent(querySelectorContent, content) {
const element = document.querySelector(querySelectorContent);
element.innerHTML = content;
}

createContent('.why__description--js', 'Chętnie nawiążę współpracę. Odezwij się jeśli szukasz kogoś do pomocy! ;)');

const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click', () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `CZEŚĆ, UCZĘ SIĘ BUDOWAĆ STRONĘ INTERNETOWĄ`;
  heading.classList.toggle('nowa-klasa-z-js');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation__open');
});