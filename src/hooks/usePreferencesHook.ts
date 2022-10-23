import { useState, useEffect } from 'react'

import { IPreference } from '../constants'

import categoriesJson from '../data/categories-filters.json'

const usePreferencesHook = () => {
  const [preferences, setPreferences] = useState<Array<IPreference>>([])
  const [preferencesSelectedMap, setPreferencesSelectedMap] = useState<{[key: string]: boolean}>({})
  const [preferencesSelected, setPreferencesSelected] = useState<Array<string>>([])

  useEffect(() => {
    const filters: Array<IPreference> = categoriesJson.filters.map(filter => ({ title: filter, key: filter }))
    setPreferences(filters)
  }, [])

  useEffect(() => {
    const preferencesSelectedArray: Array<string> = []
    
    for (const [preferenceKey, preferenceValue] of Object.entries(preferencesSelectedMap)) {
      if (preferenceValue) {
        preferencesSelectedArray.push(preferenceKey)
      }
    }
    setPreferencesSelected(preferencesSelectedArray)
  }, [preferencesSelectedMap])

  return {
    preferences,
    preferencesSelectedMap,
    setPreferencesSelectedMap,
    preferencesSelected,
    setPreferencesSelected
  }
}

export {
  usePreferencesHook
}
