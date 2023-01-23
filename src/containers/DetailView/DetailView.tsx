import React, { useState, useCallback } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Surface, Text, Chip, Stack } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { IRestaurant } from '../../constants'
import { styles } from './DetailView.styles'

import ContactModal from '../../components/ContactModal'
import ScheduleModal from '../../components/ScheduleModal'
import RateModal from '../../components/RateModal/RateModal'

import GalleryView from '../../components/GalleryView'

interface IProps {
  onPress?: (coords: string) => void;
  images: string[];
}

const DetailView = ({
  onPress,
  name,
  imageUri,
  rating,
  priceRange,
  address,
  schedule,
  coords,
  images
}: IProps & IRestaurant) => {
  const [isContactModalOpen, setContactModalOpen] = useState<boolean>(false)
  const [isScheduleModalOpen, setScheduleModalOpen] = useState<boolean>(false)
  const [isRateModalOpen, setRateModalOpen] = useState<boolean>(false)

  const handleContactDismissModal = useCallback(() => {
    setContactModalOpen(false)
  }, [isContactModalOpen])

  const handleScheduleDismissModal = useCallback(() => {
    setScheduleModalOpen(false)
  }, [isScheduleModalOpen])

  const handleOnScheduleChipPress = useCallback(() => {
    setScheduleModalOpen(true)
  }, [isScheduleModalOpen])

  const handleOnContactChipPress = useCallback(() => {
    setContactModalOpen(true)
  }, [isContactModalOpen])

  const handleDismissRateModal = useCallback(() => {
    setRateModalOpen(false)
  }, [isRateModalOpen])

  const handleRateChipOnPress = useCallback(() => {
    setRateModalOpen(true)
  }, [isRateModalOpen])

  const handleReachOnPress = useCallback(() => {
    onPress?.(coords)
  }, [coords])

  return (
    <Surface style={styles.container}>
      <ContactModal isOpen={isContactModalOpen} handleDismiss={handleContactDismissModal} />
      <ScheduleModal schedule={schedule} isOpen={isScheduleModalOpen} handleDismiss={handleScheduleDismissModal} />
      <RateModal isOpen={isRateModalOpen} handleDismiss={handleDismissRateModal} rate={rating} />
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text variant='h5'>{name}</Text>
        </View>
        <View style={styles.favContainer}>
          <Icon name='heart' size={26} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode='cover' />
        </View>
      </View>

      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>
          <Chip onPress={handleRateChipOnPress} label={
            <>
              <Text variant='subtitle1'>{rating}</Text>
              <Text style={{ height: 38, marginHorizontal: 16 }} variant='h3'>{'*'.repeat(Number(rating))}</Text>
            </>
          } />
          <Chip onPress={handleOnScheduleChipPress} label={<Text variant='subtitle1'>{schedule[0]}</Text>} />
        </Stack>
      </View>

      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>
          <Chip onPress={handleReachOnPress} label={<Text variant='subtitle1'>Cómo llegar</Text>} />

          <Chip onPress={handleOnContactChipPress} label={<Text variant='subtitle1'>Contacto</Text>} />

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
