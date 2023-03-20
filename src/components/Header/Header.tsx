import React, {useCallback} from 'react'
import {Image, View, TouchableOpacity, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {styles} from './Header.styles'
import type {StatusBarStyle} from 'react-native'

const Header = ({navigation}: any) => {
  const openDrawer = useCallback(() => navigation.openDrawer(), [])
  return (
    <View style={styles.view}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        hidden={false}
      />
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" size={25} color="white" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../assets/images/white_logo.png')}
      />
    </View>
  )
}

export default Header
