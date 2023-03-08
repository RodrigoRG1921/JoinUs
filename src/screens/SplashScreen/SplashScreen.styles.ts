import { Platform, StatusBar, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mainText: {
    fontSize: 100,
    fontWeight: '900',
    color: 'white'
  },
  secondaryText: {
    fontSize: 60,
    fontWeight: '900',
    color: 'white'
  }
})

export {
  styles
}
