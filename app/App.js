import "react-native-gesture-handler"
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import Nav from "./containers/nav.js"

import Calculator from "./views/calculator.js"
import Info from "./views/info.js"
import SortNums from "./views/sortNums.js"
import LazyLoading from "./views/lazyLoading"
import Progress1 from "./views/progress1.js"
import Progress2 from "./views/progress2.js"
import Progress3 from "./views/progress3.js"
import Main from "./views/main.js"

const Stack = createStackNavigator()
const createScreen = Component => ({ navigation, ...props }) => (
  <View style={styles.container}>
    <View style={styles.screen}>
      <Component {...{ navigation, ...props }}/>
    </View>

    {/* <Nav navigation={navigation} style={styles.nav} buttonStyle={styles.navButton}/> */}
  </View>
)


export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={createScreen( Main )} />
      <Stack.Screen name="Calculator" component={createScreen( Calculator )} />
      <Stack.Screen name="Info" component={createScreen( Info )} />
      <Stack.Screen name="Sort and filter" component={createScreen( SortNums )} />
      <Stack.Screen name="Lazy loading" component={createScreen( LazyLoading )} />
      <Stack.Screen name="Progress 1" component={createScreen( Progress1 )} />
      <Stack.Screen name="Progress 2" component={createScreen( Progress2 )} />
      <Stack.Screen name="Progress 3" component={createScreen( Progress3 )} />
    </Stack.Navigator>
  </NavigationContainer>
)


/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: `wrap`,
    backgroundColor: '#1b1a1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flexGrow: 1,
  },
  navButton: {
    margin: 10,
    width: 200,
  }
})