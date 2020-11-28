import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

class CaptureButton extends Component{

	constructor(){
	    super();
	    this.state = {
	      recording: false
    	}
  	}

  	captureButtonInnerStyle(){
  		var captureButtonInnerColor = 'white';
  		if (!this.state.recording){
  			captureButtonInnerColor = 'white'
  		} else{
  			captureButtonInnerColor = 'red'
  		}
  		return{
  			height: 55, 
		    width: 55,
		    borderRadius: 50,
		    backgroundColor: captureButtonInnerColor
  		}
  	}

	onPress = () => {
		this.props.onPress()
		this.setState({
			recording: !this.state.recording
		})
	}

	render(){
		return(
			<View
                style={{
                    flex: 1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
	            }}
			>
				<TouchableOpacity
                    onPress={this.onPress}
                >
                    <View style={styles.captureButtonOuter} >
                        <View style={this.captureButtonInnerStyle()} />
                    </View>
	           </TouchableOpacity>
  	         </View>
        )
  }
};

const styles = StyleSheet.create({
  captureButtonOuter: {
    height: 70, 
    width: 70,
    borderWidth: 5,
    borderColor: 'white',
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CaptureButton;