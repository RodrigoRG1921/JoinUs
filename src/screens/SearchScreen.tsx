import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import FilterComponent from '../components/FilterComponent'
import RestaurantCard from '../components/RestaurantCard'
import SearchComponent from '../components/SearchComponent'
import restaurantsJSON from '../data/restaurants.json'
import ScrollViewContainer from '../components/ScrollViewContainer'

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
  const [filter, setFilter] = useState(false)
  const restaurants: Restaurant[] = restaurantsJSON
  const [currentRestaurants, setCurrentRestaurants] = useState(restaurants)

  const onChangeText = (text: string) => {
    if (text === '') {
      setCurrentRestaurants(restaurantsJSON)
    } else {
      const restaurantes = currentRestaurants.filter(restaurant => {
        const name = restaurant.name.toLowerCase()
        text = text.toLowerCase()
        return name.includes(text)
      })
      setCurrentRestaurants(restaurantes)
    }
  }
  return (
    <View style={styles.container}>
      <SearchComponent
        onFilterPress={() => setFilter(!filter)}
        onChangeText={onChangeText}
      />
      {!filter ? (
        <ScrollViewContainer>
          <View style={styles.cardContainer}>
            {currentRestaurants.map(restaurant => (
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
          </View>
        </ScrollViewContainer>
      ) : (
        <FilterComponent />
      )}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  scrollView: {flex: 1, width: '100%'},
  container: {
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
  },
})
