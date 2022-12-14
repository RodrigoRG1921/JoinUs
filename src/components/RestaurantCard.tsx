import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {Surface} from '@react-native-material/core'

interface Props {
  name: string
  image: string
  schedule: string
  address: string
  rating: number
  cost: string
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
    <TouchableOpacity style={styles.button}>
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
            <Text style={styles.cost}>{cost}</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
  },
  card: {
    width: '100%',
    alignItems: 'center',
    padding: 5,
  },
  cardSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  address: {
    color: 'black',
    fontSize: 16,
  },
  stars: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cost: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {width: '80%', height: 90, borderRadius: 10},
  schedule: {
    color: 'black',
  },
})
