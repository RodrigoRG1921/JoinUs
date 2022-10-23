import React from 'react'
import { ScrollView, View } from 'react-native'
import { Chip } from '@react-native-material/core'

import { styles } from './PreferencesView.styles'

import { IPreference } from '../../constants'

interface IProps {
  preferences: Array<IPreference>;
  handleOnChipClick: (value: string) => void;
  preferencesSelectedMap: {[key: string]: boolean};
}

const PreferencesView = ({
  preferences,
  handleOnChipClick,
  preferencesSelectedMap
}: IProps) => {
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
