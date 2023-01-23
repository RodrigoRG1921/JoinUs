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
import Header from '../components/Header/Header'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

const StepperNavigator = ({navigation}: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="StepperScreen"
      component={StepperScreen}
      options={{
        headerTitle: props => <Header {...props} navigation={navigation} />,
      }}
    />

    <Stack.Screen
      name="RestaurantDetailScreen"
      component={RestaurantDetailScreen}
    />
  </Stack.Navigator>
)

const SearchNavigator = ({navigation}: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        headerTitle: props => <Header {...props} navigation={navigation} />,
      }}
    />
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
