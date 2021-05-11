import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NetInfo from "@react-native-community/netinfo"
import { B, Ok, Bad } from '../utils/globalMarkups'


export default () => {
  const [ state, setState ]= useState({})

  useEffect( () => NetInfo.addEventListener( state => setState( state ) ), [] )

  return (
    <View>
      <Text style={styles.text}>
        Connected: {state.isConnected ? <Ok>true</Ok> : <Bad>false</Bad>}
      </Text>

      <Text style={styles.text}>
        Connection type: <B>{state.type}</B>
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