import React, { Fragment } from 'react';
import './inputBox.css'

const InputBox = ({ pokemon,inputNumber,keyPress }) => {
	return (
		<Fragment>
		<div className='tc' id='inputBox'>
		<label>Type a number and get a pokemon!</label>
		<input id='pokemon-input' type="text" onKeyPress={keyPress} onChange={inputNumber} placeholder='type a number from 1 to 905' />
		</div>
		</Fragment>
	)
}

export default InputBox