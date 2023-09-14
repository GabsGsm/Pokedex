import { fetchAndAddPokemon } from './pokemon.js';
import { creatList } from './pokemon.js';

const listaPokemon = document.querySelector(".lista-pokemon");
const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";
const iconPokeball= document.querySelector('#icon-pokeball');

const testeImagem = (elemento) => {
    const imagem1 = "/svg/pokeball_icon.svg";
    const imagem2 = "../public/svg/pokeball_icon.svg";
  
    const testImage = new Image();
    testImage.onload = function() {
        elemento.setAttribute('xlink:href', imagem1);
    };
    testImage.onerror = function() {
      elemento.setAttribute('xlink:href', imagem2);
    };
    testImage.src = imagem1; 
}

for (let id = 1; id <= 151; id++) {
    fetchAndAddPokemon(urlPokeapi, id)
}
creatList(listaPokemon, 151);

testeImagem(iconPokeball);
