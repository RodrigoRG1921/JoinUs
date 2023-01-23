import React from 'react'
import { GestureResponderEvent } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface IProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const SelectedStarStyled = ({ onPress }: IProps) => <Icon onPress={onPress} name='star' color='#ffe234' size={25} />

const StarStyled = ({ onPress }: IProps) => <Icon onPress={onPress} name='star' color='white' size={25} />

export {
  SelectedStarStyled,
  StarStyled
}
