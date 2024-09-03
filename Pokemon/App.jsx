import React, { useState, useEffect } from "react";

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPokemonList = async () => {
			try {
				// Fetch the list of Pokémon names
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=20"
				); 
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setPokemonList(data.results);
			} catch (err) {
				setError("Failed to fetch Pokémon list");
			}
		};

		fetchPokemonList();
	}, []);

	return (
		<div>
			<h1>Pokémon List</h1>
			{error && <p>{error}</p>}
			<ul>
				{pokemonList.map((pokemon) => (
					<li key={pokemon.name}>
						{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;


import React, { useEffect, useState } from "react";

function Fetch() {
	const [pokemon, setPokemon] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const Pokemon = async () => {
			try {
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=151"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setPokemon(data.results); // Update state with the Pokémon data
			} catch (error) {
				setError("Failed to fetch Pokémon list");
				console.error(error);
			}
		};

		Pokemon();
	}, []); // Empty dependency array means this useEffect runs once on mount

	return (
		<div>
			<h1>Pokémon List</h1>
			{error && <p>{error}</p>}
			<ul>
				{pokemon.map((pokemon) => (
					<li key={pokemon}>
						{pokemon}charAt(0).toUpperCase() + {pokemon}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Fetch;