import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import InfiniteScroll from "react-native-infinite-scrolling"

export default () => {
  const [data, setData] = useState([])
  const renderData = ({ item }) => (
    <View style={styles.itemWrapper}>
      <Text style={styles.item}>{item}</Text>
    </View>
  )
  useEffect( () => {
    const newItem = String.fromCharCode( Math.floor( Math.random() * 2000 ) + 100 )
    const timeoutId = setTimeout( () => setData( data => [ ...data, newItem ] ), 250 )

    return () => clearTimeout( timeoutId )
  } )

  return (
    <View style={styles.screen}>
      <InfiniteScroll
        data={data}
        renderData={renderData}
      />
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {},
  buttons: {
    flexDirection: `row`,
  },
  button: {
    margin: 5,
  },
  itemWrapper: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
    width: Dimensions.get( `window` ).width,
  },
  item: {
    fontFamily: `monospace`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    fontSize: 17,
    color:`white`,
    width: 40,
    height: 40,
    padding: 15,
    margin: 10,
    backgroundColor: `#fff1`
  }
})
