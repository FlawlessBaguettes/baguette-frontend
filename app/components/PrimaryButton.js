import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import ButtonStyle from '../styles/ButtonStyle'

class PrimaryButton extends Component{

	constructor(props){
		super(props)
		this.state = {
			primaryButtonStyle: ButtonStyle.primaryButtonEnabled,
		}

	}

	componentDidMount(){
		this.setButtonStyle()
	}

	componentDidUpdate(prevProps){
		if(prevProps.disabled != this.props.disabled){
			this.setButtonStyle()
		}
	}

	onPress = () => {
		this.props.onPress()
	}

	setButtonStyle(){
		const { disabled } = this.props
		
		if (disabled){
			this.setState({ 
				primaryButtonStyle: ButtonStyle.primaryButtonDisabled,
			})

		}else{
			this.setState({ 
				primaryButtonStyle: ButtonStyle.primaryButtonEnabled,
			})
		}
		
	}

	render(){
		const { disabled, title } = this.props
		const { primaryButtonStyle } = this.state

		return(
			<TouchableHighlight
				disabled={disabled}
				onPress={this.onPress}
				style={[ButtonStyle.primaryButton, primaryButtonStyle]}
			>
	    		<Text style={ButtonStyle.primaryButtonText}>{title}</Text>
	    	</TouchableHighlight>
		)
	}
}

export default PrimaryButton