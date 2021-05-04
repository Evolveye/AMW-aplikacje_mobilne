import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import { WebView } from "react-native-webview"

import { B, Br } from '../utils/globalMarkups'

export default () => {
  const [ webViewVisibility, setWebViewVisibility ] = useState( false )

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setWebViewVisibility( true )}
        children={
          <>
            <Text style={styles.text}>This is <B>TouchableOpacity</B> component.</Text>
            <Text style={styles.text}>Press to <B>show</B> WebView</Text>
          </>
        }
      />

      <TouchableHighlight
        style={styles.button}
        onPress={() => setWebViewVisibility( false )}
        underlayColor="#fe7013"
        children={
          <>
            <Text style={styles.text}>This is <B>TouchableHighlight</B> component.</Text>
            <Text style={styles.text}>Press to <B>hide</B> WebView</Text>
          </>
        }
      />

      { webViewVisibility && (
        <View style={styles.webView}>
          <WebView
            originWhitelist={['*']}
            source={{uri: `https://www.youtube.com/embed/CSKuwOAHabw`}}
          />
        </View>
      )}
    </>
  )
}



const styles = StyleSheet.create({
  webView: {
    aspectRatio: 16 / 9,
  },

  button: {
    alignItems: "center",
    padding: 10,
    margin: 20,
    backgroundColor: "#333",
  },

  text: {
    color: `#fff`,
  },
})