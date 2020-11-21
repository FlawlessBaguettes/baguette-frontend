import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import FormStyle from '../styles/FormStyle'

class FormTextInput extends Component{
	constructor(props){
		super(props)
		this.state = {
			textInputStyle: FormStyle.textInput,
			errorMessage: ''
		}
	}

	onBlur = (e) => {
		const { validateInput } = this.props
		var errorMessage = '';

		if (validateInput != undefined){
			var validInput = validateInput(e.nativeEvent.text) 
			if (validInput != true){
				errorMessage = validInput
			}
		}

		this.setState({ 
			textInputStyle: FormStyle.textInput, 
			errorMessage: errorMessage
		})
	}

	onFocus = () => {
		this.setState({ textInputStyle: FormStyle.textInputFocused })
	}

	render(){
		const {autoCapitalize, autoCorrect, autoFocus, header, onChangeText} = this.props
		const { errorMessage } = this.state
		return(
			<View style={FormStyle.inputHeader}>
				<Text>{header}</Text>
				<TextInput
		      		style={this.state.textInputStyle}
		      		autoCapitalize={autoCapitalize}
		      		autoCorrect={autoCorrect}
		      		autoFocus={autoFocus}
		      		onChangeText={text => onChangeText(text)}
		      		onBlur={e => this.onBlur(e)}
		      		onFocus={this.onFocus}
			    />
			    <Text style={FormStyle.errorMessage}>{errorMessage}</Text>
		    </View>

		)
	}
}

export default FormTextInput