import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {TextInput, IconButton, Surface} from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
  onFilterPress: () => void
  onChangeText: (text: string) => void
  onSubmitText: () => void
  currentText: string
  onPressIn: () => void
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
        leadingContainerStyle={{ borderColor: 'black' }}
        inputContainerStyle={{ borderColor: 'black',  }}
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={onSubmitText}
        onPressIn={onPressIn}
        variant="outlined"
        value={currentText}
        label="Search"
        style={styles.text}
        trailing={props => (
          <IconButton
            icon={props => (
              <Icon name="search" style={{fontSize: 30}} {...props} />
            )}
            {...props}
          />
        )}
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Surface style={styles.iconContainer} elevation={8}>
          <Icon name="filter-alt" size={50} color="black" />
        </Surface>
      </TouchableOpacity>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
  iconContainer: {width: 55, height: 55, marginLeft: 5},
  text: {flex: 1, borderColor: 'black', color: 'black'},
  container: {
    flexDirection: 'row',
  },
})
