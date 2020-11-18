import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

class FormTextInput extends Component{
	constructor(props){
		super(props)
		this.state = {
			textInputStyle: styles.textInput
		}
	}

	onBlur = () => {
		this.setState({ textInputStyle: styles.textInput })
	}

	onFocus = () => {
		this.setState({ textInputStyle: styles.textInputFocused })
	}

	render(){
		return(
			<TextInput
	      		style={this.state.textInputStyle}
	      		onChangeText={text => this.props.onChangeText(text)}
	      		onBlur={this.onBlur}
	      		onFocus={this.onFocus}
		    />

		)
	}
}

const styles = StyleSheet.create({
  	textInput:{
  		height: 40, 
  		borderColor: 'gray', 
  		borderWidth: 1
  	},

  	textInputFocused:{
  		height: 40, 
  		borderColor: 'gray', 
  		borderWidth: 2
  	}
  })

export default FormTextInput