import React, {useCallback} from 'react'
import {Image, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {styles} from './Header.styles'

const Header = ({navigation}: any) => {
  const openDrawer = useCallback(() => navigation.openDrawer(), [])
  return (
    <View style={styles.view}>
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
