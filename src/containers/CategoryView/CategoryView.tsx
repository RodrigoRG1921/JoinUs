import React from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './CategoryView.styles'

import CategoryCard from '../../components/CategoryCard'
import { ICategory } from '../../constants'

interface IProps {
  categories?: Array<ICategory>;
  numColumns?: number;
  handleCategoryCardOnPress?: ((event: string) => void);
}

const CategoryView = ({
  categories,
  numColumns = 2,
  handleCategoryCardOnPress
}: IProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.key}
        numColumns={numColumns}
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            { ...item }
            imageUri={item.imageUri}
            onPress={handleCategoryCardOnPress} />
        )}/>
    </View>
  )
}

export default CategoryView
