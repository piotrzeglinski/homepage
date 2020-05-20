const firstName = "Piotr";
const age = 37;

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Siema, fajnie, że wpadłeś, nazywam się ${firstName} i mam ${age} lat.`;

const greet = (age, firstName) => {
  console.log(`Siema, fajnie, że wpadłeś, nazywam się ${firstName} i mam ${age} lat.`);
}

greet(age, firstName);
greet('18', 'Franio');

function createContent(querySelectorContent, content) {
const element = document.querySelector(querySelectorContent);
element.innerHTML = content;
}

createContent('.why__description--js', 'Chętnie nawiążę współpracę. Odezwij się jeśli szukasz kogoś do pomocy!');