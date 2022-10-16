import React, {Children} from 'react'
import {SafeAreaView, ScrollView} from 'react-native'

const ScrollViewContainer = ({children}: any) => {
  return (
    <SafeAreaView>
      <ScrollView style={{margin: 16}}>{children}</ScrollView>
    </SafeAreaView>
  )
}

export default ScrollViewContainer
