import React from 'react'
import { View, Button } from 'react-native'

export default ({ navigation, style, buttonStyle }) => (
  <View style={style}>
    {
      [ `Calculator`, `Info` ].map( label =>
        <View key={label} style={buttonStyle}>
          <Button title={label} onPress={() => navigation.navigate( label )}/>
        </View>
      )
    }
  </View>
)