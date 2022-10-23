import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Surface, Text } from '@react-native-material/core'

import { styles } from './RestaurantCard.styles'
import { IRestaurant } from '../../constants/interfaces'

interface IProps extends IRestaurant {
  onPress?: (key: string) => void
}

const RestaurantCard = ({
  name,
  imageUri,
  schedule,
  rating,
  priceRange,
  address,
  onPress
}: IProps) => (
  <TouchableOpacity onPress={() => onPress?.(name)}>
    <Surface elevation={1} style={styles.container}>
      <View>
        <Text variant='h6'>{name}</Text>
      </View>
      <View style={styles.middleContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View>
        <View style={styles.informationContainer}>
          <Text variant='subtitle1' style={styles.textAddress} >{address}</Text>
          <Text style={{ height: 35 }} variant='h3'>{'*'.repeat(Number(rating))}</Text>
          <Text variant='h6'>{priceRange}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text variant='subtitle1'>{schedule}</Text>
      </View>
    </Surface>
  </TouchableOpacity>
)

export default RestaurantCard
