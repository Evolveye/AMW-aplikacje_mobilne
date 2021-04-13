import "react-native-gesture-handler"
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import Nav from "./containers/nav.js"

import Calculator from "./views/calculator.js"
import Info from "./views/info.js"
import Main from "./views/main.js"

const Stack = createStackNavigator()
const createScreen = Component => ({ navigation, ...props }) => (
  <View style={styles.container}>
    <View style={styles.screen}>
      <Component {...{ navigation, ...props }}/>
    </View>

    <Nav navigation={navigation} style={styles.nav} />
  </View>
)


export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={createScreen( Main )} />
      <Stack.Screen name="Calculator" component={createScreen( Calculator )} />
      <Stack.Screen name="Info" component={createScreen( Info )} />
    </Stack.Navigator>
  </NavigationContainer>
)


/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1a1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flexGrow: 1,
  },
  nav: {
    height: 100,
  },
})