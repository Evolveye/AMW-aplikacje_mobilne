import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import InfiniteScroll from "react-native-infinite-scrolling"

export default () => {
  const [data, setData] = useState([1])
  const renderData = ({ item }) => <Text style={styles.item}>{item}</Text>
  const loadMore = () => {
    const newItem = String.fromCharCode( Math.floor( Math.random() * 2000 ) + 100 )

    setTimeout( () => setData( data => [ ...data, newItem ] ), 250 )
  }

  return (
    <View style={styles.screen}>
      <InfiniteScroll
        data={data}
        renderData={renderData}
        loadMore={loadMore}
      />
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
  buttons: {
    flexDirection: `row`,
  },
  button: {
    margin: 5,
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
