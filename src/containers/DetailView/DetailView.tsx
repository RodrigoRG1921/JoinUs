import React, { useState, useCallback } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Surface, Text, Divider, Chip, Stack, ListItem } from '@react-native-material/core'

import { IRestaurant } from '../../constants'
import { styles } from './DetailView.styles'

import Accordion from '../../components/Accordion'

import GalleryView from '../../components/GalleryView'

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
  const images = [
    'https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=',
    'https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU=', 
    'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=',
    'https://media.istockphoto.com/photos/woman-receiving-delivery-at-home-picture-id1370737382?b=1&k=20&m=1370737382&s=170667a&w=0&h=6hkUSWld9uJgZ2E5_WcCdnQfB3c3NO01SG5gg69kGqE=',
    'https://media.istockphoto.com/photos/buying-convenient-food-picture-id1371981344?b=1&k=20&m=1371981344&s=170667a&w=0&h=z37vNKdVPeTrgRcf-4uN-pgQKaL4orPObrE9rqzobdc=',
    'https://media.istockphoto.com/photos/high-angle-view-close-up-asian-woman-using-meal-delivery-service-picture-id1324465031?b=1&k=20&m=1324465031&s=170667a&w=0&h=kYSfoZUvAxYM4pLQOCJEkIm4KkCbnYNgxF_8_eJAXps=',
    'https://media.istockphoto.com/photos/best-sources-of-probiotic-on-gray-background-picture-id1359074648?b=1&k=20&m=1359074648&s=170667a&w=0&h=2Khf_2ENhjuJN2UAzoibe98LRZHhTwN5z_Fl4bPk-as=',
    'https://media.istockphoto.com/photos/foods-high-in-vitamin-c-picture-id1270726834?b=1&k=20&m=1270726834&s=170667a&w=0&h=fpNfD2-9lAMsylM5F7tSqT6I_OrHCpYY0s2fuMQiNCU='
  ]

  return (
    <Surface style={styles.container}>

      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text variant='h5'>{name}</Text>
        </View>
        <View style={styles.favContainer}>
          <Text>FAV</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode='cover' />
        </View>
      </View>

      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>
          <Chip label={
            <>
              <Text variant='subtitle1'>{rating}</Text>
              <Text style={{ height: 38, marginHorizontal: 16 }} variant='h3'>{'*'.repeat(Number(rating))}</Text>
            </>
          } />
          <Chip label={<Text variant='subtitle1'>Domingo 12:30 - 8:00</Text>} />
        </Stack>
      </View>

      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>

          <Chip label={<Text variant='subtitle1'>Cómo llegar</Text>} />

          <Chip label={<Text variant='subtitle1'>Contacto</Text>} />

          <Chip label={<Text variant='subtitle1'>{rating} $$$$$</Text>} />
        </Stack>
      </View>


      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>
          <Chip label={<Text variant='subtitle1'>Compartir</Text>} />
        </Stack>
      </View>

      <ScrollView style={{ flexGrow: 1 }}>
        <GalleryView images={images} />
      </ScrollView>
    </Surface>
  )
}

export default DetailView
