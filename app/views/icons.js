import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default () => (
  <View style={styles.wrapper}>
    <View style={styles.icons}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Ionicons name="add" size={32} color="white" />
      <Ionicons name="airplane" size={32} color="cyan" />
      <Ionicons name="game-controller" size={32} color="red" />
    </View>
    <Image
      style={styles.image}
      source={{ uri: `https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg?rand=${Math.random()}` }}
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

  image: {
    width: 300,
    height: 100,
    backgroundColor: `#444444`
  },

  icons: {
    flexDirection: `row`,
  }
})