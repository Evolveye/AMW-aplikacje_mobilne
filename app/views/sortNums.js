import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Button } from 'react-native'

const uniqueNums = new Set()

while (uniqueNums.size < 100) uniqueNums.add( Math.floor( Math.random() * 1000 ) )

export default () => {
  const [ sorter, setSorter ] = useState()
  const [ filter, setFilter ] = useState()

  let numsTexts = Array.from( uniqueNums, (num, i) => ({ num, key:i }) )

  if (sorter) numsTexts.sort( sorter )
  if (filter) numsTexts = numsTexts.filter( filter )

  return (
    <View style={styles.screen}>
      <View style={styles.buttons}>
        <View style={styles.sorters}>
          {
            [
              { title:`Sortuj rosnąco`, sorter:(a, b) => a.num - b.num },
              { title:`Sortuj malejąco`, sorter:(a, b) => b.num - a.num },
            ].map( ({ title, sorter }) => (
              <View key={title} style={styles.button}><Button title={title} onPress={() => setSorter( () => sorter )} /></View>
            ) )
          }
        </View>

        <View style={styles.filters}>
          {
            [
              { title:`Wyczyść filtry`, filter:null },
              { title:`Tylko parzyste`, filter:a => a.num % 2 },
              { title:`Parzyste i podzielne przez 3`, filter:a => (a.num % 2) && (a.num % 3 == 0) },
            ].map( ({ title, filter }) => (
              <View key={title} style={styles.button}><Button title={title} onPress={() => setFilter( () => filter )} /></View>
            ) )
          }
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.nums}>
        {numsTexts.map( ({ num, key }) => <Text key={key} style={styles.num}>{num}</Text> )}
      </ScrollView>

      <View style={styles.right}>

      </View>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    flexDirection: `row`,
  },
  buttons: {
    width: 100,
    marginRight: 100,
  },
  sorters: {
    width: 100,
    margin: 20,
  },
  filters: {
    width: 100,
    margin: 20,
  },
  nums: {
    flex: 1,
  },
  button: {
    margin: 5,
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
