import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import Nav from "../containers/nav.js"

export default ({ navigation, children:Children, ...props }) => (
  <View style={styles.container}>
    <View style={styles.screen}>
      <Children {...{ navigation, ...props }}/>
    </View>

    <Nav navigation={navigation} style={styles.nav} />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flexGrow: 1,
  },
  nav: {
    height: 50,
  },
})
