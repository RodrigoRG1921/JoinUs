import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native'

const ScrollViewContainer = ({children}: any) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  )
}

export default ScrollViewContainer

const styles = StyleSheet.create({
  scrollView: {
    margin: 16,
    flexGrow: 1,
    marginBottom: 100,
  },
})
