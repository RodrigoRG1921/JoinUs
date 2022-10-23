import { useState, useEffect } from 'react'

import { IRestaurant } from '../constants/interfaces'

interface IProps {
  preferences?: Array<string>
  restaurants?: Array<IRestaurant>
  category?: string
}

const useResultsHook = ({
  preferences,
  restaurants,
  category
}: IProps) => {
  const [results, setResults] = useState<IRestaurant[]>([])

  useEffect(() => {
    if (!restaurants) {
      return
    }

    if (!category && !preferences?.length) {
      setResults(restaurants)
      return
    }

    let preResults: IRestaurant[] = []

    if (category) {
      preResults = restaurants.filter(({ category: categoryRestaurant }) =>
        categoryRestaurant.toLowerCase() === category.toLocaleLowerCase())
    }

    if (preferences && preferences.length) {
      const preferencesString = preferences.reduce((prev, current) => {
        return `${prev} ${current}`
      }, '')
      preResults = preResults.filter(({ tags }) => tags.toLocaleLowerCase().includes(preferencesString.toLocaleLowerCase()))
    }

    setResults(preResults)
  }, [category, preferences, restaurants])

  return {
    results
  }
}

export {
  useResultsHook
}
