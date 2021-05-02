import React from 'react'
import { StyleSheet, Dimensions, View, Text, TextInput } from 'react-native'

import { Br } from "../utils/globalMarkups.js"

export default () => (
  <View style={styles.screen}>
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
  screen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
    width: Dimensions.get( `window` ).width,
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
