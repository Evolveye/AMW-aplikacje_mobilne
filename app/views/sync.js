import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import NetInfo from "@react-native-community/netinfo"

import { B, Br } from '../utils/globalMarkups.js'
import useStoredData from "../utils/useStoredData.js"

let serviceValue = Math.random()
const getServiceValue = () => serviceValue
setInterval( () => serviceValue = Math.random(), 1500 )

export default () => {
  const [ localValue, setLocalValue ] = useStoredData( `key` )
  const [ serviceValue, setServiceValue ] = useState()
  const [ netState, setNetState ] = useState({})

  useEffect( () => NetInfo.addEventListener( setNetState ), [] )

  useEffect( () => {
    const id = setInterval( () => netState.isConnected && setLocalValue( getServiceValue() ), 1000 )

    return () => clearInterval( id )
  }, [ netState.isConnected ] )

  useEffect( () => {
    const id = setInterval( () => setServiceValue( getServiceValue() ), 500 )

    return () => clearInterval( id )
  }, [] )

  return (
    <View>
      <Text style={styles.text}>
        Service value: <B>{serviceValue}</B><Br />
        (updating by every 1500ms)
      </Text>

      <Text style={styles.text}>
        Local value: <B>{localValue}</B><Br />
        (updating by every 1000ms)
      </Text>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  text: {
    color: `#ffffff`,
    marginBottom: 10,
  },
})