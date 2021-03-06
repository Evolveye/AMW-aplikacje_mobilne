import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import StepIndicator from "react-native-step-indicator"

import { Br } from "../utils/globalMarkups.js"

export default () => (
  <View style={styles.wrapper}>
    <ActivityIndicator color="#13a1fe" size="small" />
    <Br /><Br />
    <StepIndicator
      customStyles={stepIndicatorStyles}
      labels={[ `I`,`don't`, `know`, `what`, `to`, `write`, `here` ]}
      stepCount={7}
      currentPosition={2}
      direction={`vertical`}
    />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 25,
    height: 500,
  },
})
const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#13a1fe',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#13a1fe',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#13a1fe',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#1b1a1c',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#13a1fe',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#13a1fe'
}