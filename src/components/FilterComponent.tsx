import React from 'react'
import {View} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {Divider} from '@react-native-material/core'
import json from '../data/categories-filters.json'
import ScrollViewContainer from './ScrollViewContainer'

const FilterComponent = () => {
  const filters: string[] = json.filters
  console.log(filters)
  return (
    <ScrollViewContainer>
      {filters.map(filter => (
        <View key={filter}>
          <Divider style={{margin: 5}} />
          <BouncyCheckbox
            text={filter}
            textStyle={{
              textDecorationLine: 'none',
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
            }}
            size={40}
            iconStyle={{borderColor: 'black'}}
            innerIconStyle={{borderColor: 'black'}}
            fillColor="gray"
          />
        </View>
      ))}
    </ScrollViewContainer>
  )
}

export default FilterComponent
