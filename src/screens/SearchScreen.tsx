import React from 'react'
import {ScrollView, ScrollViewComponent, View} from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import SearchComponent from '../components/SearchComponent'
import restaurantsJSON from '../data/restaurants.json'

interface Restaurant {
  Nombre: string
  Dirección: string
  Imagen: string
  Calificación: string
  Horario: string
  'Rango Precios': string
  coordenadas?: string
  listaTags?: string
  Categoría: string
}

const SearchScreen = () => {
  const restaurants: Restaurant[] = restaurantsJSON
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
      <SearchComponent />
      <ScrollView style={{flex: 1, width: '100%'}}>
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.coordenadas}
            name={restaurant.Nombre}
            address={restaurant.Dirección}
            cost={restaurant['Rango Precios']}
            rating={Math.round(parseFloat(restaurant.Calificación))}
            image={restaurant.Imagen}
            schedule={restaurant.Horario}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchScreen
