import React, {useCallback} from 'react'
import {Image, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HeaderBackButton } from '@react-navigation/elements'
import { TextInput } from 'react-native'

import SearchComponent from '../SearchComponent'

import { useAppContext as useGeneralContext } from '../../context/store/general'
import { Types } from '../../context/reducer/general'

const HeaderSearch = ({ navigation, ...props }: any) => {
  const openDrawer = useCallback(() => navigation.openDrawer(), [])
  const { state, dispatch } = useGeneralContext()

  const handleOnChangeText = useCallback((inputText: string) => {
    dispatch({
      type: Types.SET_INPUT_TEXT,
      payload: {
        inputText
      },
    })
  }, [])

  if (props.canGoBack) {
    return (
      <HeaderBackButton {...props} onPress={() => props.navigation.goBack()} />
    )
  }

  return (
    <View style={{
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#000000',
      padding: 0,
      margin: 0,
      paddingRight: 40,
    }}>
      {props.canGoBack ? (
        <HeaderBackButton {...props} onPress={() => props.navigation.goBack()} />
      ): (
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="menu" size={25} color="white" />
        </TouchableOpacity>
      )}
      <View style={{ height: 40, flexGrow: 1, marginHorizontal: 12 }}>
        <TextInput
          style={{
            height: 30, borderColor: 'white', borderWidth: 1, color: 'white',
            flexGrow: 1,
            borderRadius: 5,
          }}
          onChangeText={handleOnChangeText}
          value={state.inputText}
        />
      </View>
      <Image
        style={{ alignContent: 'center', width: 50, height: 40, }}
        source={require('../../assets/images/white_logo.png')}
      />
    </View>
  )
}

export default HeaderSearch
