import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import SearchComponent from '../components/SearchComponent'
import restaurantsJSON from '../data/restaurants.json'

interface Restaurant {
  name: string
  address: string
  imageUri: string
  rating: string
  schedule: string
  priceRange: string
  coords: string
  tags: string
  category: string
}

const SearchScreen = () => {
  const restaurants: Restaurant[] = restaurantsJSON
  return (
    <View style={styles.container}>
      <SearchComponent />
      <ScrollView style={styles.scrollView}>
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.coords}
            name={restaurant.name}
            address={restaurant.address}
            cost={restaurant.priceRange}
            rating={Math.round(parseFloat(restaurant.rating))}
            image={restaurant.imageUri}
            schedule={restaurant.schedule}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  scrollView: {flex: 1, width: '100%', alignItems: 'center'},
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
