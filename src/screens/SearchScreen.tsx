import React from 'react'
import {View} from 'react-native'
import FilterComponent from '../components/FilterComponent'
import SearchComponent from '../components/SearchComponent'

const SearchScreen = () => {
  return (
    <View>
      <SearchComponent />
      <FilterComponent />
    </View>
  )
}

export default SearchScreen
