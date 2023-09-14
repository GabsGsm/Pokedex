// pokemon.js
const getPokemon = (urlPokeapi, id) => `${urlPokeapi}${id}`;
const getType = (pokemon, index) => {
  let types = pokemon.types;
  if (types[index]) {
    return types[index].type.name;
  } else {
    return "";
  }
};
const formatarOrder = (order) => {
  return `#${String(order).padStart(3, '0')}`;
}
const pokemonList = [];
let listCreate = false;
let intervalId;

const creatList = (listElement, size) => {
  intervalId = setInterval(() => {
    if (pokemonList.length == size && listCreate == false) {
      clearInterval(intervalId);
      pokemonList.sort(function (a, b) {
        return a.id - b.id;
      });
      for (let id = 0; id <= size; id++) {
        addPokemonToList(listElement, pokemonList[id])
      }
      listCreate = true;
    }
  }, 2000);
}

const addPokemonToList = (listElement, pokemon) => {
  const li = document.createElement("li");

  const contentPoke = document.createElement("div");
  contentPoke.className = "content-poke";

  const infoDiv = document.createElement("div");
  infoDiv.className = "info-div";

  const imageDiv = document.createElement("div");
  imageDiv.className = "image-div";

  const nomePokemon = document.createElement("h3");
  nomePokemon.className = "nome-pokemon";

  const type1 = document.createElement("p");
  type1.className = "type-pokemon";

  const type2 = document.createElement("p");
  type2.className = "type-pokemon";

  type1.style.background = `var(--${getType(pokemon,0)}-light)`;
  type2.style.background = `var(--${getType(pokemon,1)}-light)`;

  const imagePokemon = document.createElement("img");
  imagePokemon.className = "image-pokemon";

  const pokeballIcon = document.createElement("svg");
  pokeballIcon.innerHTML = `
         <?xml version="1.0" encoding="UTF-8"?>
        <svg id="pokeball" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"   viewBox="0 0 192 192" version="1.1">
        <g>
        <path class="${getType(
          pokemon,
          0
        )}" style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" fill="#000000" d="M 88.949219 7.648438 C 69 9.074219 49.648438 17.773438 34.949219 31.949219 C 29.175781 37.5 25.800781 41.550781 21.597656 48 C 13.949219 59.773438 8.773438 74.625 7.796875 87.601562 L 7.496094 91.425781 L 53.996094 91.425781 L 54.519531 88.652344 C 58.042969 70.128906 72.519531 56.476562 90.96875 54.152344 C 102.820312 52.652344 115.417969 56.777344 124.269531 64.878906 C 130.871094 70.953125 135.292969 78.828125 137.019531 87.453125 L 137.769531 91.203125 L 161.09375 91.351562 C 181.269531 91.425781 184.417969 91.351562 184.417969 90.828125 C 184.417969 90.453125 184.117188 87.828125 183.742188 84.976562 C 179.765625 54.828125 161.46875 29.402344 134.167969 16.203125 C 127.566406 12.976562 119.316406 10.203125 112.566406 9.003906 C 108.214844 8.179688 97.492188 7.128906 94.941406 7.277344 C 94.339844 7.277344 91.640625 7.425781 88.941406 7.652344 Z M 88.949219 7.648438 "/>
        <path class="${getType(
          pokemon,
          0
        )}" style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" fill="#000000" d="M 91.5 63.824219 C 78.75 65.550781 67.726562 75.375 64.351562 87.972656 C 63.300781 91.871094 63.300781 100.273438 64.351562 104.171875 C 66.828125 113.398438 73.203125 121.195312 81.527344 125.246094 C 86.925781 127.871094 89.851562 128.472656 96.226562 128.472656 C 101.175781 128.398438 102.078125 128.324219 105.675781 127.121094 C 111.300781 125.171875 114.75 123.070312 119.027344 118.722656 C 122.175781 115.574219 123.152344 114.222656 124.878906 110.773438 C 127.804688 104.921875 128.402344 101.773438 128.105469 94.722656 C 127.804688 87.074219 126.457031 83.023438 122.332031 77.171875 C 115.507812 67.496094 103.28125 62.171875 91.507812 63.820312 Z M 99.75 82.5 C 104.699219 83.851562 108.824219 88.351562 109.875 93.523438 C 111.148438 99.523438 107.773438 106.046875 102.074219 108.898438 C 99.898438 109.949219 99.074219 110.097656 95.847656 110.097656 C 92.847656 110.023438 91.796875 109.871094 90.148438 109.046875 C 86.847656 107.320312 85.125 105.671875 83.546875 102.820312 C 80.695312 97.496094 81.445312 91.046875 85.421875 86.769531 C 89.472656 82.417969 94.273438 80.917969 99.746094 82.496094 Z M 99.75 82.5 "/>
        <path class="${getType(
          pokemon,
          0
        )}" style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" fill="#000000" d="M 7.800781 104.699219 C 9 120.523438 16.5 138.898438 26.851562 151.574219 C 29.851562 155.25 36.902344 162.300781 40.578125 165.300781 C 67.351562 186.976562 104.628906 190.949219 135.601562 175.425781 C 144.675781 170.851562 151.277344 166.050781 158.625 158.699219 C 173.476562 143.847656 182.175781 125.25 184.273438 103.875 L 184.574219 101.175781 L 137.777344 101.175781 L 137.175781 104.324219 C 134.925781 117.523438 124.277344 130.5 111.75 135.375 C 105.601562 137.773438 102.898438 138.226562 95.925781 138.226562 C 90.675781 138.226562 88.875 138.078125 85.800781 137.25 C 69.300781 132.824219 57.375 119.773438 54.449219 102.824219 L 54.148438 101.175781 L 7.5 101.175781 Z M 7.800781 104.699219 "/>
        <path class="${getType(
          pokemon,
          0
        )}" style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" fill="#000000" d="M 102.066406 111.425781 C 93.421875 114.308594 83.867188 109 80.722656 99.566406 C 77.578125 90.136719 82.039062 80.15625 90.683594 77.273438 C 99.328125 74.390625 108.882812 79.703125 112.027344 89.132812 C 115.171875 98.5625 110.710938 108.542969 102.066406 111.425781 "/>
        </g>
  `;
  pokeballIcon.classList.add("pokeball-icon");

  const order = document.createElement('span');
  order.className = 'order'
  order.textContent = formatarOrder(pokemon.id)

  nomePokemon.textContent = pokemon.name;
  type1.textContent = getType(pokemon, 0);
  type2.textContent = getType(pokemon, 1);
  imagePokemon.src = pokemon.sprites.front_default;
  li.classList.add(getType(pokemon, 0));
  li.style.position = "relative";

  infoDiv.appendChild(nomePokemon);
  infoDiv.appendChild(type1);
  infoDiv.appendChild(type2);
  imageDiv.appendChild(imagePokemon);
  contentPoke.appendChild(infoDiv);
  contentPoke.appendChild(imageDiv);
  contentPoke.appendChild(pokeballIcon);
  li.appendChild(contentPoke);
  listElement.appendChild(li);
  li.appendChild(order)
};

const fetchAndAddPokemon = (urlPokeapi, id) => {
  const url = getPokemon(urlPokeapi, id);

  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Erro na requisição: ${response.status}`);
      return response.json();
    })
    .then((pokemon) => {
      pokemonList.push(pokemon)
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
};

export { getPokemon, addPokemonToList, fetchAndAddPokemon, creatList};
