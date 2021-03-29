import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Calculator from "./views/calculator.js"

export default () => (
  <View style={styles.container}>
    <Calculator />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
