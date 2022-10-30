import React from 'react'
import { FlatList, View } from 'react-native'

import { styles } from './ResultsView.styles'

import { IRestaurant } from '../../constants/interfaces'

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

interface IProps {
  results: Array<IRestaurant>;
  onPress?: (resta: IRestaurant) => void;
}

const ResultsView = ({
  results,
  onPress
}: IProps) => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.name}
      numColumns={1}
      data={results}
      renderItem={({ item }) => (
        <View key={item.name} style={styles.cardContainer}>
          <RestaurantCard onPress={(resta) => onPress?.(resta)} { ...item } />
        </View>
      )}/>
  )
}

export default ResultsView
