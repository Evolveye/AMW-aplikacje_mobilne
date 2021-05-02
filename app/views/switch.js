import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch, Modal } from 'react-native'

import { Br } from "../utils/globalMarkups.js"

export default () => {
  const [ randomNumber, setRandomNumber ] = useState( null )
  const [ modalVisible, setModalVisible ] = useState( false )
  const [ isEnabled, setIsEnabled ] = useState( false );
  const toggleSwitch = () => {
    const isReallyEnabled = !isEnabled

    setRandomNumber( Math.floor( Math.random() * 1000 ) )
    setIsEnabled( previousState => !previousState );
    setModalVisible( true )

    if (isReallyEnabled) new Promise( r => setTimeout( () => r( setModalVisible( false ) ), 1000 * 1 ) )
  }

  return (
    <View style={styles.screen}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Br />

      { isEnabled && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalScreen}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{randomNumber}</Text>
            </View>
          </View>
        </Modal>
      ) }

      <Text style={styles.text}>{isEnabled ? randomNumber : `X`}</Text>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    alignItems: `center`,
    justifyContent: `center`,
  },

  text: {
    color: `white`,
  },

  modalScreen: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },

  modalView: {
    margin: 20,
    backgroundColor: `white`,
    borderRadius: 20,
    padding: 35,
    alignItems: `center`,
    shadowColor: `#000`,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modalText: {
    marginBottom: 15,
    textAlign: `center`
  }
})
