import React, { useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import StepIndicator from "react-native-step-indicator"

export default () => {
  const [data, setData] = useState([1])
  const renderData = ({ item }) => <Text style={styles.item}>{item}</Text>
  const loadMore = () => {
    const newItem = String.fromCharCode( Math.floor( Math.random() * 2000 ) + 100 )

    setTimeout( () => setData( data => [ ...data, newItem ] ), 250 )
  }

  return (
    <View style={styles.screen}>
      <ActivityIndicator color="green" size="large" />
      <br /><br />
      <StepIndicator
        customStyles={customStyles}
        labels={[`a`,`b`,`c`,`d`,`e`,`f`]}
        stepCount={2}
        currentPosition={1}
        direction={`horizontal`}
      />
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    width: 500,
  },
})
const customStyles = {
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}