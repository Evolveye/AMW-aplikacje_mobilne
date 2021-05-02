import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

export default () => (
  <ScrollView contentContainerStyle={styles.wrapper}>
    {Array.from( { length:10 }, (_, i) => <View key={i} style={styles.tile} /> )}
  </ScrollView>
)

const styles = StyleSheet.create({
  wrapper: {
    display: `flex`,
    width: `100%`,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: `#3391ff`
  }
})