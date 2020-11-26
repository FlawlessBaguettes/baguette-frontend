import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import ButtonStyle from '../styles/ButtonStyle'

class SecondaryButton extends Component{
  constructor(props){
    super(props)
    this.state = {
      secondaryButtonStyle: ButtonStyle.secondaryButtonEnabled,
    }

  }

  componentDidMount(){
    this.setButtonStyle()
  }

  componentDidUpdate(prevProps){
    if (prevProps.disabled != this.props.disabled) {
      this.setButtonStyle()
    }
  }

  onPress = () => {
    this.props.onPress()
  }

  setButtonStyle(){
    const { disabled } = this.props
    
    if (disabled) {
      this.setState({ 
        secondaryButtonStyle: ButtonStyle.secondaryButtonDisabled,
      })

    } else{ 
      this.setState({ 
        secondaryButtonStyle: ButtonStyle.secondaryButtonEnabled,
      })
    }
    
  }

  render(){
    const { disabled, title } = this.props
    const { secondaryButtonStyle } = this.state
    return(
      <TouchableHighlight
        disabled={disabled}
        onPress={this.onPress}
        style={[ButtonStyle.secondaryButton, secondaryButtonStyle]}
      >
        <Text style={ButtonStyle.secondaryButtonText}>{title}</Text>
      </TouchableHighlight>
    )
  }
}

export default SecondaryButton