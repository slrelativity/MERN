const { type } = require("os");

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);



const ids = pokemon.filter(pokemon => pokemon.id % 3 === 0);
console.log(ids); 

const firePokemons = pokemon.filter(pokemon => pokemon.types.includes("fire")); 
console.log(firePokemons);

const multipleTypes = pokemon.filter(pokemon => pokemon.types.length > 1); 
console.log(multipleTypes);


const names = pokemon.map(pokemon => pokemon.name); 
console.log(names);


const namesGreater = pokemon.filter(pokemon => pokemon.id > 99); 
console.log(namesGreater);


const poisonPokemons = pokemon.filter(pokemon => pokemon.types.includes("poison")); 
console.log(poisonPokemons);

const flying = pokemon.filter(pokemon => pokemon.types[1] === "flying").map(pokemon => pokemon.types [0]); 
console.log(flying);


const count = pokemon.filter(pokemon => pokemon.types.includes("normal")).length; 
console.log(count);


const allBut = pokemon.filter(pokemon => pokemon.id !== 148); 
console.log(allBut);


const update = pokemon.map(pokemon =>{if (pokemon.id === 35) {
        return {... pokemon, types:["fairy"]};
    }
    return pokemon
});
console.log(update);





