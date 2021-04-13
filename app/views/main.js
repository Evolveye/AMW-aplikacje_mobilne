import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default () => (
  <View style={styles.screen}>
    <Text style={styles.mainText}>Evolveye's primitive app</Text>
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
    fontSize: 50,
    color:`#446`
  },
})
