const pokeApi = {};

function convertPokeApi(pokedatail){
    const pokemon = new Pokemon();
    pokemon.number = pokedatail.order
    pokemon.name = pokedatail.name

    const types = pokedatail.types.map((typeSlot)=>typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokedatail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDatail = (pokemon)=>{
    return fetch(pokemon.url).then((res)=>  res.json()).then(convertPokeApi)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((res) => res.json())
        .then((res) => res.results)
        .then((pokeList) => pokeList.map(pokeApi.getPokemonDatail))
        .then((requisicoes) => Promise.all(requisicoes))
        .then((dadosPokemon)=> dadosPokemon)
        .catch((err) => console.error(err))
}

