import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { Surface, SurfaceProps } from '@react-native-material/core'

import { styles } from './CategoryCard.styles'
import { ICategory } from '../../constants'

interface IProps {
  onPress?: ((event: string) => void);
}

const CategoryCard = ({
  imageUri,
  elevation = 1,
  onPress,
  title,
  ...props
}: IProps & ICategory & SurfaceProps) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => onPress?.(title)}
      style={styles.card}>
      <Surface elevation={elevation} {...props} style={styles.surface}>
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode='cover' />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Surface>
    </TouchableOpacity>
  </View>
)

export default CategoryCard
