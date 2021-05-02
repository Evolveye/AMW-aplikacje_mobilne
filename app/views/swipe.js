import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swipeable from "react-native-gesture-handler/Swipeable"

const Left = () => <View style={styles.left}><Text>Lewo</Text></View>
const Right = () => <View style={styles.right}><Text>Prawo</Text></View>

export default () => (
  <Swipeable
    containerStyle={styles.wrapper}
    childrenContainerStyle={styles.center}
    renderLeftActions={Left}
    renderRightActions={Right}
  >
    <View style={styles.box}><Text style={styles.text}>Center</Text></View>
    <View style={styles.box}><Text style={styles.text}>Center</Text></View>
    <View style={styles.box}><Text style={styles.text}>Center</Text></View>
  </Swipeable>
)

const styles = StyleSheet.create({
  text: {
    color: `#ffffff`,
  },

  wrapper: {
    width: `100%`,
    height: `100%`,
  },

  box: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: `#666666`,
  },

  center: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `#222222`,
  },

  left: {
    width: `90%`,
    backgroundColor:`#bb3333`
  },

  right: {
    width: `90%`,
    backgroundColor:`#33bb33`
  },
})