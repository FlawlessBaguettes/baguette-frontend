import React, { Component } from 'react'
import { View } from 'react-native'

import FormTextInput from './FormTextInput'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

import FormStyle from '../styles/FormStyle'

import { validateEmail, validatePasswordWeak } from '../utils/FormValidation'

class LoginScreen extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			email: '',
			loginButtonDisabled: true,
			password: ''
		}
	}

	componentDidUpdate(){
		this.updateLoginButton()
	}

	handleEmail = (text) => {
		this.setState({ email: text })
	}

	handlePassword = (text) => {
		this.setState({ password: text })
	}

	onPressLogin = () =>{
		const validForm = this.validateForm()

		if(validForm){
			true
		}
	}

	onPressSignUp = () =>{
		this.props.navigation.navigate('SignUpScreen')
	}

	updateLoginButton(){
		const { loginButtonDisabled } = this.state
		const validForm = this.validateForm()

		if (loginButtonDisabled == true && validForm){
			this.setState({
				loginButtonDisabled: false
			})
		}else if(loginButtonDisabled == false && !validForm) {
			this.setState({
				loginButtonDisabled: true
			})
		}
	}

	

	validateForm(){
		const { email, password } = this.state
		return(
			validateEmail(email) == true &&
			validatePasswordWeak(password) == true
		)
	}



	render(){
		const { loginButtonDisabled } = this.state

		return(
			<View style={FormStyle.container}>
				<FormTextInput
					autoCapitalize={'none'}
					autoCorrect={false}
					clearTextOnFocus={false}
					header={'Email'}
					onChangeText={this.handleEmail}
					validateInput={validateEmail}
			    />

			    <FormTextInput
					autoCapitalize={'none'}
					autoCorrect={false}
					clearTextOnFocus={false}
					header={'Password'}
					onChangeText={this.handlePassword}
					secureTextEntry={true}
					validateInput={validatePasswordWeak}
			    />

			    <PrimaryButton
		    		disabled={loginButtonDisabled} 
		    		onPress={this.onPressLogin}
		    		title={"Login"}
		    	/>

		    	<SecondaryButton 
		    		onPress={this.onPressSignUp}
		    		title={"Sign Up"}
		    	/>
	    	</View>
		)
	}
}

export default LoginScreen;