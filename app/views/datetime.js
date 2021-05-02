import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, Alert } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"

import { Br } from "../utils/globalMarkups.js"

const getDateStr = date => ``
  + `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart( 2, 0 )}.${date.getDate().toString().padStart( 2, 0 )}`
  + ` `
  + `${date.getHours().toString().padStart( 2, 0 )}:${date.getMinutes().toString().padStart( 2, 0 )}`

export default () => {
  const [ date, setDate ] = useState( new Date() )
  const [ mode, setMode ] = useState( 'date' )
  const [ show, setShow ] = useState( false )

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date

    setShow( Platform.OS === 'ios' )
    setDate( currentDate )

    Alert.alert( `Datetime`, getDateStr( currentDate ) )
  }

  const showMode = (currentMode) => {
    setShow( true )
    setMode( currentMode )
  }

  const showDatepicker = () => showMode( `date` )
  const showTimepicker = () => showMode( `time` )

  return (
    <>
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

      <Text style={styles.text}>{getDateStr( date )}</Text>
    </>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  text: {
    color: `white`,
  }
})
