import React, {useState} from 'react'
import {FlatList, Text} from 'react-native'
import FilterComponent from '../components/FilterComponent'
import RestaurantCard from '../components/RestaurantCard'
import SearchComponent from '../components/SearchComponent'
import restaurantsJSON from '../data/restaurants.json'
import ViewContainer from '../components/ViewContainer'

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
  const [currentFilters, setCurrentFilters] = useState<string[]>([])
  const [currentText, setCurrentText] = useState('')

  const onChangeText = (text: string) => {
    setCurrentText(text)
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
  const onCheckboxPress = (isChecked: boolean, filter: string) => {
    if (isChecked) {
      setCurrentFilters(prevFilters => [...prevFilters, filter])
    } else {
      setCurrentFilters(
        currentFilters.filter(currentFilter => currentFilter !== filter),
      )
    }
  }

  const onFilterPress = () => {
    setFilter(!filter)
    if (currentFilters.length > 0) {
      const selectedRestaurants = currentRestaurants.filter(restaurant => {
        return currentFilters.every(filter => {
          return restaurant.tags.split(', ').includes(filter)
        })
      })
      setCurrentRestaurants(selectedRestaurants)
      setCurrentFilters([])
    } else {
      setCurrentRestaurants(restaurantsJSON)
    }
  }

  const onSubmitText = () => {
    setCurrentText('')
  }

  const onPressIn = () => {
    console.log('etoo', currentRestaurants.length)
    if (currentRestaurants.length === 0) {
      setCurrentRestaurants(restaurantsJSON)
    }
  }
  return (
    <ViewContainer>
      <SearchComponent
        onFilterPress={onFilterPress}
        onChangeText={onChangeText}
        onSubmitText={onSubmitText}
        currentText={currentText}
        onPressIn={onPressIn}
      />
      {!filter && currentRestaurants.length > 0 ? (
        <FlatList
          keyExtractor={item => item.coords}
          numColumns={1}
          data={currentRestaurants}
          renderItem={({item}) => (
            <RestaurantCard
              name={item.name}
              address={item.address}
              cost={item.priceRange}
              rating={Math.round(parseFloat(item.rating))}
              image={item.imageUri}
              schedule={item.schedule}
            />
          )}
        />
      ) : filter ? (
        <FilterComponent onCheckboxPress={onCheckboxPress} />
      ) : (
        <Text>No restaurants with this characteristics </Text>
      )}
    </ViewContainer>
  )
}

export default SearchScreen
