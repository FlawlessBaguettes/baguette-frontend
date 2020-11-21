import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

import FormTextInput from './FormTextInput'

import FormStyle from '../styles/FormStyle'

class SignUpScreen extends Component{
	constructor(){
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
		}
	}

	handleFirstName = (text) => {
		this.setState({ firstName: text })
	}

	handleLastName = (text) => {
		this.setState({ lastName: text })
	}

	handleEmail = (text) => {
		this.setState({ email: text })
	}

	handleUsername = (text) => {
		this.setState({ username: text })
	}

	validateFirstName = (text) =>{
		if (text == '') {
			return "Please enter a first name"
		}
		return true
	}

	validateLastName = (text) =>{
		if (text == '') {
			return "Please enter a last name"
		}
		return true
	}

	validateEmail = (text) =>{
		if (text == '') {
			return "Please enter an email address"
		}

		var mailformat = /^\S+@\S+\.\S+$/
		if (!text.match(mailformat)){
			return "Please enter a valid email address"
		}
		return true
	}

	validateUsername = (text) =>{
		if (text == '') {
			return "Please enter a username"
		}
		return true
	}

	render(){
		const { firstNameErrorMessage } = this.state
		return(
			<View style={FormStyle.container}>
				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}					
					autoFocus={true}
					header={'First Name'}
					onChangeText={this.handleFirstName}
					validateInput={this.validateFirstName}
			    />

				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					header={'Last Name'}
					onChangeText={this.handleLastName}
					validateInput={this.validateLastName}
			    />

				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					header={'Email'}
					onChangeText={this.handleEmail}
					validateInput={this.validateEmail}
			    />

				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					header={'Username'}
					onChangeText={this.handleUsername}
					validateInput={this.validateUsername}
			    />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	
})

export default SignUpScreen