const firstName = "Piotr";
const age = 37;

console.log(
  `Siema, fajnie, że wpadłeś, nazywam się ${firstName} i mam ${age} lat.`
);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Siema, fajnie, że wpadłeś, nazywam się ${firstName} i mam ${age} lat.`;

const emptyParagraph = document.querySelector('.why__description--js');

emptyParagraph.innerHTML = `Chętnie rozpocznę staż albo przyjmę zlecenie na prostą stronkę ;)`;