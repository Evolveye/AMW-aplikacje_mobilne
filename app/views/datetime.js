import React, { useState } from 'react'
import { StyleSheet, Dimensions, View, Text, Button } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"

import { Br } from "../utils/globalMarkups.js"

export default () => {
  const [ date, setDate ] = useState( new Date() )
  const [ mode, setMode ] = useState( 'date' )
  const [ show, setShow ] = useState( false )

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date

    setShow( Platform.OS === 'ios' )
    setDate( currentDate )
  }

  const showMode = (currentMode) => {
    setShow( true )
    setMode( currentMode )
  }

  const showDatepicker = () => showMode( `date` )
  const showTimepicker = () => showMode( `time` )

  const datetimeStr = ``
    + `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    + ` `
    + `${date.getHours()}:${date.getMinutes() + 1}:${date.getSeconds()}`

  return (
    <View style={styles.screen}>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>

      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Br />

      <Text style={styles.text}>{datetimeStr}</Text>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
    width: Dimensions.get( `window` ).width,
  },

  text: {
    color: `white`,
  }
})
