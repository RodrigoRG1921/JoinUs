import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {Surface} from '@react-native-material/core'

interface Props {
  name: string
  image: string
  schedule: string
  address: string
  rating: number
  cost: number
}

const RestaurantCard = ({
  name,
  image,
  schedule,
  address,
  rating,
  cost,
}: Props) => {
  return (
    <TouchableOpacity>
      <Surface elevation={7} category="medium" style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styles.cardSection}>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.schedule}>{schedule}</Text>
          </View>
          <View style={styles.cardSection}>
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.stars}>{'*'.repeat(rating)}</Text>
            <Text style={styles.cost}>{'$'.repeat(cost)}</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 150,
    alignItems: 'center',
  },
  cardSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  address: {
    color: 'black',
    fontSize: 15,
  },
  stars: {
    color: 'black',
    fontSize: 20,
  },
  cost: {
    color: 'green',
    fontSize: 20,
  },
  image: {width: '80%', height: 90, borderRadius: 20},
  schedule: {
    color: 'black',
  },
})
