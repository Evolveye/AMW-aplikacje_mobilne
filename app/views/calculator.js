import React, { createRef, useEffect } from 'react'
import { View, Text } from "react-native"

const BUTTON_SIZE = 40

export default () => {
  const ref = createRef()

  useEffect( () => setButtonsFunctionality( ref.current ) )

  return (
    <View style={styles.buttons} ref={ref}>
      <input style={styles.result} disabled name="results"/>

      <View style={styles.numbers}>
        {
          Array.from( { length:3 }, (_,i) => Array.from( { length:3 }, (_,j) => i * 3 + j + 1 ) )
            .reverse()
            .flat()
            .map( num => <button key={num} value={num}>{num}</button> )
        }
      </View>

      <button style={styles.zero} value={0}>0</button>
      <button style={styles.coma} value={`.`}>,</button>
    </View>
  )
}

const setButtonsFunctionality = view => {
  const results = view.querySelector( `input[name="results"]` )
  const buttons = Array.from( view.querySelectorAll( `button` ) )

  buttons.forEach( button => button.addEventListener( `click`, ({ target }) => {
    const { value } = target

    results.value = results.value + value
  } ) )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = {
  buttons: {
    display: `grid`,
    gridTemplate: `
      "results  results results" ${BUTTON_SIZE}px
      "nums     nums    nums" ${BUTTON_SIZE}px
      "nums     nums    nums" ${BUTTON_SIZE}px
      "nums     nums    nums" ${BUTTON_SIZE}px
      "zero     zero    coma" ${BUTTON_SIZE}px /
      ${BUTTON_SIZE}px ${BUTTON_SIZE}px ${BUTTON_SIZE}px
    `
  },

  result: {
    gridArea: `results`,
    textAlign: `right`,
  },

  numbers: {
    gridArea: `nums`,
    display: `grid`,
    gridTemplate: `
      "7 8 9" ${BUTTON_SIZE}px
      "4 5 6" ${BUTTON_SIZE}px
      "1 2 3" ${BUTTON_SIZE}px /
      ${BUTTON_SIZE}px ${BUTTON_SIZE}px ${BUTTON_SIZE}px
    `
  },

  zero: {
    gridArea: `zero`,
  },
}
