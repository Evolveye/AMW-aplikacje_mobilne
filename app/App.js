import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// import Calculator from "./views/calculator.js"
import Main from "./views/main.js"

export default () => (
  <View style={styles.container}>
    {/* <Text>test</Text> */}
    {/* <Calculator /> */}
    <Main />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: '#1b1a1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
