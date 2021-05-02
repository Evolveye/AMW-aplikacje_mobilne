import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import { Br } from "../utils/globalMarkups.js"

export default () => (
  <View style={styles.wrapper}>
    <TextInput style={styles.input} autoCorrect autoCapitalize="characters" autoCompleteType="username" maxLength={10} />
    <Br />
    <TextInput style={styles.input} clearTextOnFocus caretHidden autoFocus clearButtonMode="always" />
    <Br />
    <TextInput style={styles.input} defaultValue="ab34%^" editable={false}/>
    <Br />
    {/* Sadly, multiline doesn't work on Android ;/ */}
    {/* <TextInput style={styles.textarea} multiline placeholder="multiline" placeholderTextColor="red" textAlign="center" /> */}
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  wrapper: {
    alignItems: `center`,
    justifyContent: `center`,
  },

  input: {
    minWidth: 100,
    backgroundColor: `#fff`,
  },

  textarea: {
    backgroundColor: `#fff`,
    height: `3em`,
  },
})
