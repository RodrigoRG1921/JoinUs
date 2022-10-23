import React from 'react'
import {SafeAreaView, View} from 'react-native'

const ViewContainer = ({children}: any) => {
  return <View style={{marginHorizontal: 16, flex: 1}}>{children}</View>
}

export default ViewContainer
