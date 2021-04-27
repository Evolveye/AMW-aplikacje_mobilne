import React, { useState } from 'react'
import { StyleSheet, Dimensions, View, Text, Modal, Pressable, ToastAndroid } from 'react-native'

const showToast = message => ToastAndroid.showWithGravityAndOffset(
  message,
  ToastAndroid.LONG,
  ToastAndroid.CENTER,
  25,
  50
)

export default () => {
  const [modalVisible, setModalVisible] = useState( false )
  const showModalWithNotification = () => {
    setModalVisible( true )

    new Promise( r => setTimeout( () => r( setModalVisible( false ) ), 1000 * 4 ) )
      .then( () => showToast( `Toast po modalu!` ) )
  }

  return (
    <View style={styles.screen}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalScreen}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Czterosekundowy modal!</Text>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => showModalWithNotification()}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  )
}

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    width: Dimensions.get( `window` ).width,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: `green`,
  },
  textStyle: {
    color: `white`,
    fontWeight: `bold`,
    textAlign: `center`
  },
  modalText: {
    marginBottom: 15,
    textAlign: `center`
  }
})