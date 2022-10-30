import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import React from 'react'

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        labelStyle={{color: '#609806'}}
        label="Busqueda"
        onPress={() => {
          props.navigation.navigate('SearchScreen')
        }}
      />
      <DrawerItem
        label="Busqueda avanzada"
        onPress={() => {
          props.navigation.navigate('StepperNavigator')
        }}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
