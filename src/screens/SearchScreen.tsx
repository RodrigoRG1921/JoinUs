import React, {useState, useCallback} from 'react'
import FilterComponent from '../components/Filter/FilterComponent'
import SearchComponent from '../components/SearchComponent'
import restaurantsJSON from '../data/restaurants.json'
import ViewContainer from '../components/ViewContainer'
import ResultsView from '../containers/ResultsView'
import {View, Text} from 'react-native'

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

const SearchScreen = (props: any) => {
  const [filter, setFilter] = useState(false)
  const restaurants: Restaurant[] = restaurantsJSON
  const [currentRestaurants, setCurrentRestaurants] = useState(restaurants)
  const [currentFilters, setCurrentFilters] = useState<string[]>([])
  const [currentText, setCurrentText] = useState('')

  const onChangeText = useCallback(
    (text: string) => {
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
    },
    [currentRestaurants],
  )
  const onCheckboxPress = useCallback(
    (isChecked: boolean, filter: string) => {
      if (isChecked) {
        setCurrentFilters(prevFilters => [...prevFilters, filter])
      } else {
        setCurrentFilters(
          currentFilters.filter(currentFilter => currentFilter !== filter),
        )
      }
    },
    [currentFilters],
  )

  const onFilterPress = useCallback(() => {
    setFilter(!filter)
    if (currentFilters.length > 0) {
      const selectedFilteredRestaurants = restaurantsJSON.filter(restaurant =>
        currentFilters.every(filter =>
          restaurant.tags.split(', ').includes(filter),
        ),
      )
      const selectedRestaurants = selectedFilteredRestaurants.filter(
        restaurant => {
          const name = restaurant.name.toLowerCase()
          const text = currentText.toLowerCase()
          return name.includes(text)
        },
      )
      setCurrentRestaurants(selectedRestaurants)
      setCurrentFilters([])
    }
  }, [filter, currentFilters])

  const onSubmitText = useCallback(() => {
    const restaurantes = currentRestaurants.filter(restaurant => {
      const name = restaurant.name.toLowerCase()
      const text = currentText.toLowerCase()
      return name.includes(text)
    })
    setCurrentRestaurants(restaurantes)
  }, [currentText])

  const onPressIn = useCallback(() => {
    if (currentRestaurants.length === 0) {
      setCurrentRestaurants(restaurantsJSON)
    }
  }, [currentRestaurants])

  const handleOnRestaurantClick = useCallback((restaurant: any) => {
    props.navigation.navigate('RestaurantDetailScreen', {...restaurant})
  }, [])

  if (!filter && currentRestaurants.length > 0) {
    return (
      <View style={{flex: 1}}>
        <View style={{marginHorizontal: 16, marginVertical: 6}}>
          <SearchComponent
            onFilterPress={onFilterPress}
            onChangeText={onChangeText}
            onSubmitText={onSubmitText}
            currentText={currentText}
            onPressIn={onPressIn}
          />
        </View>
        <ResultsView
          onPress={handleOnRestaurantClick}
          results={currentRestaurants}
        />
      </View>
    )
  } else if (filter) {
    return (
      <FilterComponent
        onCheckboxPress={onCheckboxPress}
        onPress={onFilterPress}
      />
    )
  } else {
    return (
      <ViewContainer>
        <SearchComponent
          onFilterPress={onFilterPress}
          onChangeText={onChangeText}
          onSubmitText={onSubmitText}
          currentText={currentText}
          onPressIn={onPressIn}
        />

        <Text>No restaurants with this characteristics </Text>
      </ViewContainer>
    )
  }
}

export default SearchScreen
