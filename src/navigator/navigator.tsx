import React, {useCallback} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { HeaderBackButton } from '@react-navigation/elements'

import {RootStackParamList} from './constants'

import SplashScreen from '../screens/SplashScreen'
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen'
import StepperScreen from '../screens/StepperScreen'
import SearchScreen from '../screens/SearchScreen'
import CustomDrawer from '../containers/Drawer/CustomDrawer'

import {Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HeaderSearchBar from '../components/HeaderSearchBar'

import { AppContextProvider as StateProvider } from '../context/store/index'

import { LogBox } from 'react-native'

LogBox.ignoreLogs(['Warning: ...'])
LogBox.ignoreAllLogs()

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

const StepperNavigator = ({navigation}: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="StepperScreen"
      component={StepperScreen}
      options={{
        headerStyle: { backgroundColor: '#000000' },
        headerRight: () => (
          <Image
            style={{
              alignContent: 'center',
              width: 50,
              height: 40,
            }}
            source={require('../assets/images/white_logo.png')}
          />
        ),
        headerLeft: (props) => {
          if (props.canGoBack) {
            return (
              <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
            )
          }
          // eslint-disable-next-line react/prop-types
          const openDrawer = useCallback(() => navigation.openDrawer(), [])

          return (
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="menu" size={25} color="white" />
            </TouchableOpacity>
          )
        },
        headerTitle: () => <></>
      }}
    />

    <Stack.Screen
      name="RestaurantDetailScreenStepper"
      component={RestaurantDetailScreen}
      options={{
        headerBackTitle: '',
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: 'white',
        headerRight: () => (
          <Image
            style={{
              alignContent: 'center',
              width: 50,
              height: 40,
            }}
            source={require('../assets/images/white_logo.png')}
          />
        ),
        headerTitle: () => <></>,
      }}
    />
  </Stack.Navigator>
)

const SearchNavigator = ({navigation}: any) => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        headerStyle: { backgroundColor: '#000000' },
        headerTitle: (props) => <HeaderSearchBar {...props} navigation={navigation} />,
      }}
    />
    <Stack.Screen
      name="RestaurantDetailScreen"
      component={RestaurantDetailScreen}
      options={{
        headerBackTitle: '',
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: 'white',
        headerRight: () => (
          <Image
            style={{
              alignContent: 'center',
              width: 50,
              height: 40,
            }}
            source={require('../assets/images/white_logo.png')}
          />
        ),
        headerTitle: () => <></>,
      }}
    />
  </Stack.Navigator>
)

const DrawerNavigator = ({navigation}: any) => (
  <Drawer.Navigator
    initialRouteName="StepperNavigator"
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name="StepperNavigator" component={StepperNavigator} />
    <Drawer.Screen name="SearchNavigator" component={SearchNavigator} />
    <Drawer.Screen
      name="RestaurantDetailScreenDrawer"
      component={RestaurantDetailScreen}
      options={{
        headerStyle: { backgroundColor: '#000000' },
        headerTitle: (props) => <HeaderSearchBar {...props} navigation={navigation} />,
      }}/>
  </Drawer.Navigator>
)

const Navigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StateProvider>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </StateProvider>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default Navigator
