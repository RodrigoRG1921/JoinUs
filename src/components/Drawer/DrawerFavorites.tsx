import {DrawerItem} from '@react-navigation/drawer'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {IRestaurant} from '../../constants'
import restaurantsJSON from '../../data/restaurants.json'
import {styles} from './DrawerFavorites.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
    props.navigation.navigate('RestaurantDetailScreenDrawer', {...restaurant})
  }
  return (
    <View style={styles.root}>
      <View style={styles.titleBox}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="west" size={25} color="black" />
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
