import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

import FormTextInput from './FormTextInput'

class SignUpScreen extends Component{
	constructor(){
		super()
		this.state = {
			first_name: null,
			last_name: null,
			email: null,
			username: null,
		}
	}

	handleFirstName = (text) => {
		this.setState({ first_name: text })
	}

	handleLastName = (text) => {
		this.setState({ last_name: text })
	}

	handleEmail = (text) => {
		this.setState({ email: text })
	}

	handleUsername = (text) => {
		this.setState({ username: text })
	}

	render(){
		return(
			<View style={styles.container}>
				<Text>Sign Up</Text>
				<Text>First Name</Text>
				<FormTextInput
			      onChangeText={this.handleFirstName}
			    />

			    <Text>Last Name</Text>
				<FormTextInput
			      onChangeText={this.handleLastName}
			    />

			    <Text>Email</Text>
				<FormTextInput
			      onChangeText={this.handleEmail}
			    />

			    <Text>Username</Text>
				<FormTextInput
			      onChangeText={this.handleUsername}
			    />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  	},
  })

export default SignUpScreen