
// function convertePokemonType(pokemonType){
//     return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }
const pokemonList = document.getElementById('pokemonList');
const buttonLoad = document.getElementById('load');
let limit = 5;
let offset = 0;

function convertPokemonHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">

    </div>
    </li>
    `
}

function loadPokemons(offset, limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = [])=>{
        pokemonList.innerHTML += pokemons.map(convertPokemonHtml).join('')
    })
}

loadPokemons(offset, limit);

buttonLoad.addEventListener("click", ()=>{
    offset += limit;
    loadPokemons(offset, limit)
})





