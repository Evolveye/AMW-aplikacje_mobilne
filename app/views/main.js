import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default ({ navigation, route }) => (
  <>
    <Text style={styles.mainText}>Evolveye's primitive app</Text>

    <View style={styles.buttons}>
      {
        route.params.views.map( label =>
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
