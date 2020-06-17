import React, { Fragment } from 'react';
import './fetchbutton.css'

const FetchButton = ({fetchPokemon}) => {

	return (
		<Fragment>
			<button onClick={fetchPokemon} >Fetch !</button>
		</Fragment>
	)
}

export default FetchButton;