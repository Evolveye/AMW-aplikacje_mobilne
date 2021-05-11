import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import eyeGif from "../img/eye.gif"

export default () => (
  <View style={styles.wrapper}>
    <Image
      style={styles.eye}
      source={eyeGif}
    />
    <Image
      style={styles.avatar}
      source={{ uri: 'https://avatars.githubusercontent.com/u/28712303?v=4' }}
    />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: `center`,
    alignItems: `center`,
    height: `100%`,
  },

  eye: {
    width: 100,
    height: 100,
  },

  avatar: {
    position: `absolute`,
    left: 5,
    bottom: 5,
    width: 50,
    height: 50,
  }
})