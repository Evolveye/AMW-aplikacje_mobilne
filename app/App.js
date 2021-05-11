import "react-native-gesture-handler"
import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
// import Nav from "./containers/nav.js"

import Calculator from "./views/calculator.js"
import Info from "./views/info.js"
import SortNums from "./views/sortNums.js"
import LazyLoading from "./views/lazyLoading"
import Progress1 from "./views/progress1.js"
import Progress2 from "./views/progress2.js"
import Progress3 from "./views/progress3.js"
import TextInput from "./views/textInput.js"
import Switch from "./views/switch.js"
import Datetime from "./views/datetime.js"
import ToastAndroid from "./views/toastAndroid.js"
import Select from "./views/select.js"
import ScrollView from "./views/scrollView.js"
import Touchable from "./views/touchable.js"
import Swipe from "./views/swipe.js"
import Images from "./views/images.js"
import Slider from "./views/slider.js"
import Icons from "./views/icons.js"
import NetInfo from "./views/netinfo.js"
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

const views = [
  { name:`Calculator`,      component:Calculator },
  { name:"Info",            component:Info },
  { name:`Sort and filter`, component:SortNums },
  { name:`Lazy loading`,    component:LazyLoading },
  { name:`Progress 1`,      component:Progress1 },
  { name:`Progress 2`,      component:Progress2 },
  { name:`Progress 3`,      component:Progress3 },
  { name:`TextInput`,       component:TextInput },
  { name:`Switch`,          component:Switch },
  { name:`Datetime`,        component:Datetime },
  { name:`ToastAndroid`,    component:ToastAndroid },
  { name:`Select`,          component:Select },
  { name:`Scroll view`,     component:ScrollView },
  { name:`Touchable`,       component:Touchable },
  { name:`Swipe`,           component:Swipe },
  { name:`Images`,          component:Images },
  { name:`Slider`,          component:Slider },
  { name:`Icons`,           component:Icons },
  { name:`NetInfo`,         component:NetInfo },
]


export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={createScreen( Main )}
        initialParams={{ views:views.map( ({ name }) => name )}}
      />

      {views.map( ({ name, component }) => <Stack.Screen key={name} name={name} component={createScreen( component )} /> )}
    </Stack.Navigator>
  </NavigationContainer>
)


/** @type {Object<string,React.CSSProperties>} */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: `wrap`,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1a1c',
  },
  screen: {
    width: Dimensions.get( `window` ).width,
  },
  navButton: {
    margin: 10,
    width: 200,
  }
})