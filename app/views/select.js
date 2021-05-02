import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Select from "react-native-picker-select"
import { Br } from '../utils/globalMarkups'


export default () => {
  const [firstSelectValue, setFirstSelectValue] = useState( `` )
  const [secondarySelectData, setSecondarySelectData] = useState( null )
  const [secondarySelectValue, setSecondarySelectValue] = useState( null )

  useEffect( () => {
    if (firstSelectValue) fetch( `https://jsonplaceholder.typicode.com/${firstSelectValue}` )
      .then( res => res.json() )
      .then( arr => arr.map( item => {
        console.log( item )
        switch (firstSelectValue) {
          case `users`: return item.name
          case `todos`: return item.title
          case `posts`: return item.title
          default: return item.toString()
        }
      } ) )
      .then( setSecondarySelectData )
  }, [ firstSelectValue ])

  console.log({secondarySelectData})

  return (
    <>
      <Select
        style={styles.select}
        onValueChange={prop => setFirstSelectValue( prop )}
        items={[
          { label:`Users`, value:`users` },
          { label:`Todos`, value:`todos` },
          { label:`Posts`, value:`posts` },
        ]}
      />

      <Br />

      {
        !secondarySelectData ? null : <Select
          style={styles.select}
          onValueChange={value => setSecondarySelectValue( value )}
          items={secondarySelectData.slice( 0, 10 ).map( s => ({ label:s, value:s }) )}
        />
      }

      <Br />

      <Text style={styles.text}>{secondarySelectValue}</Text>
    </>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  select: {
    color: `white`,
  },
  text: {
    color: `white`,
  }
})