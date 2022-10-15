import React from 'react'
import {View, Text} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {Divider} from '@react-native-material/core'

const FilterComponent = () => {
  return (
    <View>
      <View style={{margin: 10}}>
        <Divider style={{margin: 10}} />
        <BouncyCheckbox
          text="Pet Friendly"
          textStyle={{
            textDecorationLine: 'none',
            color: 'black',
          }}
          size={40}
          iconStyle={{borderColor: 'black'}}
          innerIconStyle={{borderColor: 'black'}}
          fillColor="gray"
        />
      </View>
      <View style={{margin: 10}}>
        <Divider style={{margin: 10}} />
        <BouncyCheckbox
          text="Pet Friendly"
          textStyle={{
            textDecorationLine: 'none',
            color: 'black',
          }}
          size={40}
          iconStyle={{borderColor: 'black'}}
          innerIconStyle={{borderColor: 'black'}}
          fillColor="gray"
        />
      </View>
    </View>
  )
}

export default FilterComponent
