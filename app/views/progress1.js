import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native'
import StepIndicator from "react-native-step-indicator"

import { Br } from "../utils/globalMarkups.js"

export default () => (
  <View style={styles.screen}>
    <ActivityIndicator color="green" size="large" />
    <Br /><Br />
    <StepIndicator
      customStyles={stepIndicatorStyles}
      labels={[`a`,`b`,`c`,`d`,`e`,`f`]}
      stepCount={2}
      currentPosition={1}
      direction={`horizontal`}
    />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    width: Dimensions.get( `window` ).width,
  },
})
const stepIndicatorStyles = {
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
