import React from 'react'
import {SafeAreaView, View} from 'react-native'

const ViewContainer = ({children}: any) => {
  return <View style={{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }}>{children}</View>
}

export default ViewContainer
