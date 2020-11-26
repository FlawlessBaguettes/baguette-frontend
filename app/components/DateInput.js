import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import DateTimePickerModal from 'react-native-modal-datetime-picker' 
import Moment from 'moment'

import FormStyle from '../styles/FormStyle'

class DateInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      errorMessage: '',
      isDatePickerVisible: false
    }
  }

  formatDate(date){
    if(date != ''){
      return Moment(date).format('MMM d, YYYY')
    }
    return 'mm/dd/yyyy'
  }

  handleConfirm = (date) =>{
    this.hideDatePicker()
    this.props.handleConfirm(date)
  }

  hideDatePicker = () =>{
    this.setState({ isDatePickerVisible: false })
  }

  showDatePicker = () =>{
    this.setState({ isDatePickerVisible: true })
  }

  render(){
    const { header, value } = this.props
    const { errorMessage, isDatePickerVisible } = this.state

    return(
      <View style={FormStyle.inputContainerSmall}>
        <Text>{header}</Text>

        <TouchableWithoutFeedback onPress={this.showDatePicker} >
          <View style={FormStyle.dateContainer}>
            <MaterialCommunityIcons name="calendar" style={FormStyle.calendarIcon}/>
            <Text style={FormStyle.dateTextField}>{this.formatDate(value)}</Text>
          </View>
        </TouchableWithoutFeedback>

        <DateTimePickerModal
          isDarkModeEnabled={false}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
          value={value}
        />
        <Text style={FormStyle.errorMessage}>{errorMessage}</Text>
      </View>
    )
  }
}

export default DateInput