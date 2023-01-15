import React, { useCallback } from 'react'
import { FlatList, View } from 'react-native'

import { styles } from './ResultsView.styles'

import { IRestaurant } from '../../constants/interfaces'

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

interface IProps {
  results: Array<IRestaurant>;
  onPress: (resta: IRestaurant) => void;
}

const ResultsView = ({
  results,
  onPress
}: IProps) => {

  const keyExtractor = useCallback((item: IRestaurant) => item.name, [])

  const renderItem = useCallback(({ item }: { item: IRestaurant }) => (
    <View key={item.name} style={styles.cardContainer}>
      <RestaurantCard onPress={onPress} { ...item } />
    </View>
  ), [])

  return (
    <FlatList
      style={styles.container}
      keyExtractor={keyExtractor}
      numColumns={1}
      data={results}
      renderItem={renderItem}/>
  )
}

export default ResultsView
