import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'

import { Br } from "../utils/globalMarkups.js"

export default () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.screen}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Br />
      <Text style={styles.text}>{isEnabled ? Math.floor( Math.random() * 1000 ) : `X`}</Text>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },

  text: {
    color: `white`,
  }
})
