import React from 'react'
import {Image, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useCallback} from 'react'
import {styles} from './Header.styles'

const Header = ({navigation}: any) => {
  const openDrawer = useCallback(() => navigation.openDrawer(), [])
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="menu" size={25} color="black" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: 'https://drive.google.com/uc?id=1q5UQRx8lxn3ISlUzoZas1wDboBguUc9y',
        }}
      />
    </View>
  )
}

export default Header
