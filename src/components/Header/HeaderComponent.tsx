import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Text} from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'

const HeaderComponent = (props: any) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 16,
        paddingTop: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.toggleDrawer()
        }}>
        <Icon color={'black'} size={32} name="menu" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('a')
        }}>
        <Text>Join Us</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent
