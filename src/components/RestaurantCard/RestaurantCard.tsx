import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Surface, Text } from '@react-native-material/core'

import { styles } from './RestaurantCard.styles'
import { IRestaurant } from '../../constants/interfaces'

interface IProps extends IRestaurant {
  onPress?: (key: IRestaurant) => void
}

const RestaurantCard = (props: IProps) => {
  const {
    name,
    imageUri,
    schedule,
    rating,
    priceRange,
    address,
    onPress
  } = props

  return (
    <TouchableOpacity onPress={() => onPress?.(props)}>
      <Surface elevation={1} style={styles.container}>
        <View style={{ backgroundColor: '#b71c1c', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 12, }}>
          <Text style={{ color: 'white' }} variant='h6'>{name}</Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
        
      </Surface>
    </TouchableOpacity>
  )
}

export default RestaurantCard

/**
 <View style={{ padding: 12 }}>
          <View style={styles.informationContainer}>
            <Text variant='subtitle1' style={styles.textAddress} >{address}</Text>
            <Text style={{ height: 35 }} variant='h3'>{'*'.repeat(Number(rating))}</Text>
            <Text variant='h6'>{priceRange}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text variant='subtitle1'>{schedule}</Text>
        </View>
 */