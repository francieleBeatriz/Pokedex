const PokemonCount = 150;
let mudaPokemon = 1;

const BOTAO_ANTERIOR = document.querySelector(".anterior");
const BOTAO_PROXIMO = document.querySelector(".proximo");

const FetchPokemon = async (id) => {
    const data = await GetPokemon(id);
    InfoPokemon(data)
}
const GetPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const InfoPokemon = async (pokemonData) => 
{
    const PokeInfo = document.querySelector(".pokedex-cardPokemon");
    
    const NumberPokemon = pokemonData.id;
    const NamePokemon = pokemonData.name.toUpperCase();
    const TypePokemon = pokemonData.types.map(type => type.type.name)

    PokeInfo.innerHTML = `
        <div class="pokedex-ImagemPokemon">
            <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${NumberPokemon}.png" id="imagemPokemon"/>
        </div>
        <div class="pokedex-informacoesPokemon">
            <p>Número: #<span>${NumberPokemon}</span></p>
            <p>Nome: <span>${NamePokemon}</span></p>
            <p>Tipo: <span>${TypePokemon}</span></p>
        </div>
    `
}

BOTAO_ANTERIOR.addEventListener("click", () =>{
    if(mudaPokemon > 1){
        mudaPokemon--
    }
    else{
        mudaPokemon = PokemonCount;
    }
    FetchPokemon(mudaPokemon)
})
BOTAO_PROXIMO.addEventListener("click", () => {
    if(mudaPokemon < PokemonCount){
        mudaPokemon++
    }
    else{
        mudaPokemon = 1;
    }
    FetchPokemon(mudaPokemon)
})
FetchPokemon(mudaPokemon)
