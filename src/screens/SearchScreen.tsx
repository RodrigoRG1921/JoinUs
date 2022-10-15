import React from 'react'
import {Text, View} from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import SearchComponent from '../components/SearchComponent'

const SearchScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
      <SearchComponent />
      <RestaurantCard
        name="Mariscos Tenorio"
        address="Av Pinar de la calma 777"
        cost={3}
        rating={4}
        image=""
        schedule="1:00 - 2:00"
      />
      <RestaurantCard
        name="Mariscos Tenorio"
        address="Av Pinar de la calma 777"
        cost={3}
        rating={4}
        image=""
        schedule="1:00 - 2:00"
      />
    </View>
  )
}

export default SearchScreen
