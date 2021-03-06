import React, { useState } from 'react'
import { View, Button, TextInput } from "react-native"

const INITIAL_VALUE = ``
const INITIAL_RESULT = `0`
const INITIAL_ACTION = `+`

export default () => {
  const state = {
    resultState: useState( INITIAL_RESULT ),
    inputState: useState( INITIAL_VALUE ),
    actionState: useState( INITIAL_ACTION ),
  }

  return (
    <View>
      {createButton({
        style: styles.reset,
        color: styles.reset.backgroundColor,
        title: `RESET`,
        variables: state,
      })}

      <TextInput
        style={styles.result}
        editable={false}
        name="results"
        value={state.resultState[ 0 ]}
      />

      <View style={styles.input}>
        <View style={styles.actionParent}>
          <TextInput
            style={styles.action}
            editable={false}
            name="action"
            value={state.actionState[ 0 ]}
          />
        </View>
        <View style={styles.dataParent}>
          <TextInput
            style={styles.data}
            editable={false}
            name="input"
            value={state.inputState[ 0 ]}
          />
        </View>
        {createButton({
          style: styles.back,
          color: styles.operation.backgroundColor,
          title: `<-`,
          value: `<`,
          variables: state,
        })}
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
            ].map( btnData => ({ variables:state, ...btnData }) ).map( createButton )}
          </View>
        </View>

        <View style={styles.operations}>
          {[
            { color:styles.operation.backgroundColor, title:`+` },
            { color:styles.operation.backgroundColor, title:`-` },
            { color:styles.operation.backgroundColor, title:`*` },
            { color:styles.operation.backgroundColor, title:`/` },
          ].map( btnData => ({ variables:state, ...btnData }) ).map( createButton )}
        </View>
      </View>
    </View>
  )
}

const createButton = props => (
  <View key={props.title} style={props.style ?? {}}>
    <Button
      title={`${props.title}`}
      color={props.color}
      onPress={() => onPress( props.value ?? props.title, props.variables )}
    />
  </View>
)

const onPress = (value, { inputState, resultState, actionState }) => {
  const [ action, setAction ] = actionState
  const [ result, setResult ] = resultState
  const [ inputValue, setInputValue ] = inputState

  let tempResult = inputValue

  const calc = () => {
    if (!inputValue) return

    setResult( ``+ eval( `${result} ${action} ${inputValue}` ) )
    tempResult = ``
  }

  switch (value) {
    case `.`: if (!/\./.test( tempResult )) tempResult += value; break
    case `<`: tempResult = tempResult.slice( 0, -1 ); break

    case `+`: calc(); setAction( `+` ); break
    case `-`: calc(); setAction( `-` ); break
    case `*`: calc(); setAction( `*` ); break
    case `/`: calc(); setAction( `/` ); break

    case `=`: calc(); break
    case `RESET`:
      setAction( INITIAL_ACTION )
      setResult( INITIAL_RESULT )
      setInputValue( INITIAL_VALUE )
      tempResult = INITIAL_VALUE
      break;

    default: tempResult += value; break
  }

  tempResult = /^0\d/.test( tempResult ) ? tempResult.slice( 1 ) : tempResult

  setInputValue( `${tempResult}` )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = {
  reset: {
    marginBottom: 20,
    backgroundColor: `#9b2121`,
  },

  result: {
    textAlign: `center`,
    color: `white`
  },

  input: {
    width: `100%`,
    flexDirection: `row`,
  },
      actionParent: { flex:1 },
          action: {
            flex: 1,
            backgroundColor: `#ccc`,
            textAlign: `center`,
          },

      dataParent: { flex:2 },
          data: {
            flex: 1,
            textAlign: `right`,
            backgroundColor: `white`,
            paddingRight: 5,
          },

      back: {
        flex: 1,
        textAlign: `center`,
      },

  nums: { flexDirection:`row` },
      num: {
        flex: 1,
      },

  actions: { flexDirection:`row` },
      numbers: { flex:3 },
      operations: { flex:1 },
      operation: { backgroundColor:`#c66e00` },
}
