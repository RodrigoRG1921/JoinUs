import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {TextInput, IconButton, Surface} from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SearchComponent = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        variant="outlined"
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
      <TouchableOpacity>
        <Surface style={styles.iconContainer} elevation={4}>
          <Icon name="filter-alt" size={50} color="black" />
        </Surface>
      </TouchableOpacity>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
  iconContainer: {width: 55, height: 55, margin: 10, alignItems: 'center'},
  text: {margin: 10, width: '75%'},
})
