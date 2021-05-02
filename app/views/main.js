import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default ({ navigation }) => (
  <>
    <Text style={styles.mainText}>Evolveye's primitive app</Text>

    <View style={styles.buttons}>
      {
        [
          `Calculator`,
          `Info`,
          `Sort and filter`,
          `Lazy loading`,
          `Progress 1`,
          `Progress 2`,
          `Progress 3`,
          `TextInput`,
          `Switch`,
          `Datetime`,
          `ToastAndroid`,
          `Select`,
          `Scroll view`,
        ].map( label =>
          <View key={label} style={styles.button}>
            <Button style={{ height:`100%` }} title={label} onPress={() => navigation.navigate( label )}/>
          </View>
        )
      }
    </View>
  </>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  buttons: {
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
  },
  button: {
    margin: 5,
  },
  mainText: {
    fontFamily: `monospace`,
    fontSize: 50,
    color:`#446`
  },
})
