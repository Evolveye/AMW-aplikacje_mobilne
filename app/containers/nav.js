import React from 'react'
import { View, Button } from 'react-native'

export default ({ navigation, style }) => (
  <View style={style}>
    <Button title="Kalkulator" onPress={() => navigation.navigate( `Calculator` )}/>
    <Button title="" onPress={() => navigation.navigate( `Calculator` )}/>
  </View>
)