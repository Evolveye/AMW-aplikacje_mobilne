import React, { createRef, useEffect, useState } from 'react'
import { View, Text, Button, TextInput } from "react-native"

const BUTTON_SIZE = 40

export default () => {
  const state = {
    resultState: useState( 0 ),
    inputState: useState( `0` ),
    actionState: useState( `+` ),
  }

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.result}
        editable={false}
        name="results"
        value={state.resultState[ 0 ]}
      />

      <View style={styles.input}>
        <TextInput
          style={styles.action}
          editable={false}
          name="action"
          value={state.actionState[ 0 ]}
        />
        <TextInput
          style={styles.data}
          editable={false}
          name="input"
          value={state.inputState[ 0 ]}
        />
        {createButton({ style:styles.back, title:`<-`, value:`<` })}
      </View>

      <View style={styles.actions}>
        <View style={styles.numbers}>
          {
            Array.from( { length:3 }, (_,i) => Array.from( { length:3 }, (_,j) => i * 3 + j + 1 ) )
              .reverse()
              .map( nums => (
                <View key={nums.join(`,`)} style={styles.nums}>
                  {nums.map( num => createButton({
                    variables: state,
                    title: num,
                    style: styles.num,
                  }) )}
                </View>
              ) )
          }

          <View style={styles.nums}>
            {[
              { style:styles.num, title:`0` },
              { style:styles.num, title:`,`,  value:`.` },
              { style:styles.num, title:`=` },
            ].map( btnData => ({ variables: state, ...btnData }) ).map( createButton )}
          </View>
        </View>

        <View style={styles.operations}>
          {[
            { style:styles.plus,      title:`+` },
            { style:styles.minus,     title:`-` },
            { style:styles.multiple,  title:`*` },
            { style:styles.divide,    title:`/` },
          ].map( btnData => ({ variables: state, ...btnData }) ).map( createButton )}
        </View>
      </View>
    </View>
  )
}

const createButton = props => (
  <View key={props.title} style={props.style ?? {}}>
    <Button
      title={`${props.title}`}
      onPress={() => onPress( props.value ?? props.title, props.variables )}
    />
  </View>
)

const onPress = (value, { inputState, resultState, actionState }) => {
  const [ action, setAction ] = actionState
  const [ result, setResult ] = resultState
  const [ inputValue, setInputValue ] = inputState

  let tempResult = inputValue

  const calc = (value=result) => {
    setResult( eval( `${result} ${action} ${inputValue}` ) )
    tempResult = 0
  }

  switch (value) {
    case `.`: if (!/\./.test( tempResult )) tempResult += value; break
    case `<`: tempResult = tempResult.slice( 0, -1 ); break

    case `+`: calc(); setAction( `+` ); break
    case `-`: calc(); setAction( `-` ); break
    case `*`: calc(); setAction( `*` ); break
    case `/`: calc(); setAction( `/` ); break

    case `=`: calc(); break

    default: tempResult += value; break
  }

  tempResult = /^0\d/.test( tempResult ) ? tempResult.slice( 1 ) : tempResult

  setInputValue( `${tempResult}` )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = {
  result: {
    textAlign: `center`,
  },

  input: {
    width: `100%`,
    flexDirection: `row`,
  },

      action: {
        flex: 1,
        textAlign: `center`,
      },

      data: {
        flex: 2,
        textAlign: `right`,
      },

      back: {
        flex: 1,
        textAlign: `center`,
      },

  nums: {
    flexDirection: `row`,
  },

      num: {
        flex: 1,
      },

  actions: {
    flexDirection: `row`,
  },

      numbers: {
        flex: 3,
      },

      operations: {
        flex: 1,
      },


  // numbers: {
  //   gridArea: `nums`,
  //   display: `grid`,
  //   gridTemplate: `
  //     "7 8 9" ${BUTTON_SIZE}px
  //     "4 5 6" ${BUTTON_SIZE}px
  //     "1 2 3" ${BUTTON_SIZE}px /
  //     ${BUTTON_SIZE}px ${BUTTON_SIZE}px ${BUTTON_SIZE}px
  //   `
  // },


  // actions: {
  //   gridArea: `actions`,
  //   display: `grid`,
  //   gridTemplate: `
  //     "back"      ${BUTTON_SIZE}px
  //     "plus"      ${BUTTON_SIZE}px
  //     "minus"     ${BUTTON_SIZE}px
  //     "multiple"  ${BUTTON_SIZE}px
  //     "divide"    ${BUTTON_SIZE}px /
  //     ${BUTTON_SIZE}px
  //   `
  // },
}
