import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native'
import StepIndicator from "react-native-step-indicator"

const Br = () => <Text>{`\n`}</Text>

export default () => (
  <View style={styles.screen}>
    <ActivityIndicator color="#fe7013" size="large" />
    <Br /><Br />
    <StepIndicator
      customStyles={stepIndicatorStyles}
      labels={[ `I`,`don't`, `know`, `what`, `to`, `write`, `here` ]}
      stepCount={7}
      currentPosition={2}
      direction={`horizontal`}
    />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    width: Dimensions.get(`screen`).width,
  },
})
const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}