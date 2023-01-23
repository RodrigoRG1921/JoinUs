import React, { useCallback } from 'react'
import { Provider } from '@react-native-material/core'
import openMap, { createOpenLink } from 'react-native-open-maps'

import DetailView from '../../containers/DetailView'

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

const schedule = [
  'Lunes 12:30 - 8:00',
  'Martes 12:30 - 8:00',
  'Miércoles 12:30 - 8:00',
  'Jueves 12:30 - 8:00',
  'Viernes 12:30 - 8:00',
  'Sábado 12:30 - 8:00',
  'Domingo 12:30 - 8:00',
]

const RestaurantDetailScreen = (props: any) => {
  console.log('===========')
  console.log(props.route.params)
  console.log('===========')
  const handleRestaurantClick = useCallback((coords: string) => {
    const [lat, lng] = coords.split(',')
    // openMap({ latitude: parseInt(lat), longitude: parseInt(lng) })
    createOpenLink({ latitude: parseInt(lat), longitude: parseInt(lng) })
  }, [])

  return (
    <Provider>
      <DetailView
        { ...props.route.params } images={images} schedule={schedule} onPress={handleRestaurantClick} />
    </Provider>
  )
}

export default RestaurantDetailScreen
