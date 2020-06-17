import React from 'react';
import './fetchedPokemon.css'

const FetchedPokemon = ({ name, img }) => {
	
	return (
		<div id='pokemonBox' className='tc'>
		<div id="pokemonName">{name}</div>
		<img alt='pokemon' id='pokemon-img'src={img} width='200px'/>
		</div>
	)	
}

export default FetchedPokemon;