const firstName = "Piotr";
const age = 37;

const greet = (age, firstName) => {
  console.log(`Siema, fajnie, że wpadłeś, nazywam się ${firstName} i mam ${age} lat.`);
}

greet(37, 'Piotr');

function createContent(querySelectorContent, content) {
const element = document.querySelector(querySelectorContent);
element.innerHTML = content;
}

createContent('.why__description--js', 'Chętnie nawiążę współpracę. Odezwij się jeśli szukasz kogoś do pomocy! ;)');