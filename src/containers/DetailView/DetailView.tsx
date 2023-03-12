import React, { useState, useCallback } from 'react'
import { View, Image, ScrollView, Linking, Platform } from 'react-native'
import { Surface, Text, Chip, Stack } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/MaterialIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

import { IRestaurant } from '../../constants'
import { styles } from './DetailView.styles'

import ContactModal from '../../components/ContactModal'
import ScheduleModal from '../../components/ScheduleModal'
import RateModal from '../../components/RateModal/RateModal'

import GalleryView from '../../components/GalleryView'
import BudgetModal from '../../components/BudgetModal'

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
  const [isBudgetModalOpen, setBudgetModalOpen] = useState<boolean>(false)


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
    const [lat, lng] = coords.split(',')
    // openMap({ latitude: parseInt(lat), longitude: parseInt(lng) })
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    })
    const latLng = `${lat},${lng}`
    const label = 'Ir'
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    })
    if (url) {
      Linking.openURL(url)
    }
  }, [coords])

  const handleBudgetChipPress = useCallback(() => {
    setBudgetModalOpen(true)
  }, [isBudgetModalOpen])

  const handleBudgetDismissModal = useCallback(() => {
    setBudgetModalOpen(false)
  }, [isBudgetModalOpen])
  const priceRangeLength = priceRange.length.toFixed(1)
  return (
    <Surface style={styles.container}>
      <ContactModal isOpen={isContactModalOpen} handleDismiss={handleContactDismissModal} />
      <ScheduleModal schedule={schedule} isOpen={isScheduleModalOpen} handleDismiss={handleScheduleDismissModal} />
      <RateModal isOpen={isRateModalOpen} handleDismiss={handleDismissRateModal} rate={rating} />
      <BudgetModal isOpen={isBudgetModalOpen} handleDismiss={handleBudgetDismissModal}  price={priceRange}/>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text variant='h5'>{name}</Text>
        </View>
        <View style={styles.favContainer}>
          
        </View>
        <View style={styles.imageContainer}>
          <EvilIcon color={'#B71C1C'} name='heart' size={26} />
        </View>
      </View>

      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>
          <Chip
            variant='outlined'
            color={'#B71C1C'}
            style={ styles.rateChipContainer}
            onPress={handleRateChipOnPress} label={
              <>
                <Text style={{ color: '#B71C1C' }} variant='subtitle1'>{rating}</Text>
                {[...Array(Number(Math.floor(Number(rating))))].map((star, index) => <Icon  color={'#B71C1C'} name='star' size={16} key={index}/>)}
                
              </>
            } />

          <Chip
            variant='outlined'

            style={{ borderColor: '#B71C1C', borderWidth: 1, width: 100}}
            contentContainerStyle={{width: 100, flexDirection: 'row', justifyContent: 'center'  }}
            label={<Text style={{ color: '#B71C1C' }} variant='subtitle1'>{priceRange} {priceRangeLength}</Text>} 
            onPress = {handleBudgetChipPress}/>


          <Chip
            variant='outlined'
            style={{ borderColor: '#B71C1C', borderWidth: 1}}
            color="#B71C1C"
            onPress={handleReachOnPress} label={<Text style={{ color: '#B71C1C' }} variant='subtitle1'>Cómo llegar</Text>} />
        </Stack>
      </View>

      <View style={styles.unknownButtons}>
        <Stack style={{ width: '100%' }} spacing={4} direction={'row'} justify={'between'}>
          <Chip
            variant='outlined'
            style={{ borderColor: '#B71C1C', borderWidth: 1 }}
            color={'#B71C1C'}
            onPress={handleOnScheduleChipPress} label={<Text style={{ color: '#B71C1C' }} variant='subtitle1'>{schedule[0]}</Text>} />

          <Chip
            variant='outlined'
            color={'#B71C1C'}
            style={{ borderColor: '#B71C1C', borderWidth: 1 }}
            label={<Text style={{ color: '#B71C1C' }} variant='subtitle1'>Compartir</Text>} />

          <Chip
            variant='outlined'
            color={'#B71C1C'}
            style={{ borderColor: '#B71C1C', borderWidth: 1 }}
            onPress={handleOnContactChipPress} label={<Text style={{ color: '#B71C1C' }} variant='subtitle1'>Contacto</Text>} />

          

        </Stack>
      </View>


      <ScrollView style={{ flexGrow: 1, marginTop: 11 }}>
        <GalleryView images={images} />
      </ScrollView>

    </Surface>
  )
}

export default DetailView

// B71C1C