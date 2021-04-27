import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const Br = () => <Text>{`\n`}</Text>
const Code = props => <Text {...props} style={{ fontFamily:`monospace`, color:`#556` }} />
const B = props => <Text {...props} style={{ fontWeight:`bold`, color:`gold` }} />

export default () => (
  <View style={styles.screen}>
    <TextInput style={styles.input} autoCorrect autoCapitalize="characters" autoCompleteType="username" />
    <Br />
    <TextInput style={styles.input} clearTextOnFocus caretHidden autoFocus clearButtonMode="always" />
    <Br />
    <TextInput style={styles.input} defaultValue="ab34%^" editable={false} maxLength={10} />
    <Br />
    <TextInput style={styles.textarea} multiline placeholder="multiline" placeholderTextColor="red" textAlign="center" />
  </View>
)

/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },

  input: {
    backgroundColor: `#fff`,
  },

  textarea: {
    backgroundColor: `#fff`,
    height: `3em`,
  },
})