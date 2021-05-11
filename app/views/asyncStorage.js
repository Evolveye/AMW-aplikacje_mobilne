import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { B, Br } from '../utils/globalMarkups.js'
import useStoredData from "../utils/useStoredData.js"

export default () => {
  const [ value, setValue ] = useStoredData( `key` )

  return (
    <View>
      <Button
        title="Press me to change value"
        onPress={() => setValue( Math.floor( Math.random() * 1000 ) )}
      />

      <Br />

      <Text style={styles.text}>
        Stored value: <B>{value}</B>
      </Text>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: `center`,
    alignItems: `center`,
    height: `100%`,
  },

  text: {
    color: `#ffffff`,
  },
})