import React, { createRef, useEffect } from 'react'
import { View, Text, Button, TextInput } from "react-native"

const BUTTON_SIZE = 40

export default () => {
  // const ref = createRef()

  // useEffect( () => setButtonsFunctionality( ref.current ) )

  return (
    <View style={styles.buttons}>
      <Text>test</Text>
      {/* <TextInput style={styles.result} disabled name="results" value="0"/>
      <TextInput style={styles.action} disabled name="action" value="+"/>
      <TextInput style={styles.input} disabled name="input"/>

      <View style={styles.numbers}>
        {
          Array.from( { length:3 }, (_,i) => Array.from( { length:3 }, (_,j) => i * 3 + j + 1 ) )
            .reverse()
            .flat()
            .map( num => ({ title:num }) )
            .map( createButton )
        }
      </View>

      <View style={styles.actions}>
        {[
          { style:styles.back,      title:`<-`, value:`<` },
          { style:styles.plus,      title:`+` },
          { style:styles.minus,     title:`-` },
          { style:styles.multiple,  title:`*` },
          { style:styles.divide,    title:`/` },
        ].map( createButton )}
      </View>

      {[
        { style:styles.zero,    title:`0` },
        { style:styles.zero,    title:`,`,  value:`.` },
        { style:styles.zero,    title:`=` },
      ].map( createButton )} */}
    </View>
  )
}

// const createButton = props => <Button key={props.title} {...props} value={props.value ?? props.title} />

// const setButtonsFunctionality = view => {
//   const action = view.querySelector( `input[name="action"]` )
//   const input = view.querySelector( `input[name="input"]` )
//   const results = view.querySelector( `input[name="results"]` )
//   const buttons = Array.from( view.querySelectorAll( `button` ) )

//   let result = ``

//   const calc = (value=result) => {
//     console.log( `${results.value || 0} ${action.value} ${value || 0}` )
//     results.value = eval( `${results.value || 0} ${action.value} ${value || 0}` )
//     result = ``
//   }

//   buttons.forEach( button => button.addEventListener( `click`, ({ target }) => {
//     const { value } = target

//     result = input.value

//     switch (value) {
//       case `.`: if (!/\./.test( result )) result += value; break
//       case `<`: result = result.slice( 0, -1 ); break

//       case `+`: calc(); action.value = `+`; break
//       case `-`: calc(); action.value = `-`; break
//       case `*`: calc(); action.value = `*`; break
//       case `/`: calc(); action.value = `/`; break

//       case `=`: calc(); break

//       default: result += value; break
//     }

//     input.value = /^0\d/.test( result ) ? result.slice( 1 ) : result
//   } ) )
// }

/** @type {Object<string,React.CSSProperties>} */
const styles = {
  buttons: {
    display: `grid`,
    gridTemplate: `
      "results  results results results"  ${BUTTON_SIZE}px
      "action   input   input   actions"  ${BUTTON_SIZE}px
      "nums     nums    nums    actions"  ${BUTTON_SIZE}px
      "nums     nums    nums    actions"  ${BUTTON_SIZE}px
      "nums     nums    nums    actions"  ${BUTTON_SIZE}px
      "zero     zero    coma    actions"  ${BUTTON_SIZE}px
      "equal    equal   equal   equal"    ${BUTTON_SIZE}px /
      ${BUTTON_SIZE}px ${BUTTON_SIZE}px ${BUTTON_SIZE}px  ${BUTTON_SIZE}px
    `
  },

  result: {
    gridArea: `results`,
    textAlign: `right`,
  },

  action: {
    griadArea: `action`,
    textAlign: `center`,
  },

  input: {
    gridArea: `input`,
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

  zero: { gridArea:`zero` },
  coma: { gridArea:`coma` },
  plus: { gridArea:`plus` },
  minus: { gridArea:`minus` },
  multiple: { gridArea:`multiple` },
  divide: { gridArea:`divide` },
  equal: { gridArea:`equal` },

  actions: {
    gridArea: `actions`,
    display: `grid`,
    gridTemplate: `
      "back"      ${BUTTON_SIZE}px
      "plus"      ${BUTTON_SIZE}px
      "minus"     ${BUTTON_SIZE}px
      "multiple"  ${BUTTON_SIZE}px
      "divide"    ${BUTTON_SIZE}px /
      ${BUTTON_SIZE}px
    `
  },
}
