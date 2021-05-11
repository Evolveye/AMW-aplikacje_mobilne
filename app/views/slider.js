import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Slider from "@react-native-community/slider"

import { Br } from '../utils/globalMarkups'

export default () => {
  const [ slideValue, setSlideValue ] = useState( 20 )
  return (
    <View style={styles.wrapper}>
      <Slider
        style={styles.slider}
        minimumValue={20}
        maximumValue={200}
        thumbTintColor="#ffffff"
        minimumTrackTintColor="#ffffff"
        maximumTrackTintColor="#aaaaff"
        onValueChange={setSlideValue}
      />

      <Br />

      <Image
        style={{ width:slideValue, height:slideValue }}
        source={{ uri: 'https://avatars.githubusercontent.com/u/28712303?v=4' }}
      />
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

  slider: {
    width: `50%`,
  }
})