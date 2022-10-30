import React from 'react'

import DetailView from '../../containers/DetailView'

const RestaurantDetailScreen = (props: any) => {
  console.log('===========')
  console.log(props.route.params)
  console.log('===========')
  const handleRestaurantClick = (coords: string) => {
    console.log(coords)
  }

  return (
    <DetailView { ...props.route.params } onPress={handleRestaurantClick} />
  )
}

export default RestaurantDetailScreen
