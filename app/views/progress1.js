import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import StepIndicator from "react-native-step-indicator"

import { Br } from "../utils/globalMarkups.js"

export default () => (
  <>
    <ActivityIndicator color="green" size="large" />
    <Br /><Br />
    <StepIndicator
      customStyles={stepIndicatorStyles}
      labels={[`a`,`b`,`c`,`d`,`e`,`f`]}
      stepCount={2}
      currentPosition={1}
      direction={`horizontal`}
    />
  </>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({})
const stepIndicatorStyles = {
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
