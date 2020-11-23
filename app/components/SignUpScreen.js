import React, { Component } from 'react'
import { View } from 'react-native'

import FormTextInput from './FormTextInput'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

import FormStyle from '../styles/FormStyle'

import { validateEmail, validateFirstName, validateLastName, validatePasswordStrong, validateUsername } from '../utils/FormValidation'

class SignUpScreen extends Component{
	constructor(props){
		super(props)
		this.state = {
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			signUpButtonDisabled: true,
			username: '',
		}
	}

	componentDidUpdate(){
		this.updateSignUpButton()
	}

	handleEmail = (text) => {
		this.setState({ email: text })
	}

	handleFirstName = (text) => {
		this.setState({ firstName: text })
	}

	handleLastName = (text) => {
		this.setState({ lastName: text })
	}

	handlePassword = (text) => {
		this.setState({ password: text })
	}

	handleUsername = (text) => {
		this.setState({ username: text })
	}

	onPressLogin = () =>{
		this.props.navigation.navigate('LoginScreen')
	}

	onPressSignUp = () =>{
		const formValidation = this.validateForm()
		
		if(formValidation){
			true
		}
	}

	updateSignUpButton(){
		const { signUpButtonDisabled } = this.state
		const formValidation = this.validateForm()
		
		if (signUpButtonDisabled == true && formValidation){
			this.setState({
				signUpButtonDisabled: false
			})
		}else if(signUpButtonDisabled == false && !formValidation) {
			this.setState({
				signUpButtonDisabled: true
			})
		}
	}

	validateForm(){
		const { email, firstName, lastName, password, signUpButtonDisabled, username } = this.state
		return (
			validateEmail(email) == true &&
			validateFirstName(firstName) == true &&
			validateLastName(lastName) == true &&
			validatePasswordStrong(password) == true &&
			validateUsername(username) == true
		)
	}

	render(){
		const { signUpButtonDisabled } = this.state
		return(
			<View style={FormStyle.container}>
				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}					
					autoFocus={true}
					clearTextOnFocus={false}
					header={'First Name'}
					onChangeText={this.handleFirstName}
					validateInput={validateFirstName}
			    />

				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					clearTextOnFocus={false}
					header={'Last Name'}
					onChangeText={this.handleLastName}
					validateInput={validateLastName}
			    />

				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					clearTextOnFocus={false}
					header={'Email'}
					onChangeText={this.handleEmail}
					validateInput={validateEmail}
			    />

				<FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					clearTextOnFocus={false}
					header={'Username'}
					onChangeText={this.handleUsername}
					validateInput={validateUsername}
			    />

			    <FormTextInput
					autoCapitalize={false}
					autoCorrect={false}
					clearTextOnFocus={false}
					header={'Password'}
					onChangeText={this.handlePassword}
					secureTextEntry={true}
					validateInput={validatePasswordStrong}
			    />

		    	<PrimaryButton
		    		disabled={signUpButtonDisabled} 
		    		onPress={this.onPressSignUp}
		    		title={"Sign Up"}
		    	/>

		    	<SecondaryButton 
		    		onPress={this.onPressLogin}
		    		title={"Login"}
		    	/>

			</View>
		)
	}
}

export default SignUpScreen