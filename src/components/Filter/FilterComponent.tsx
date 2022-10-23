import React from 'react'
import {View, FlatList} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {Divider} from '@react-native-material/core'
import json from '../../data/categories-filters.json'
import {Button} from '@react-native-material/core'
import {styles} from './FilterComponent.styles'
interface Props {
  onCheckboxPress: (isChecked: boolean, filter: string) => void
  onPress: () => void
}
const FilterComponent = ({onCheckboxPress, onPress}: Props) => {
  const filters: string[] = json.filters

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={item => item}
          numColumns={1}
          data={filters}
          renderItem={({item}) => (
            <View key={item}>
              <Divider style={styles.divider} />
              <BouncyCheckbox
                text={item}
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
                onPress={(isChecked: boolean) =>
                  onCheckboxPress(isChecked, item)
                }
              />
            </View>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Apply filter" onPress={onPress} />
      </View>
    </View>
  )
}

export default FilterComponent
