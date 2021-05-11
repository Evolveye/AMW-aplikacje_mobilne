import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"


const storeData = async (key, value) => {
  const jsonValue = JSON.stringify(value)

  await AsyncStorage.setItem( key, jsonValue )

  return value
}

const getData = async key => {
  const jsonValue = await AsyncStorage.getItem( key )

  return JSON.parse( jsonValue )
}

/** @returns {[ any, (data:any) => void ]} */
export default key => {
  const [ data, setData ] = useState( null )
  const [ mounted, setMounted ] = useState( true )

  const setStoredData = data => storeData( key, data )
    .then( data => mounted && setData( data ) )

  useEffect( () => {
    let mounted = true

    getData( key ).then( data => mounted && setData( data ) )

    return () => {
      mounted = false
      setMounted( false )
    }
  }, [] )

  return [ data, setStoredData ]
}