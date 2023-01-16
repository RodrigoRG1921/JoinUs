import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {RootStackParamList} from './constants'

import SplashScreen from '../screens/SplashScreen'
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen'
import StepperScreen from '../screens/StepperScreen'
import SearchScreen from '../screens/SearchScreen'
import CustomDrawer from '../containers/Drawer/CustomDrawer'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

const StepperNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="StepperScreen" component={StepperScreen} />
    <Stack.Screen
      name="RestaurantDetailScreen"
      component={RestaurantDetailScreen}
    />
  </Stack.Navigator>
)

const SearchNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    <Stack.Screen
      name="RestaurantDetailScreen"
      component={RestaurantDetailScreen}
    />
  </Stack.Navigator>
)

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="SearchNavigator"
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name="SearchNavigator" component={SearchNavigator} />
    <Drawer.Screen name="StepperNavigator" component={StepperNavigator} />
  </Drawer.Navigator>
)

const Navigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default Navigator
