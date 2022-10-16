import React from 'react'
import {SafeAreaView, View} from 'react-native'

const ViewContainer = ({children}: any) => {
  return (
    <SafeAreaView>
      <View style={{margin: 16}}>{children}</View>
    </SafeAreaView>
  )
}

export default ViewContainer
