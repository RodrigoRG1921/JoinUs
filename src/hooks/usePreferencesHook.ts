import { useState, useEffect } from 'react'

import { IPreference } from '../constants'

import categoriesJson from '../data/categories-filters.json'

const usePreferencesHook = () => {
  const [preferences, setPreferences] = useState<Array<IPreference>>([])
  const [preferencesSelectedMap, setPreferencesSelectedMap] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const filters: Array<IPreference> = categoriesJson.filters.map(filter => ({ title: filter, key: filter }))
    setPreferences(filters)
  }, [])

  return {
    preferences,
    preferencesSelectedMap,
    setPreferencesSelectedMap
  }
}

export {
  usePreferencesHook
}
