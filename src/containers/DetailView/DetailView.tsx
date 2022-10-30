import React from 'react'
import { View, Image } from 'react-native'
import { Surface, SurfaceProps, Text, Divider } from '@react-native-material/core'

import { IRestaurant } from '../../constants'
import { styles } from './DetailView.styles'
import Button from '../../components/Button'

interface IProps {
  onPress?: (coords: string) => void
}

const DetailView = ({
  onPress,
  name,
  imageUri,
  rating,
  priceRange,
  address,
  schedule,
  coords
}: IProps & IRestaurant) => {

  return (
    <Surface style={styles.container}>

      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text variant='h6'>{name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode='cover' />
        </View>
      </View>

      <View style={styles.unknownButtons}>
        <Button title={'1'} />
        <Button style={styles.button} title={'2'} />
        <Button title={'3'} />
      </View>

      <View style={styles.infoContainer}>
        <View>
          <Text variant='h6'>{rating}</Text>
        </View>
        <View>
          <Text style={{ height: 38, marginHorizontal: 16 }} variant='h3'>{'*'.repeat(Number(rating))}</Text>
        </View>
        <View>
          <Text variant='h6'>{priceRange}</Text>
        </View>
      </View>

      <View style={{ marginBottom: 8 }}>
        <Text variant='h6'>Dirección: {address}</Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text variant='h6'>Horarios:</Text>
        </View>
        <View style={{ flex: 1 }}>
          { [...Array(5)].map((a, index) =>
            <Text style={{ marginBottom: 12 }} key={`schedule-${index}`}>{schedule}</Text>) }
        </View>
      </View>

      <View style={{ marginVertical: 16 }}>
        <Divider />
      </View>

      <View style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Text>1: GUADAR / FAVORITO</Text>
        <Text style={{ marginVertical: 12 }}>2: COMO LLEGAR</Text>
        <Text onPress={() => onPress?.(coords)}>3: PÁGINA WEB / GOOGLE</Text>
      </View>
    </Surface>
  )
}

export default DetailView
