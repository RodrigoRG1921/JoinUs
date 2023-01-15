import {DrawerItem} from '@react-navigation/drawer'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {IRestaurant} from '../../constants'
import {styles} from './DrawerFavorites.styles'
import restaurantsJSON from '../../data/restaurants.json'

interface Props {
  onPress: () => void
}

const favorites = [
  'Mariscos Tenorio',
  'Asaditos los compitas',
  'Perros Ahogados',
]

const DrawerFavorites = ({onPress, ...props}: any) => {
  const restaurants: IRestaurant[] = restaurantsJSON

  const handleOnRestaurantClick = (restaurantName: string) => {
    const restaurant = restaurants.find(
      restaurant => restaurant.name === restaurantName,
    )
    props.navigation.navigate('RestaurantDetailScreen', {...restaurant})
  }
  return (
    <View>
      <View style={styles.titleBox}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.arrow}>{'<-'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Favoritos</Text>
      </View>
      <View style={styles.drawerSection}>
        {favorites.map(restaurant => (
          <DrawerItem
            labelStyle={styles.labelStyle}
            style={styles.drawerItem}
            label={restaurant}
            onPress={() => handleOnRestaurantClick(restaurant)}
            key={favorites.indexOf(restaurant)}
          />
        ))}
      </View>
    </View>
  )
}

export default DrawerFavorites
