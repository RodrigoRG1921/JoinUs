import { useState, useEffect } from 'react'

import { IRestaurant } from '../constants/interfaces'

import restaurantsJson from '../data/restaurants.json'

const useRestaurantsHook = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

  useEffect(() => {
    setRestaurants(restaurantsJson)
  }, [])

  return {
    restaurants
  }
}

export {
  useRestaurantsHook
}
