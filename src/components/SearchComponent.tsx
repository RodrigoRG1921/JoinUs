import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {IconButton, Surface} from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native'

interface Props {
  onFilterPress?: () => void
  onChangeText: (text: string) => void
  onSubmitText?: () => void
  currentText: string
  onPressIn?: () => void
}

const SearchComponent = ({
  onFilterPress,
  onChangeText,
  onSubmitText,
  currentText,
  onPressIn,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 30, borderColor: 'white', borderWidth: 1, color: 'white',
          flexGrow: 1,
          borderRadius: 5,
        }}
        onChangeText={onChangeText}
        value={currentText}
      />
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
  text: { borderColor: 'black', color: 'white', flexGrow: 1, height: 30 },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
})
