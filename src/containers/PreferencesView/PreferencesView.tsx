import React from 'react'
import { ScrollView, View } from 'react-native'
import { Chip } from '@react-native-material/core'

import { styles } from './PreferencesView.styles'

import { IPreference } from '../../constants'

import { usePreferencesHook } from '../../hooks'

interface IProps {
  preferences: Array<IPreference>;
}

const PreferencesView = ({
  preferences,
}: IProps) => {
  const { preferencesSelectedMap, setPreferencesSelectedMap } = usePreferencesHook()

  const handleOnChipClick = (key: string) => {
    const chipsSelectedMapCopy = { ...preferencesSelectedMap }
    chipsSelectedMapCopy[key] = !chipsSelectedMapCopy[key]
    setPreferencesSelectedMap(chipsSelectedMapCopy)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chipsContainer}>
        { preferences.map(preference => (
          <Chip
            onPress={() => handleOnChipClick(preference.key)}
            color={preferencesSelectedMap[preference.key] ? 'red' : undefined}
            style={styles.chip}
            key={preference.key}
            variant='outlined'
            label={preference.title} />
        ))}
      </View>
    </ScrollView>
  )
}

export default PreferencesView
