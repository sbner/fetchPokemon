import React, { Fragment, Component } from 'react';
import InputBox from './inputBox'
import FetchButton from  './fetchButton'
import FetchedPokemon from './fetchedPokemon'
import './inputBox.css'
import './app.css'
import WhosThat from './whosthatpokemon.png'


class App extends Component {
	constructor() {
		super()
		this.state = {
			pokemon: '',
			pokemonName: "Who's that Pokemon",
			pokemonImg: WhosThat
		}
	}

	pokeNumber = (event) => {
		this.setState({pokemon: event.target.value })
	}

	keyPress = (event) => {
		if (event.key === 'Enter'){
			this.myPokemon()
		}
	}

	myPokemon = () => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
		.then(data => data.json())
		.then(pokemonInfo => {
			this.setState({pokemonName: pokemonInfo.species.name});
			this.setState({pokemonImg: pokemonInfo.sprites.front_default});
		})
	}

	render() {
		const { pokemonName, pokemonImg } = this.state;
		return (
			<Fragment>
			<header>
				<div id='title'>Poke Fetch!</div>
			</header>
			<main>
				<div className='tc'>
					<InputBox inputNumber={this.pokeNumber} keyPress={this.keyPress}/>
					<FetchButton fetchPokemon={this.myPokemon}/>
					<FetchedPokemon name={pokemonName} img={pokemonImg}/>
				</div>
			</main>
			</Fragment>
		)		
	}
}

export default App;