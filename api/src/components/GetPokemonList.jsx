import React, { useState, useEffect } from "react";
import axios from "axios";

const GetPokemonList = () => {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
			.then(response => {
				console.log(response.data.results);
				setPokemonList(response.data.results);
			})
			.catch(error => {
				console.error("Could not find");
			});
	}, []);


	return (
		<div>
			<h1>Pokemon API</h1>
			<ul>
					{pokemonList.map((pokemon,index) =>(
                        <li key = {index}>{pokemon.name}</li>
                ))}
                </ul>
		</div>
	);
};

export default GetPokemonList;
