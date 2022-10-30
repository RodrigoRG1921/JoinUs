import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer'
import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {styles} from './CustomDrawer.styles'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>JOIN US</Text>
      </View>
      <DrawerItem
        style={{borderTopWidth: 1}}
        labelStyle={styles.labelStyle}
        label="Busqueda"
        onPress={() => {
          props.navigation.navigate('SearchScreen')
        }}
        icon={() => <Icon color={'black'} size={24} name="search" />}
      />

      <DrawerItem
        label="Busqueda avanzada"
        labelStyle={styles.labelStyle}
        onPress={() => {
          props.navigation.navigate('StepperNavigator')
        }}
        icon={({size}) => (
          <Icon color={'black'} size={size} name="accessibility" />
        )}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
