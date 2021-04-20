import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Button } from 'react-native'

const uniqueNums = new Set()

while (uniqueNums.size < 100) uniqueNums.add( Math.floor( Math.random() * 1000 ) )

export default () => {
  const [ sorter, setSorter ] = useState()

  let numsTexts = Array.from( uniqueNums, (num, i) => ({ num, key:i }) )

  if (sorter) numsTexts.sort( sorter )

  return (
    <View>
      <View>
        <View><Button title="Sortuj rosnąco" onPress={() => setSorter( () => (a, b) => a.num - b.num )} /></View>
        <View><Button title="Sortuj malejąco" onPress={() => setSorter( () => (a, b) => b.num - a.num )} /></View>
      </View>

      <ScrollView contentContainerStyle={styles.screen}>
        {numsTexts.map( ({ num, key }) => <Text key={key} style={styles.num}>{num}</Text> )}
      </ScrollView>

      <View>

      </View>
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
  num: {
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
  },
})
