import React from 'react'
import { FlatList, View } from 'react-native'

import { styles } from './ResultsView.styles'

import { IRestaurant } from '../../constants/interfaces'

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

interface IProps {
  results: Array<IRestaurant>
}

const ResultsView = ({
  results
}: IProps) => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.name}
      numColumns={1}
      data={results}
      renderItem={({ item }) => (
        <View key={item.name} style={styles.cardContainer}>
          <RestaurantCard { ...item } />
        </View>
      )}/>
  )
}

export default ResultsView
