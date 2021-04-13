import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default () => (
  <View style={styles.screen}>
    <Text style={styles.mainText}>Spread operator</Text>
    <Text style={styles.mainText}>Rest parameters</Text>
    <Text style={styles.mainText}>useState</Text>
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  mainText: {
    fontFamily: `monospace`,
    fontSize: 25,
    color:`#446`
  },
})
